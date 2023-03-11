// Lib
import { ClassBidak } from "./ClassBidak.js";

// Class
export class Pion extends ClassBidak {

    // Constructor
    constructor (gambar, x, y, poin, papan_catur, papan_permukaan, area, pihak, nama) {

        // Jalankan construct parent
        super(gambar, x, y, poin, papan_catur, papan_permukaan, area, pihak, nama);

        // Atribute
        this.first = true;

    }

    // Method
    click (data) {

        // Bersihkan permukaan
        this.hapus_permukaan();

        // Seleksi legal_move
        this.lmove = this.legal_move(data);
        for (let i = 0; i < this.lmove.length; i++) {
            this.area_gerak(this.x + this.lmove[i][0], this.y + this.lmove[i][1], true);
            
        }

    }

    // Method
    legal_move (data) {

        this.lmove = [];
        if (this.y-1 > -1) {

            if (data[this.y-1][this.x] == "x") {

                this.lmove.push([0, -1]);

                if (this.first && data[this.y-2][this.x] == "x") {
                    this.lmove.push([0, -2]);
                }

            }
            if (this.x-1 > -1)
                if (data[this.y-1][this.x-1].substring(1) == this.lawan) 
                    this.lmove.push([-1, -1]);
            if (this.x+1 < 8)
                if (data[this.y-1][this.x+1].substring(1) == this.lawan) 
                    this.lmove.push([1, -1]);
            
        }

        return this.lmove;

    }

}

// Class
export class Benteng extends ClassBidak {

    // Constructor
    constructor (gambar, x, y, poin, papan_catur, papan_permukaan, area, pihak, nama) {

        // Jalankan construct parent
        super(gambar, x, y, poin, papan_catur, papan_permukaan, area, pihak, nama);

        // Atribute
        this.first = true;

    }

    // Method
    click (data) {

        // Bersihkan permukaan
        this.hapus_permukaan();

        // Seleksi legal_move
        this.lmove = this.legal_move(data);
        for (let i = 0; i < this.lmove.length; i++) {
            this.area_gerak(this.x + this.lmove[i][0], this.y + this.lmove[i][1], true);
            
        }

    }

    // Method
    legal_move (data) {

        this.lmove = [];
        this.arah = [true, true, true, true];
        for (let i = 1; i < 8; i++) {
            if (this.y-i > -1 && this.arah[0]) {
                if (data[this.y-i][this.x] == "x") {
                    this.lmove.push([0, -i]);
                } else if (data[this.y-i][this.x].substring(1) == this.lawan) {
                    this.lmove.push([0, -i]);
                    this.arah[0] = false;
                } else {
                    this.arah[0] = false;
                }
            }
            if (this.y+i < 8 && this.arah[1]) {
                if (data[this.y+i][this.x] == "x") {
                    this.lmove.push([0, i]);
                } else if (data[this.y+i][this.x].substring(1) == this.lawan) {
                    this.lmove.push([0, i]);
                    this.arah[1] = false;
                } else {
                    this.arah[1] = false;
                }
            }
            if (this.x-i > -1 && this.arah[2]) {
                if (data[this.y][this.x-i] == "x") {
                    this.lmove.push([-i, 0]);
                } else if (data[this.y][this.x-i].substring(1) == this.lawan) {
                    this.lmove.push([-i, 0]);
                    this.arah[2] = false;
                } else {
                    this.arah[2] = false;
                }
            }
            if (this.x+i < 8 && this.arah[3]) {
                if (data[this.y][this.x+i] == "x") {
                    this.lmove.push([i, 0]);
                } else if (data[this.y][this.x+i].substring(1) == this.lawan) {
                    this.lmove.push([i, 0]);
                    this.arah[3] = false;
                } else {
                    this.arah[3] = false;
                }
            }
        }

        return this.lmove;

    }

}

// Class
export class Kuda extends ClassBidak {

    // Constructor
    constructor (gambar, x, y, poin, papan_catur, papan_permukaan, area, pihak, nama) {

        // Jalankan construct parent
        super(gambar, x, y, poin, papan_catur, papan_permukaan, area, pihak, nama);

        // Atribute
        this.first = true;

    }

    // Method
    click (data) {

        // Bersihkan permukaan
        this.hapus_permukaan();

        // Seleksi legal_move
        this.lmove = this.legal_move(data);
        for (let i = 0; i < this.lmove.length; i++) {
            this.area_gerak(this.x + this.lmove[i][0], this.y + this.lmove[i][1], true);
            
        }

    }

