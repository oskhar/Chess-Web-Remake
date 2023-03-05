import { ClassBidak } from "./ClassBidak.js";

// Class
export class Pion extends ClassBidak {

    // Constructor
    constructor (papanCatur, papanCaturPermukaan, ukuranArea, x, y, background, poin) {

        // Memanggil constructor parent
        super(papanCatur, papanCaturPermukaan, ukuranArea, x, y, background, poin);

        // Menambahkan event pada pion
        this.element.addEventListener('click', this.clickBidak.bind(this), false);

        // Pion memiliki hak istimewa saat pertama kali jalan
        this.firstMove = true;

    }

    // Method untuk menjalankan bidak pion
    clickBidak () {

        this.papanPermukaan.innerHTML = "";
        this.buatLingkaran(this.x, this.y - this.ukuranArea);

        if (this.firstMove) {
            this.buatLingkaran(this.x, this.y - 2*this.ukuranArea);
            this.firstMove = false;
        }

    }

}