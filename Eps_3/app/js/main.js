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
                let warna = (i < 2) ? "hitam" : "putih";
                let path = "./assets/images/" + warna + "/" + this.bidak[this.pihak][this.index][1] + ".svg";

                this.bidak[this.pihak][this.index] = new ObjectBidak[this.bidak[this.pihak][this.index][1]](
                    path, j, this.tmp,
                    parseInt(this.bidak[this.pihak][this.index][0]),
                    this.papan_catur,
                    this.area, this.pihak, "p", this.index
                );

                this.bidak[this.pihak][this.index].element.onclick = this.click_bidak.bind(this, this.pihak, this.index);

            }
        }

    }

    // Method
    representasi_board () {

        const rboard = new Array(8).fill().map(() => new Array(8).fill('x'));
        const allBidak = [...this.bidak['h'], ...this.bidak['p']];

        for (let i = 0; i < allBidak.length; i++) {
            const {y, x, pihak, i_index} = allBidak[i];
            rboard[y][x] = pihak + i_index;
        }
        return rboard;

    }

    // Method
    hapus_permukaan () {
        this.papan_permukaan.innerHTML = "";

    }

    // Method
    move (i, j, x, y) {

        this.hapus_permukaan();

        this.bidak[i][j].x = x;
        this.bidak[i][j].y = y;

        this.bidak[i][j].element.style.left = x * this.area + "px";
        this.bidak[i][j].element.style.top = y * this.area + "px";

        this.jalan_putih = !this.jalan_putih;

        if (this.data[y][x] != "x") {

            const pihak = this.data[y][x][0];
            const index = parseInt(this.data[y][x].substring(1));
            const arrBidak = this.bidak[pihak];
            arrBidak[index].death();
            arrBidak.splice(index, 1);
            
            for (let i = index; i < arrBidak.length; i++) {
              const bidak = arrBidak[i];
              bidak.i_index = i;
              bidak.element.onclick = () => this.click_bidak(pihak, i);
            }
        }
        this.data = this.representasi_board();
        
    }

    // Method
    click_bidak (i, j) {

        if (this.jalan_putih && this.bidak[i][j].pihak == "p") {
            this.aksi_click(i, j);

        } else if (!this.jalan_putih && this.bidak[i][j].pihak == "h") {
            this.aksi_click(i, j);

        }
    }

    // Method
    aksi_click (i, j) {

        // Bersihkan permukaan
        this.hapus_permukaan();

        // Seleksi legal_move
        this.lmove = this.bidak[i][j].legal_move(this.data);
        for (let x = 0; x < this.lmove.length; x++) {
            this.area_gerak(
                i, j,
                this.bidak[i][j].x + this.lmove[x][0],
                this.bidak[i][j].y + this.lmove[x][1]
            );    
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
    all_legal_move () {

        this.a_lmove = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 8; j++) {
                this.lmove = this.bidak[i].legal_move(this.representasi_board());
                if (this.lmove.length > 0) {
                    this.tmp = [];
                    this.tmp.push(this.bidak[i].position_str());
                    this.tmp.push(this.bidak[i].nama);
                    this.tmp.push(this.bidak[i].pihak);
                    this.tmp.push(this.lmove);
                    this.a_lmove.push(this.tmp);
                }
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

} const run = new Board();