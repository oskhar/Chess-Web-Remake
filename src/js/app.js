// import {  } from "papanCatur.js";

var ukuranArea = 110;

document.getElementById('Papan_Catur').style.height = (8*ukuranArea)+"px";
document.getElementById('Papan_Catur').style.width = (8*ukuranArea)+"px";

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {

        let area = document.createElement('div');
        area.style.position = "absolute";
        area.style.height = ukuranArea+"px";
        area.style.width = ukuranArea+"px";
        area.style.left = (i*ukuranArea)+"px";
        area.style.top = (j*ukuranArea)+"px";
        area.style.background = (i*8+j+i) % 2 == 0 ? "white" : "black";
        document.getElementById('Papan_Catur').appendChild(area);

    }
}