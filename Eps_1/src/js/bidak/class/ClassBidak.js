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
        this.element.style.backgroundSize = "70%";
        this.element.style.backgroundPosition = "center";
        this.element.style.backgroundRepeat = "no-repeat";
        this.element.style.zIndex = "1";
        papanCatur.appendChild(this.element);

    }

    // Method
    move (x, y) {

        this.x = x;
        this.y = y;

        this.element.style.top = this.y + "px";
        this.element.style.left = this.x + "px";

        // Hapus lingkaran
        this.papanPermukaan.innerHTML = "";

    }

    // Method
    death () {
        this.element.remove();

    }

    // Method
    buatLingkaran (x, y) {

        this.lingkaran = document.createElement('div');
        this.lingkaran.style.position = "absolute";
        this.lingkaran.style.left = x + "px";
        this.lingkaran.style.top = y + "px";
        this.lingkaran.style.width = this.ukuranArea-40 + "px";
        this.lingkaran.style.height = this.ukuranArea-40 + "px";
        this.lingkaran.style.border = "20px solid #afed65";
        this.lingkaran.style.borderRadius = "60%";
        this.lingkaran.style.background = "transparent";
        this.lingkaran.addEventListener('click', this.move.bind(this, x, y));
        this.papanPermukaan.appendChild(this.lingkaran);

    }

} export {ClassBidak};