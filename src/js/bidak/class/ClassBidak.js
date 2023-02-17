// Class
class ClassBidak {

    // Constructor
    constructor (papanCatur, papanCaturPermukaan, ukuranArea, x, y, background) {

        // Atribute
        this.x = x;
        this.y = y;
        this.ukuranArea = ukuranArea;
        this.papanPermukaan = papanCaturPermukaan;

        // Create element
        this.element = document.createElement('div');
        this.element.style.position = "absolute";
        this.element.style.width = this.ukuranArea+"px";
        this.element.style.height = this.ukuranArea+"px";
        this.element.style.left = this.x+"px";
        this.element.style.top = this.y+"px";
        this.element.style.background = "url('" + background + "')";
        papanCatur.appendChild(this.element);

    }

    // Method
    move (x, y) {

        this.x = x;
        this.y = y;

        this.element.style.top = this.y + "px";
        this.element.style.left = this.x + "px";

    }

    // Method
    death () {

        this.element.remove();

    }

    // Method
    buatKotak (x, y) {

        this.kotak = document.createElement('div');
        this.kotak.style.position = "absolute";
        this.kotak.style.left = x + "px";
        this.kotak.style.top = y + "px";
        this.kotak.style.width = this.ukuranArea + "px";
        this.kotak.style.height = this.ukuranArea + "px";
        this.kotak.style.background = "cyan";
        this.papanPermukaan.appendChild(this.kotak);

    }

} export {ClassBidak};