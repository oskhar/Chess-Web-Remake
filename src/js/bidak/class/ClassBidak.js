// Class
class ClassBidak {

    // Constructor
    constructor (ukuranArea, x, y, background) {

        this.element = document.createElement('div');
        this.element.style.position = "absolute";
        this.element.style.width = ukuranArea+"px";
        this.element.style.height = ukuranArea+"px";
        this.element.style.left = x+"px";
        this.element.style.top = y+"px";
        this.element.style.background = "url('" + background + "')";
        document.getElementById('Papan_Catur').appendChild(this.element);

    }

} export {ClassBidak};