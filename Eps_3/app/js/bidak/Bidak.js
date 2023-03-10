// Lib
import { ClassBidak } from "./ClassBidak.js";

// Class
export class Pion extends ClassBidak {

    // Constructor
    constructor (gambar, x, y, poin, papan_catur, papan_permukaan, area, pihak) {

        // Jalankan construct parent
        super(gambar, x, y, poin, papan_catur, papan_permukaan, area, pihak);

        // Atribute
        this.first = true;

    }

    // Method
    click (data) {

        // Bersihkan permukaan
        this.hapus_permukaan();

        // Seleksi legal_move
        this.lmove = this.legal_move(data);
        for (let i = 0; i < this.lmove.length; i++) {
            this.area_gerak(this.x + this.lmove[i][0], this.y + this.lmove[i][1], true);
            
        }

    }

    // Method
    legal_move (data) {

        this.lmove = [];
        if (this.y-1 != -1) {

            if (data[this.y-1][this.x] == "x") {

                this.lmove.push([0, -1]);

                if (this.first && data[this.y-2][this.x] == "x") {
                    this.lmove.push([0, -2]);
                }

            }
            if (this.x-1 != -1)
                if (data[this.y-1][this.x-1].substring(1) == "hitam") 
                    this.lmove.push([-1, -1]);
            if (this.x+1 != 8)
                if (data[this.y-1][this.x+1].substring(1) == "hitam") 
                    this.lmove.push([1, -1]);
            
        }

        return this.lmove;

    }

}

// Class
export class Raja extends ClassBidak {

}