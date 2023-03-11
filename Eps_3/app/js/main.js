import { Pion, Benteng, Kuda, Peluncur, Ratu, Raja } from "./bidak/Bidak.js";

class Board {

    constructor (area = 110) {

        // Atribute
        this.area = area;
        this.papan_catur = document.getElementById("papan_catur");
        this.papan_permukaan = document.getElementById("papan_permukaan");
        this.bidak = [
            ["5b", "3k", "3g", "9q", "0r", "3g", "3k", "5b"],
            ["1p", "1p", "1p", "1p", "1p", "1p", "1p", "1p"],
            ["1p", "1p", "1p", "1p", "1p", "1p", "1p", "1p"],
            ["5b", "3k", "3g", "9q", "0r", "3g", "3k", "5b"]
        ];

        // Bentuk papan catur
        this.papan_catur.style.height = (this.area * 8) + "px";
        this.papan_catur.style.width = (this.area * 8) + "px";
        this.papan_permukaan.style.height = (this.area * 8) + "px";
        this.papan_permukaan.style.width = (this.area * 8) + "px";

        this.draw_area();
        this.tambah_bidak();
        console.log(this.all_legal_move());

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
                element.style.background = (i+j) % 2 == 0 ? "#f0dab5" : "#b48662";
                this.papan_catur.appendChild(element);

            }
        }

    }

    // Method
    tambah_bidak () {

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 8; j++) {   

                if (this.bidak[i][j].substring(1) == "p")
                    this.bidak[i][j] = new Pion("./assets/images/" + (i < 2 ? "hitam":"putih") + "/" + this.bidak[i][j].substring(1) + ".svg", j, (i < 2 ? i:i+4), parseInt(this.bidak[i][j][0]), this.papan_catur, this.papan_permukaan, this.area, (i < 2 ? 'h':'p'), "p");

                else if (this.bidak[i][j].substring(1) == "b")
                    this.bidak[i][j] = new Benteng("./assets/images/" + (i < 2 ? "hitam":"putih") + "/" + this.bidak[i][j].substring(1) + ".svg", j, (i < 2 ? i:i+4), parseInt(this.bidak[i][j][0]), this.papan_catur, this.papan_permukaan, this.area, (i < 2 ? 'h':'p'), "b");

                else if (this.bidak[i][j].substring(1) == "k")
                    this.bidak[i][j] = new Kuda("./assets/images/" + (i < 2 ? "hitam":"putih") + "/" + this.bidak[i][j].substring(1) + ".svg", j, (i < 2 ? i:i+4), parseInt(this.bidak[i][j][0]), this.papan_catur, this.papan_permukaan, this.area, (i < 2 ? 'h':'p'), "k");

                else if (this.bidak[i][j].substring(1) == "g")
                    this.bidak[i][j] = new Peluncur("./assets/images/" + (i < 2 ? "hitam":"putih") + "/" + this.bidak[i][j].substring(1) + ".svg", j, (i < 2 ? i:i+4), parseInt(this.bidak[i][j][0]), this.papan_catur, this.papan_permukaan, this.area, (i < 2 ? 'h':'p'), "g");

                else if (this.bidak[i][j].substring(1) == "q")
                    this.bidak[i][j] = new Ratu("./assets/images/" + (i < 2 ? "hitam":"putih") + "/" + this.bidak[i][j].substring(1) + ".svg", j, (i < 2 ? i:i+4), parseInt(this.bidak[i][j][0]), this.papan_catur, this.papan_permukaan, this.area, (i < 2 ? 'h':'p'), "q");

                else if (this.bidak[i][j].substring(1) == "r")
                    this.bidak[i][j] = new Raja("./assets/images/" + (i < 2 ? "hitam":"putih") + "/" + this.bidak[i][j].substring(1) + ".svg", j, (i < 2 ? i:i+4), parseInt(this.bidak[i][j][0]), this.papan_catur, this.papan_permukaan, this.area, (i < 2 ? 'h':'p'), "r");

                this.bidak[i][j].element.addEventListener("click", this.click_bidak.bind(this, i, j));

            }
        }

    }

    // Method
    representasi_board () {

        this.rboard = [
            ["x", "x", "x", "x", "x", "x", "x", "x"],
            ["x", "x", "x", "x", "x", "x", "x", "x"],
            ["x", "x", "x", "x", "x", "x", "x", "x"],
            ["x", "x", "x", "x", "x", "x", "x", "x"],
            ["x", "x", "x", "x", "x", "x", "x", "x"],
            ["x", "x", "x", "x", "x", "x", "x", "x"],
            ["x", "x", "x", "x", "x", "x", "x", "x"],
            ["x", "x", "x", "x", "x", "x", "x", "x"]
        ];

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 8; j++) {

                this.rboard[this.bidak[i][j].y][this.bidak[i][j].x] = this.bidak[i][j].poin + this.bidak[i][j].pihak;
                
            }
        }
        
        return this.rboard;

    }

    // Method
    click_bidak (i, j) {

        this.data = this.representasi_board();
        this.bidak[i][j].click(this.data);

    }

    // Method
    all_legal_move () {

        this.a_lmove = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 8; j++) {
                if (this.bidak[i][j].legal_move(this.representasi_board()).length > 0) {
                    this.tmp = [];
                    this.tmp.push(this.bidak[i][j].position_str());
                    this.tmp.push(this.bidak[i][j].nama);
                    this.tmp.push(this.bidak[i][j].pihak);
                    this.tmp.push(this.bidak[i][j].legal_move(this.representasi_board()));
                    this.a_lmove.push(this.tmp);
                }
            }
        }
        return this.a_lmove;
    }

} const run = new Board();