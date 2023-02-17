import { ClassBidak } from "./class/ClassBidak.js";

// Class
class Pion extends ClassBidak {

    // Constructor
    constructor (ukuranArea, x, y, background) {

        super(ukuranArea, x, y, background);
        this.papanPermukaan = document.getElementById('Papan_Catur_Permukaan');

    }

    // Method
    areaJalan () {



    }

} export {Pion};