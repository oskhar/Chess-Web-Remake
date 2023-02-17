import { ClassBidak } from "./class/ClassBidak.js";

// Class
class Pion extends ClassBidak {

    // Constructor
    constructor (papanCatur, papanCaturPermukaan, ukuranArea, x, y, background) {

        super(papanCatur, papanCaturPermukaan, ukuranArea, x, y, background);
        this.element.onclick = this.areaJalan();

    }

    // Method
    areaJalan () {

        this.buatKotak(this.x, this.y + this.ukuranArea);

    }

} export {Pion};