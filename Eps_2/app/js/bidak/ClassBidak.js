// Class
class ClassBidak {

    // Constructor
    constructor (papanCatur, papanCaturPermukaan, ukuranArea, x, y, background, poin) {

        // Atribute
        this.poin = poin;
        this.x = x;
        this.y = y;
        this.ukuranArea = ukuranArea;
        this.papanPermukaan = papanCaturPermukaan;

        // Membuat bidak
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
        px
    }

    // Method untuk menggerakan bidak
    move (x, y) {

        this.x = x;
        this.y = y;

        this.element.style.top = this.y + "px";
        this.element.style.left = this.x + "px";

        // Hapus lingkaran
        this.papanPermukaan.innerHTML = "";

    }

    // Method untuk menghilangkan catur saat dimakan
    death () {
        this.element.remove();

    }

    // Method
    buatLingkaran (x, y) {

        this.lingkaran = document.createElement('div');
        this.lingkaran.style.position = "absolute";
        this.lingkaran.style.left = (x + (this.ukuranArea/4)) + "px";
        this.lingkaran.style.top = (y + (this.ukuranArea/4)) + "px";
        this.lingkaran.style.width = this.ukuranArea/2 + "px";
        this.lingkaran.style.height = this.ukuranArea/2 + "px";
        this.lingkaran.style.borderRadius = "50%";
        this.lingkaran.style.background = "rgba(0, 0, 0, 0.5)";
        this.lingkaran.addEventListener('click', this.move.bind(this, x, y));
        this.lingkaran.style.zIndex = "2";
        this.papanPermukaan.appendChild(this.lingkaran);

    }

} export {ClassBidak};