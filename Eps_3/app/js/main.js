import { Pion, Benteng, Kuda, Peluncur, Ratu, Raja } from "./bidak/Bidak.js";
const ObjectBidak = {
    'p': Pion,
    'b': Benteng,
    'k': Kuda,
    'g': Peluncur,
    'q': Ratu,
    'r': Raja
}

class Board {

    constructor (area = 110) {

        // Atribute
        this.data = [];
        this.area = area;
        this.jalan_putih = true;
        this.king_safe = true;
        this.papan_catur = document.getElementById("papan_catur");
        this.papan_permukaan = document.getElementById("papan_permukaan");
        this.bidak = {
            "h": [
                "5b", "3k", "3g", "9q", "0r", "3g", "3k", "5b",
                "1p", "1p", "1p", "1p", "1p", "1p", "1p", "1p"
            ],
            "p": [
                "1p", "1p", "1p", "1p", "1p", "1p", "1p", "1p",
                "5b", "3k", "3g", "9q", "0r", "3g", "3k", "5b"
            ]
            
            };

        // Bentuk papan catur
        this.papan_catur.style.height = (this.area * 8) + "px";
        this.papan_catur.style.width = (this.area * 8) + "px";
        this.papan_permukaan.style.height = (this.area * 8) + "px";
        this.papan_permukaan.style.width = (this.area * 8) + "px";

        this.draw_area();
        this.tambah_bidak();
        this.data = this.representasi_board();

    }

