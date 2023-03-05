import { Pion } from "./bidak/Bidak.js";

// Assigment
var area = 110;
var papan_catur = document.getElementById("papan_catur");
var papan_permukaan = document.getElementById("papan_permukaan");
var bidakPutih = [];

// Bentuk papan catur
papan_catur.style.height = (area * 8) + "px";
papan_catur.style.width = (area * 8) + "px";
papan_permukaan.style.height = (area * 8) + "px";
papan_permukaan.style.width = (area * 8) + "px";

// Gambar area
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {

        let element = document.createElement("div");
        element.style.position = "absolute";
        element.style.height = area + "px";
        element.style.width = area + "px";
        element.style.top = (i*area) + "px";
        element.style.left = (j*area) + "px";
        element.style.background = (i+j) % 2 == 0 ? "#f0dab5" : "#b48662";
        papan_catur.appendChild(element);

    }
}

// Tambahkan bidak
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 8; j++) {
        
        bidakPutih = new Pion("./assets/images/putih/pion.svg", j*area, (i+6)*area, 1, papan_catur, papan_permukaan, area);

    }
}