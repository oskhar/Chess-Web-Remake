// Class
export class ClassBidak {

    // Constructor
    constructor (gambar, x, y, poin, papan_catur, papan_permukaan, area, pihak, nama) {

        // Atribute
        this.x = x;
        this.y = y;
        this.poin = poin;
        this.nama = nama;
        this.pihak = pihak;
        this.papan_catur = papan_catur;
        this.papan_permukaan = papan_permukaan;
        this.area = area;

        // Bentuk bidak
        this.element = document.createElement("div");
        this.element.style.position = "absolute";
        this.element.style.height = this.area + "px";
        this.element.style.width = this.area + "px";
        this.element.style.left = this.x * this.area + "px";
        this.element.style.top = this.y * this.area + "px";
        this.element.style.zIndex = "1";
        this.element.style.background = "url('" + gambar + "')";
        this.element.style.backgroundSize = "70%";
        this.element.style.backgroundPosition = "center";
        this.element.style.backgroundRepeat = "no-repeat";
        this.papan_catur.appendChild(this.element);

    }

    // Method
    move (x, y, f = false) {

        this.hapus_permukaan();

        this.x = x;
        this.y = y;

        this.element.style.left = x * this.area + "px";
        this.element.style.top = y * this.area + "px";

        if (f)
            this.first = false;

    }

    // Method
    area_gerak (x, y, f = false) {

        this.tmp_x = this.area * x;
        this.tmp_y = this.area * y;

        this.lingkaran = document.createElement("div");
        this.lingkaran.style.position = "absolute";
        this.lingkaran.style.height = this.area/2 + "px";
        this.lingkaran.style.width = this.area/2 + "px";
        this.lingkaran.style.left = (this.tmp_x + (this.area/4)) + "px";
        this.lingkaran.style.top = (this.tmp_y + (this.area/4)) + "px";
        this.lingkaran.style.zIndex = "2";
        this.lingkaran.style.background = "rgba(0, 0, 0, 0.5)";
        this.lingkaran.style.borderRadius = "50%";
        this.lingkaran.addEventListener("click", this.move.bind(this, x, y, f));
        this.papan_permukaan.appendChild(this.lingkaran);

    }

    // Method
    hapus_permukaan () {
        this.papan_permukaan.innerHTML = "";

    }

    // Method
    death () {
        this.element.remove();

    }

}