    // Method
    draw_area () {

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {

                let element = document.createElement("div");
                element.style.position = "absolute";
                element.style.height = this.area + "px";
                element.style.width = this.area + "px";
                element.style.top = (i*this.area) + "px";
                element.style.left = (j*this.area) + "px";
                element.style.borderRadius = "5px";
                element.style.background = (i+j) % 2 == 0 ? "#f0dab5" : "#b48662";
                this.papan_catur.appendChild(element);

            }
        }

    }

    // Method
    tambah_bidak () {

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 8; j++) {

                this.tmp = (i < 2) ? i : i+4;
                this.pihak = (i < 2) ? 'h' : 'p';
                this.index = (i < 2) ? i*8+j : (i-2)*8+j;
                const piece = this.bidak[this.pihak][this.index][1];
                const warna = (i < 2) ? "hitam" : "putih";
                const path = "./assets/images/" + warna + "/" + piece + ".svg";

                this.bidak[this.pihak][piece] = new ObjectBidak[piece](
                    path, j, this.tmp,
                    parseInt(this.bidak[this.pihak][this.index][0]),
                    this.papan_catur,
                    this.area, this.pihak, piece
                );

                this.bidak[this.pihak][this.index].element.onclick = this.click_bidak.bind(this, this.pihak, piece);

            }
        }

    }

    // Method
    move (i, j, x, y) {

        this.hapus_permukaan();

        this.bidak[i][j].x = x;
        this.bidak[i][j].y = y;

        this.bidak[i][j].element.style.left = x * this.area + "px";
        this.bidak[i][j].element.style.top = y * this.area + "px";

        if (this.bidak[i][j].first)
            this.bidak[i][j].first = false;

        this.jalan_putih = !this.jalan_putih;

        if (this.data[y][x] != "x") {

            const pihak = this.data[y][x][0];
            const index = parseInt(this.data[y][x].substring(2));
            const arrBidak = this.bidak[pihak];
            arrBidak[index].death();
            arrBidak.splice(index, 1);
            
            for (let i = index; i < arrBidak.length; i++) {
              const bidak = arrBidak[i];
              bidak.i_index = i;
              bidak.element.onclick = () => this.click_bidak(pihak, i);
            }
        }

        const pihak = this.jalan_putih ? "ph" : "hp";
        this.king_safe = this.is_safe_king(pihak[0], pihak[1]);
        if (!this.king_safe) {
            this.bidak[pihak[0]]
        }
        this.data = this.representasi_board();
        
    }

    // Method
    representasi_board () {

        const rboard = new Array(8).fill().map(() => new Array(8).fill('x'));
        const allBidak = [...this.bidak['h'], ...this.bidak['p']];

        for (let i = 0; i < allBidak.length; i++) {
            const {y, x, pihak, i_index, nama} = allBidak[i];
            rboard[y][x] = pihak + nama + i_index;
        }
        return rboard;

    }

    // Method
    is_safe_king (pihak, musuh) {

        let row, column;
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].length; j++) {
                if (this.data[i][j][0] == pihak && this.data[i][j][1] == "r") {
                    row = j;
                    column = i;
                }
            }   
        }
        const musuh_moves = this.all_legal_move(musuh);
        for (let i = 0; i < musuh_moves.length; i++) {
            const moves = musuh_moves[i][3];
            for (let j = 0; j < moves.length; j++) {
                const move = moves[j];
                if (move[0] === row && move[1] === column) {
                    // Raja dalam posisi yang tidak aman
                    return false;
                }
            }
        }

        // Raja aman
        return true;
    }

    // Method
    hapus_permukaan () {
        this.papan_permukaan.innerHTML = "";

    }

    // Method
    check_move (i, j, x, y) {

        let l_tmp_x;
        let l_tmp_y;
        let check = false;
        const tmp_x = this.bidak[i][j].x;
        const tmp_y = this.bidak[i][j].y;

        this.bidak[i][j].x = x;
        this.bidak[i][j].y = y;
        this.jalan_putih = !this.jalan_putih;

        if (this.data[y][x] != "x") {

            check = true;
            const pihak = this.data[y][x][0];
            const index = parseInt(this.data[y][x].substring(2));
            const arrBidak = this.bidak[pihak];
            this.bidak_musuh = arrBidak[index];

            l_tmp_x = this.bidak_musuh.x;
            l_tmp_y = this.bidak_musuh.y;
            this.bidak_musuh.y = 100;
            this.bidak_musuh.x = 100;

        }

        this.data = this.representasi_board();
        const pihak = this.jalan_putih ? "ph" : "hp";
        const hasil = this.is_safe_king(pihak[0], pihak[1]);
        this.jalan_putih = !this.jalan_putih;
        console.log(tmp_x + " " + tmp_y);
        this.bidak[i][j].x = tmp_x;
        this.bidak[i][j].y = tmp_y;

        if (check) {
            this.bidak_musuh.x = l_tmp_x;
            this.bidak_musuh.y = l_tmp_y;
        }

        return hasil;
        
    }

    // Method
    click_bidak (i, j) {

        // Bersihkan permukaan
        this.hapus_permukaan();

        if (this.jalan_putih && this.bidak[i][j].pihak == "p") {
            this.aksi_click(i, j);

        } else if (!this.jalan_putih && this.bidak[i][j].pihak == "h") {
            this.aksi_click(i, j);

        }
    }

    // Method
    aksi_click (i, j) {

        // Seleksi legal_move
        this.lm = this.bidak[i][j].legal_move(this.data);
        if (this.bidak[i][j].nama == "r" && this.bidak[i][j].first) {
            this.bidak[i][j].special_move(this.data).forEach(dt => {
                if (dt[0] < this.bidak[i][j].x && ) {
                    
                }
            });
            
        }
        for (let x = 0; x < this.lm.length; x++) {
            if (!this.king_safe) {
                if (this.check_move(
                    i, j,
                    this.lm[x][0],
                    this.lm[x][1]
                )) {
                    this.area_gerak(
                        i, j,
                        this.lm[x][0],
                        this.lm[x][1]
                    );    
                }

            } else {
                this.area_gerak(
                    i, j,
                    this.lm[x][0],
                    this.lm[x][1]
                ); 

            }
        }

    }

    // Method
    area_gerak (i, j, x, y) {

        this.tmp_x = this.area * x;
        this.tmp_y = this.area * y;

        this.lingkaran = document.createElement("div");
        this.lingkaran.style.position = "absolute";
        this.lingkaran.style.height = this.area/2 + "px";
        this.lingkaran.style.width = this.area/2 + "px";
        this.lingkaran.style.left = (this.tmp_x + (this.area/4)) + "px";
        this.lingkaran.style.top = (this.tmp_y + (this.area/4)) + "px";
        this.lingkaran.style.zIndex = "2";
        this.lingkaran.style.background = "rgba(0, 0, 0, 0.5)";
        this.lingkaran.style.borderRadius = "50%";
        this.lingkaran.addEventListener("click", this.move.bind(this, i, j, x, y));
        this.papan_permukaan.appendChild(this.lingkaran);

    }

    // Method
    all_legal_move (pihak) {

        this.a_lmove = [];
        const bidak = this.bidak[pihak];
        for (let i = 0; i < bidak.length; i++) {

            this.lmove = bidak[i].legal_move(this.representasi_board());
            if (this.lmove.length > 0) {
                this.tmp = [];
                this.tmp.push(bidak[i].position_str());
                this.tmp.push(bidak[i].nama);
                this.tmp.push(pihak);
                this.tmp.push(this.lmove);
                this.a_lmove.push(this.tmp);
            }
            
        }
        return this.a_lmove;

    }

    // Method
    search_bidak (value, arr) {

        // fungsi rekursif tail
        function search(arr, i) {
            if (i >= arr.length) {
                return false;
            }
            const element = arr[i];
            
            if (typeof element === 'string' && element === value) {
                return true;
            }
            
            if (Array.isArray(element)) {
                return search(element, 0) || search(arr, i + 1);
            }
            return search(arr, i + 1);
        }
        
        return search(arr, 0);
    }

} 

const run = new Board();