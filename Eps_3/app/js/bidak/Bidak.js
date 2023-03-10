// Lib
import { ClassBidak } from "./ClassBidak.js";

// Class
export class Pion extends ClassBidak {

    // Constructor
    constructor (gambar, x, y, poin, papan_catur, papan_permukaan, area) {

        // Jalankan construct parent
        super(gambar, x, y, poin, papan_catur, papan_permukaan, area);

        // Atribute
        this.first = true;
        this.legal_move = [];

        this.element.addEventListener("click", this.click.bind(this))

    }

    // Method
    click () {

        // Bersihkan permukaan
        this.hapusPermukaan();

        // Seleksi legal_move
        if () {}
        this.areaGerak(this.x - this.area * this.type_x, this.y - this.area * this.type_y);
        if (this.first) {
            this.areaGerak(this.x - this.area * this.type_x, this.y - this.area * (this.type_y+1));
            this.first = false;
        }

    }

}

// Class
export class Raja extends ClassBidak {

}