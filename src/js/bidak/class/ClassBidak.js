// Class
class ClassBidak {

    // Constructor
    constructor (ukuranArea, x, y, background) {

        // Atribute
        this.x = x;
        this.y = y;
        this.ukuranArea = ukuranArea;

        // Create element
        this.element = document.createElement('div');
        this.element.style.position = "absolute";
        this.element.style.width = this.ukuranArea+"px";
        this.element.style.height = this.ukuranArea+"px";
        this.element.style.left = this.x+"px";
        this.element.style.top = this.y+"px";
        this.element.style.background = "url('" + background + "')";
        document.getElementById('Papan_Catur').appendChild(this.element);

    }

    // Method
    move (langkahKedepan, langkahKesamping) {

        this.y = (-langkahKedepan * this.ukuranArea + this.y);
        this.element.style.top = this.y + "px";

        this.x = (langkahKesamping * this.ukuranArea + this.x);
        this.element.style.left = this.x + "px";

    }

    // Method
    death () {

        this.element.remove();

    }

} export {ClassBidak};