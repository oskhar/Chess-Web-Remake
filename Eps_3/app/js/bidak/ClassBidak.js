// Class
export class ClassBidak {

    // Constructor
    constructor (gambar, x, y, poin, papan_catur, papan_permukaan, area) {

        // Atribute
        this.x = x;
        this.y = y;
        this.poin = poin;
        this.papan_catur = papan_catur;
        this.papan_permukaan = papan_permukaan;
        this.area = area;

        // Bentuk bidak
        this.element = document.createElement("div");
        this.element.style.position = "absolute";
        this.element.style.height = area + "px";
        this.element.style.width = area + "px";
        this.element.style.left = this.x + "px";
        this.element.style.top = this.y + "px";
        this.element.style.zIndex = "1";
        this.element.style.background = "url('" + gambar + "')";
        this.element.style.backgroundSize = "70%";
        this.element.style.backgroundPosition = "center";
        this.element.style.backgroundRepeat = "no-repeat";
        this.papan_catur.appendChild(this.element);

    }

    // Method
    move (x, y) {

        this.hapusPermukaan();

        this.x = x;
        this.y = y;

        this.element.style.left = this.x + "px";
        this.element.style.top = this.y + "px";

    }

    // Method
    areaGerak (x, y) {

        this.lingkaran = document.createElement("div");
        this.lingkaran.style.position = "absolute";
        this.lingkaran.style.height = this.area/2 + "px";
        this.lingkaran.style.width = this.area/2 + "px";
        this.lingkaran.style.left = (x + (this.area/4)) + "px";
        this.lingkaran.style.top = (y + (this.area/4)) + "px";
        this.lingkaran.style.zIndex = "2";
        this.lingkaran.style.background = "rgba(0, 0, 0, 0.5)";
        this.lingkaran.style.borderRadius = "50%";
        this.lingkaran.addEventListener("click", this.move.bind(this, x, y));
        this.papan_permukaan.appendChild(this.lingkaran);

    }

    // Method
    hapusPermukaan () {
        this.papan_permukaan.innerHTML = "";

    }

    // Method
    death () {
        this.element.remove();

    }

    // Method
    getLegalMove (arr) {

        this.tmp = [];
        arr.forEach(el => {
            this.tmp.push([el[0] * this.area, el[1] * this.area])
        });
        return tmp;

    }

    // Method

    loadData (data) {

        this.data = data;

    }

}