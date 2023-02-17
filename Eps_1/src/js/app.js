import * as Bidak from "./bidak/Bidak.js";

// Deklarasi
var bidak = [];

// Assigment
var ukuranArea = 110;
var papanCatur = document.getElementById('Papan_Catur');
var papanCaturPermukaan = document.getElementById('Papan_Catur_Permukaan');

// Mengatur ukuran papan
papanCatur.style.height = (8*ukuranArea)+"px";
papanCatur.style.width = (8*ukuranArea)+"px";
papanCaturPermukaan.style.height = (8*ukuranArea)+"px";
papanCaturPermukaan.style.width = (8*ukuranArea)+"px";

// Menggambar papan catur
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {

        let area = document.createElement('div');
        area.style.position = "absolute";
        area.style.height = ukuranArea+"px";
        area.style.width = ukuranArea+"px";
        area.style.left = (i*ukuranArea)+"px";
        area.style.top = (j*ukuranArea)+"px";
        area.style.background = (i*8+j+i) % 2 == 0 ? "#f0dab5" : "#b48662";
        papanCatur.appendChild(area);

    }
}

// Menambahkan bidak catur
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 8; j++) {

        bidak[i*4+j] = new Bidak.Pion( papanCatur, papanCaturPermukaan, ukuranArea, j*ukuranArea, (i < 2 ? i*ukuranArea : (i+4)*ukuranArea), "./lib/image/pion.png" );

    }
}