    // Method
    legal_move (data) {

        this.lmove = [];
        if (this.y-2 > -1) {
            if (this.x-1 > -1) {
                if (data[this.y-2][this.x-1].substring(1) != this.pihak) {
                    this.lmove.push([-1, -2]);
                }
            }
            if (this.x+1 < 8) {
                if (data[this.y-2][this.x+1].substring(1) != this.pihak) {
                    this.lmove.push([1, -2]);
                }
            }
        }
        if (this.y+2 < 8) {
            if (this.x-1 > -1) {
                if (data[this.y+2][this.x-1].substring(1) != this.pihak) {
                    this.lmove.push([-1, 2]);
                }
            }
            if (this.x+1 < 8) {
                if (data[this.y+2][this.x+1].substring(1) != this.pihak) {
                    this.lmove.push([1, 2]);
                }
            }
        }
        if (this.x-2 > -1) {
            if (this.y-1 > -1) {
                if (data[this.y-1][this.x-2].substring(1) != this.pihak) {
                    this.lmove.push([-2, -1]);
                }
            }
            if (this.y+1 < 8) {
                if (data[this.y+1][this.x-2].substring(1) != this.pihak) {
                    this.lmove.push([-2, 1]);
                }
            }
        }
        if (this.x+2 < 8) {
            if (this.y-1 > -1) {
                if (data[this.y-1][this.x+2].substring(1) != this.pihak) {
                    this.lmove.push([2, -1]);
                }
            }
            if (this.y+1 < 8) {
                if (data[this.y+1][this.x+2].substring(1) != this.pihak) {
                    this.lmove.push([2, 1]);
                }
            }
        }

        return this.lmove;

    }

}

// Class
export class Peluncur extends ClassBidak {

    // Constructor
    constructor (gambar, x, y, poin, papan_catur, papan_permukaan, area, pihak, nama) {

        // Jalankan construct parent
        super(gambar, x, y, poin, papan_catur, papan_permukaan, area, pihak, nama);

        // Atribute
        this.first = true;

    }

    // Method
    click (data) {

        // Bersihkan permukaan
        this.hapus_permukaan();

        // Seleksi legal_move
        this.lmove = this.legal_move(data);
        for (let i = 0; i < this.lmove.length; i++) {
            this.area_gerak(this.x + this.lmove[i][0], this.y + this.lmove[i][1], true);
            
        }

    }

    // Method
    legal_move (data) {

        this.lmove = [];
        this.arah = [true, true, true, true];
        for (let i = 1; i < 8; i++) {
            if (this.y-i > -1 && this.x-i > -1 && this.arah[0]) {
                if (data[this.y-i][this.x-i] == "x") {
                    this.lmove.push([-i, -i]);
                } else if (data[this.y-i][this.x-i].substring(1) == this.lawan) {
                    this.lmove.push([-i, -i]);
                    this.arah[0] = false;
                } else {
                    this.arah[0] = false;
                }
            }
            if (this.y+i < 8 && this.x-i > -1 && this.arah[1]) {
                if (data[this.y+i][this.x-i] == "x") {
                    this.lmove.push([-i, i]);
                } else if (data[this.y+i][this.x-i].substring(1) == this.lawan) {
                    this.lmove.push([-i, i]);
                    this.arah[1] = false;
                } else {
                    this.arah[1] = false;
                }
            }
            if (this.y-i > -1 && this.x+i < 8 && this.arah[2]) {
                if (data[this.y-i][this.x+i] == "x") {
                    this.lmove.push([i, -i]);
                } else if (data[this.y-i][this.x+i].substring(1) == this.lawan) {
                    this.lmove.push([i, -i]);
                    this.arah[2] = false;
                } else {
                    this.arah[2] = false;
                }
            }
            if (this.y+i < 8 && this.x+i < 8 && this.arah[3]) {
                if (data[this.y+i][this.x+i] == "x") {
                    this.lmove.push([i, i]);
                } else if (data[this.y+i][this.x+i].substring(1) == this.lawan) {
                    this.lmove.push([i, i]);
                    this.arah[3] = false;
                } else {
                    this.arah[3] = false;
                }
            }
        }


        return this.lmove;

    }

}

// Class
export class Ratu extends ClassBidak {

    // Constructor
    constructor (gambar, x, y, poin, papan_catur, papan_permukaan, area, pihak, nama) {

        // Jalankan construct parent
        super(gambar, x, y, poin, papan_catur, papan_permukaan, area, pihak, nama);

        // Atribute
        this.first = true;

    }

    // Method
    click (data) {

        // Bersihkan permukaan
        this.hapus_permukaan();

        // Seleksi legal_move
        this.lmove = this.legal_move(data);
        for (let i = 0; i < this.lmove.length; i++) {
            this.area_gerak(this.x + this.lmove[i][0], this.y + this.lmove[i][1], true);
            
        }

    }

