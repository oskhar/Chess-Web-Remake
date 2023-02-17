import { ClassBidak } from "./class/ClassBidak.js";

// Class
class Pion extends ClassBidak {

    // Constructor
    constructor (papanCatur, papanCaturPermukaan, ukuranArea, x, y, background) {

        super(papanCatur, papanCaturPermukaan, ukuranArea, x, y, background);
        this.element.addEventListener('click', this.clickBidak.bind(this), false);

        this.firstMove = true;

    }

    // Method
    clickBidak () {

        this.papanPermukaan.innerHTML = "";
        this.buatLingkaran(this.x, this.y - this.ukuranArea);

        if (this.firstMove) {
            this.buatLingkaran(this.x, this.y - 2*this.ukuranArea);
            this.firstMove = false;
        }

    }

} export {Pion};