    // Method
    legal_move (data) {

        this.lmove = [];
        this.arah = [true, true, true, true, true, true, true, true];
        for (let i = 1; i < 8; i++) {
            if (this.y-i > -1 && this.x-i > -1 && this.arah[0]) {
                if (data[this.y-i][this.x-i] == "x") {
                    this.lmove.push([-i, -i]);
                } else if (data[this.y-i][this.x-i].substring(1) == this.lawan) {
                    this.lmove.push([-i, -i]);
                    this.arah[0] = false;
                } else {
                    this.arah[0] = false;
                }
            }
            if (this.y+i < 8 && this.x-i > -1 && this.arah[1]) {
                if (data[this.y+i][this.x-i] == "x") {
                    this.lmove.push([-i, i]);
                } else if (data[this.y+i][this.x-i].substring(1) == this.lawan) {
                    this.lmove.push([-i, i]);
                    this.arah[1] = false;
                } else {
                    this.arah[1] = false;
                }
            }
            if (this.y-i > -1 && this.x+i < 8 && this.arah[2]) {
                if (data[this.y-i][this.x+i] == "x") {
                    this.lmove.push([i, -i]);
                } else if (data[this.y-i][this.x+i].substring(1) == this.lawan) {
                    this.lmove.push([i, -i]);
                    this.arah[2] = false;
                } else {
                    this.arah[2] = false;
                }
            }
            if (this.y+i < 8 && this.x+i < 8 && this.arah[3]) {
                if (data[this.y+i][this.x+i] == "x") {
                    this.lmove.push([i, i]);
                } else if (data[this.y+i][this.x+i].substring(1) == this.lawan) {
                    this.lmove.push([i, i]);
                    this.arah[3] = false;
                } else {
                    this.arah[3] = false;
                }
            }
            if (this.y-i > -1 && this.arah[4]) {
                if (data[this.y-i][this.x] == "x") {
                    this.lmove.push([0, -i]);
                } else if (data[this.y-i][this.x].substring(1) == this.lawan) {
                    this.lmove.push([0, -i]);
                    this.arah[4] = false;
                } else {
                    this.arah[4] = false;
                }
            }
            if (this.y+i < 8 && this.arah[5]) {
                if (data[this.y+i][this.x] == "x") {
                    this.lmove.push([0, i]);
                } else if (data[this.y+i][this.x].substring(1) == this.lawan) {
                    this.lmove.push([0, i]);
                    this.arah[5] = false;
                } else {
                    this.arah[5] = false;
                }
            }
            if (this.x-i > -1 && this.arah[6]) {
                if (data[this.y][this.x-i] == "x") {
                    this.lmove.push([-i, 0]);
                } else if (data[this.y][this.x-i].substring(1) == this.lawan) {
                    this.lmove.push([-i, 0]);
                    this.arah[6] = false;
                } else {
                    this.arah[6] = false;
                }
            }
            if (this.x+i < 8 && this.arah[7]) {
                if (data[this.y][this.x+i] == "x") {
                    this.lmove.push([i, 0]);
                } else if (data[this.y][this.x+i].substring(1) == this.lawan) {
                    this.lmove.push([i, 0]);
                    this.arah[7] = false;
                } else {
                    this.arah[7] = false;
                }
            }
        }

        return this.lmove;

    }

}

// Class
export class Raja extends ClassBidak {

    // Constructor
    constructor (gambar, x, y, poin, papan_catur, papan_permukaan, area, pihak, nama) {

        // Jalankan construct parent
        super(gambar, x, y, poin, papan_catur, papan_permukaan, area, pihak, nama);

        // Atribute
        this.first = true;

    }

    // Method
    click (data) {

        // Bersihkan permukaan
        this.hapus_permukaan();

        // Seleksi legal_move
        this.lmove = this.legal_move(data);
        for (let i = 0; i < this.lmove.length; i++) {
            this.area_gerak(this.x + this.lmove[i][0], this.y + this.lmove[i][1], true);
            
        }

    }

    // Method
    legal_move (data) {

        this.lmove = [];
        if (this.y-1 > -1) {

            if (data[this.y-1][this.x] == "x" || data[this.y-1][this.x][1] == this.lawan)
                this.lmove.push([0, -1]);

            if (this.x-1 > -1)
                if (data[this.y-1][this.x-1] == "x" || data[this.y-1][this.x-1][1] == this.lawan)
                    this.lmove.push([-1, -1]);

            if (this.x+1 < 8)
                if (data[this.y-1][this.x+1] == "x" || data[this.y-1][this.x+1][1] == this.lawan)
                    this.lmove.push([1, -1]);

        }
        if (this.y+1 < 8) {

            if (data[this.y+1][this.x] == "x" || data[this.y+1][this.x][1] == this.lawan)
                this.lmove.push([0, 1]);

            if (this.x-1 > -1)
                if (data[this.y+1][this.x-1] == "x" || data[this.y+1][this.x-1][1] == this.lawan)
                    this.lmove.push([-1, 1]);

            if (this.x+1 < 8)
                if (data[this.y+1][this.x+1] == "x" || data[this.y+1][this.x+1][1] == this.lawan)
                    this.lmove.push([1, 1]);

        }
        if (this.x+1 < 8)
            if (data[this.y][this.x+1] == "x" || data[this.y][this.x+1][1] == this.lawan)
                this.lmove.push([1, 0]);

        if (this.x-1 < 8)
            if (data[this.y][this.x-1] == "x" || data[this.y][this.x-1][1] == this.lawan)
                this.lmove.push([-1, 0]);

        return this.lmove;

    }

}