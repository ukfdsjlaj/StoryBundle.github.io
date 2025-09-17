const GAME_WIDTH = 160;
const GAME_HEIGHT = 160;
const GAME_TILE = 16;
const canvas = document.getElementById('pixelBackground');
const ctx = canvas.getContext('2d');
/*This is to make code more readable, if texture pack is 32 x 32,
IMAGE_TILE would be 32 but GAME_TILE STAYS 16. Vice versa*/ 
const IMAGE_TILE = 16; 

let FLOOR_1;
let FLOOR_2;
let FLOOR_3;
let FLOOR_4;
let TILE_PROP;
let TREE;
let ROAD;

 // Functions
function mushroomHouse(x = 0, y = 0) {
    ctx.drawImage(
        // Source
        TILE_PROP,
        // Prop tile index (Which prop to import from the prop img file)
        0 * IMAGE_TILE, // x
        0 * IMAGE_TILE, // y
        // Prop tile size (16px, of index 0, 0)
        IMAGE_TILE,
        IMAGE_TILE,
        // Cavas index (Where is the prop being placed)
        2 * GAME_TILE + x,
        2 * GAME_TILE + y,
        // Canvas tile size (16px, of index 0, 0)
        GAME_TILE,
        GAME_TILE
    );
    ctx.drawImage(TILE_PROP, 1 * IMAGE_TILE, 0 * IMAGE_TILE, IMAGE_TILE, IMAGE_TILE, 3 * GAME_TILE + x, 2 * GAME_TILE + y, GAME_TILE, GAME_TILE);
    ctx.drawImage(TILE_PROP, 0 * IMAGE_TILE, 1 * IMAGE_TILE, IMAGE_TILE, IMAGE_TILE, 2 * GAME_TILE + x, 3 * GAME_TILE + y, GAME_TILE, GAME_TILE);
    ctx.drawImage(TILE_PROP, 1 * IMAGE_TILE, 1 * IMAGE_TILE, IMAGE_TILE, IMAGE_TILE, 3 * GAME_TILE + x, 3 * GAME_TILE + y, GAME_TILE, GAME_TILE);
}

function redHouse(x = 0, y = 0) {
    ctx.drawImage(
        // Source
        TILE_PROP,
        // Prop tile index (Which prop to import from the prop img file)
        2 * IMAGE_TILE,
        1 * IMAGE_TILE,
        // Prop tile size (16px, of index 0, 0)
        IMAGE_TILE,
        IMAGE_TILE,
        // Cavas index (Where is the prop being placed)
        7 * GAME_TILE + x,
        4 * GAME_TILE + y,
        // Canvas tile size (16px, of index 0, 0)
        GAME_TILE,
        GAME_TILE
    );
    ctx.drawImage(TILE_PROP, 2 * IMAGE_TILE, 2 * IMAGE_TILE, IMAGE_TILE, IMAGE_TILE, 7 * GAME_TILE + x, 5 * GAME_TILE + y, GAME_TILE, GAME_TILE);
    ctx.drawImage(TILE_PROP, 3 * IMAGE_TILE, 1 * IMAGE_TILE, IMAGE_TILE, IMAGE_TILE, 8 * GAME_TILE + x, 4 * GAME_TILE + y, GAME_TILE, GAME_TILE);
    ctx.drawImage(TILE_PROP, 3 * IMAGE_TILE, 2 * IMAGE_TILE, IMAGE_TILE, IMAGE_TILE, 8 * GAME_TILE + x, 5 * GAME_TILE + y, GAME_TILE, GAME_TILE);
}

function greenHouse(x = 0, y = 0) {
    ctx.drawImage(
        // Source
        TILE_PROP,
        // Prop tile index (Which prop to import from the prop img file)
        0 * IMAGE_TILE,
        2 * IMAGE_TILE,
        // Prop tile size (16px, of index 0, 0)
        IMAGE_TILE,
        IMAGE_TILE,
        // Cavas index (Where is the prop being placed)
        3 * GAME_TILE + x,
        6 * GAME_TILE + y,
        // Canvas tile size (16px, of index 0, 0)
        GAME_TILE,
        GAME_TILE
    );
    ctx.drawImage(TILE_PROP, 0 * IMAGE_TILE, 3 * IMAGE_TILE, IMAGE_TILE, IMAGE_TILE, 3 * GAME_TILE + x, 7 * GAME_TILE + y, GAME_TILE, GAME_TILE);
    ctx.drawImage(TILE_PROP, 1 * IMAGE_TILE, 2 * IMAGE_TILE, IMAGE_TILE, IMAGE_TILE, 4 * GAME_TILE + x, 6 * GAME_TILE + y, GAME_TILE, GAME_TILE);
    ctx.drawImage(TILE_PROP, 1 * IMAGE_TILE, 3 * IMAGE_TILE, IMAGE_TILE, IMAGE_TILE, 4 * GAME_TILE + x, 7 * GAME_TILE + y, GAME_TILE, GAME_TILE);
    ctx.drawImage(TILE_PROP, 2 * IMAGE_TILE, 3 * IMAGE_TILE, IMAGE_TILE, IMAGE_TILE, 5 * GAME_TILE + x, 7 * GAME_TILE + y, GAME_TILE, GAME_TILE);
}

function placeTree(x, y, a = 0, b = 0) {
    ctx.drawImage(
        TILE_PROP,
        3 * IMAGE_TILE,
        3 * IMAGE_TILE,
        IMAGE_TILE,
        IMAGE_TILE,
        x * GAME_TILE + a,
        y * GAME_TILE + b,
        GAME_TILE,
        GAME_TILE
    )
} 

function drawScene(a = 0, b = 0) {
    
    const rand = createSeededRandom(8);
    
    // Background
    for (let i = 0; i < canvas.width; i += GAME_TILE) {
        for (let j = 0; j < canvas.height; j += GAME_TILE) {
            let tileX = i / GAME_TILE;
            let tileY = j / GAME_TILE;

            if ((tileX + tileY) % 2 === 0) {
                ctx.drawImage(FLOOR_1, i, j);
            } else {
                ctx.drawImage(FLOOR_2, i, j);
            }
        }
    }
    
    // Background
    for (let i = 0; i < canvas.width; i += GAME_TILE) {
        const x = rand() * 10;
        for (let j = 0; j < canvas.height; j += GAME_TILE) {
            const y = rand() * 10;
            const z = rand();

            if (z < 0.5) {
                ctx.drawImage(FLOOR_3, x * GAME_TILE, y * GAME_TILE);
            } else {
                ctx.drawImage(FLOOR_4, x * GAME_TILE, y * GAME_TILE);
            }
        }
    }

    //Well
    ctx.drawImage(TILE_PROP, 3 * IMAGE_TILE, 0 * IMAGE_TILE, IMAGE_TILE, IMAGE_TILE, 5 * GAME_TILE + 2, 4 * GAME_TILE, GAME_TILE, GAME_TILE);

    //Tree
    placeTree(1, 3, -5);
    placeTree(1, 6, 0, 5);
    placeTree(2, 4, 0, 5);
    placeTree(2, 8, 5);
    placeTree(3, 0);
    placeTree(5, 2, -5, -5);
    placeTree(6, 0, -5, 5);
    placeTree(6, 6);
    placeTree(6, 8, -5);
    placeTree(7, 7, 5, 5);
    placeTree(8, 3);
    placeTree(9, 4, 0, 10);
    placeTree(9, 9, -5, -5);

    // Big Tree
    ctx.drawImage(
        // Source
        TREE,
        // Prop tile index (Which prop to import from the prop img file)
        0 * IMAGE_TILE,
        0 * IMAGE_TILE,
        // Prop tile size (16px, of index 0, 0)
        IMAGE_TILE,
        IMAGE_TILE,
        // Cavas index (Where is the prop being placed)
        7 * GAME_TILE,
        1 * GAME_TILE,
        // Canvas tile size (16px, of index 0, 0)
        GAME_TILE,
        GAME_TILE
    );
    ctx.drawImage(TREE, 1 * IMAGE_TILE, 0 * IMAGE_TILE, IMAGE_TILE, IMAGE_TILE, 8 * GAME_TILE, 1 * GAME_TILE, GAME_TILE, GAME_TILE);
    ctx.drawImage(TREE, 0 * IMAGE_TILE, 1 * IMAGE_TILE, IMAGE_TILE, IMAGE_TILE, 7 * GAME_TILE, 2 * GAME_TILE, GAME_TILE, GAME_TILE);
    ctx.drawImage(TREE, 1 * IMAGE_TILE, 1 * IMAGE_TILE, IMAGE_TILE, IMAGE_TILE, 8 * GAME_TILE, 2 * GAME_TILE, GAME_TILE, GAME_TILE);

    function createSeededRandom(seed) {
        let state = seed;
        return function() {
            state = (state * 1664525 + 1013904223) % 4294967296;
            return state / 4294967296;
        };
    }
}


window.addEventListener('load', function() {   
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;
    canvas.style.width = "35vw";
    canvas.style.height = "35vw";

    FLOOR_1 = this.document.getElementById('floor1');
    FLOOR_2 = this.document.getElementById('floor2');
    FLOOR_3 = this.document.getElementById('floor3');
    FLOOR_4 = this.document.getElementById('floor4');
    TILE_PROP = this.document.getElementById('props');
    TREE = this.document.getElementById('tree');
    ROAD = this.document.getElementById('road');

    ctx.imageSoomthingEnabled = false;
    
    
    // Backgournd with props
    drawScene();
    // Place houses
    mushroomHouse();
    redHouse();
    greenHouse();
    //FloorBed. Always later than the greenhouse since it is closer to you than the greenhouse.
    ctx.drawImage(TILE_PROP, 2 * IMAGE_TILE, 0 * IMAGE_TILE, IMAGE_TILE, IMAGE_TILE, 4 * GAME_TILE - 7, 8 * GAME_TILE - 7, GAME_TILE, GAME_TILE);
    // Path
    ctx.drawImage(ROAD,0,0);
});

const legendCanvas = document.getElementById('legend');
const legendCtx = legendCanvas.getContext('2d');

window.addEventListener('load', function () {
    legendCanvas.width = 48; 
    legendCanvas.height = 96;
    legendCanvas.style.width = "3.5vw";
    legendCanvas.style.height = "5.5vw";

    TILE_PROP = document.getElementById('props');

    legendCtx.drawImage(
        TILE_PROP,
        0 * IMAGE_TILE,
        0 * IMAGE_TILE,
        IMAGE_TILE,
        IMAGE_TILE,
        0 * GAME_TILE,
        0 * GAME_TILE,
        GAME_TILE,
        GAME_TILE
    );
    legendCtx.drawImage(TILE_PROP, 1 * IMAGE_TILE, 0 * IMAGE_TILE, IMAGE_TILE, IMAGE_TILE, 1 * GAME_TILE, 0 * GAME_TILE, GAME_TILE, GAME_TILE);
    legendCtx.drawImage(TILE_PROP, 0 * IMAGE_TILE, 1 * IMAGE_TILE, IMAGE_TILE, IMAGE_TILE, 0 * GAME_TILE, 1 * GAME_TILE, GAME_TILE, GAME_TILE);
    legendCtx.drawImage(TILE_PROP, 1 * IMAGE_TILE, 1 * IMAGE_TILE, IMAGE_TILE, IMAGE_TILE, 1 * GAME_TILE, 1 * GAME_TILE, GAME_TILE, GAME_TILE);

    legendCtx.drawImage(
        // Source
        TILE_PROP,
        // Prop tile index (Which prop to import from the prop img file)
        2 * IMAGE_TILE,
        1 * IMAGE_TILE,
        // Prop tile size (16px, of index 0, 0)
        IMAGE_TILE,
        IMAGE_TILE,
        // Cavas index (Where is the prop being placed)
        0 * GAME_TILE,
        2 * GAME_TILE,
        // Canvas tile size (16px, of index 0, 0)
        GAME_TILE,
        GAME_TILE
    );
    legendCtx.drawImage(TILE_PROP, 2 * IMAGE_TILE, 2 * IMAGE_TILE, IMAGE_TILE, IMAGE_TILE, 0 * GAME_TILE, 3 * GAME_TILE, GAME_TILE, GAME_TILE);
    legendCtx.drawImage(TILE_PROP, 3 * IMAGE_TILE, 1 * IMAGE_TILE, IMAGE_TILE, IMAGE_TILE, 1 * GAME_TILE, 2 * GAME_TILE, GAME_TILE, GAME_TILE);
    legendCtx.drawImage(TILE_PROP, 3 * IMAGE_TILE, 2 * IMAGE_TILE, IMAGE_TILE, IMAGE_TILE, 1 * GAME_TILE, 3 * GAME_TILE, GAME_TILE, GAME_TILE);

    legendCtx.drawImage(
        // Source
        TILE_PROP,
        // Prop tile index (Which prop to import from the prop img file)
        0 * IMAGE_TILE,
        2 * IMAGE_TILE,
        // Prop tile size (16px, of index 0, 0)
        IMAGE_TILE,
        IMAGE_TILE,
        // Cavas index (Where is the prop being placed)
        0 * GAME_TILE,
        4 * GAME_TILE,
        // Canvas tile size (16px, of index 0, 0)
        GAME_TILE,
        GAME_TILE
    );
    legendCtx.drawImage(TILE_PROP, 0 * IMAGE_TILE, 3 * IMAGE_TILE, IMAGE_TILE, IMAGE_TILE, 0 * GAME_TILE, 5 * GAME_TILE, GAME_TILE, GAME_TILE);
    legendCtx.drawImage(TILE_PROP, 1 * IMAGE_TILE, 2 * IMAGE_TILE, IMAGE_TILE, IMAGE_TILE, 1 * GAME_TILE, 4 * GAME_TILE, GAME_TILE, GAME_TILE);
    legendCtx.drawImage(TILE_PROP, 1 * IMAGE_TILE, 3 * IMAGE_TILE, IMAGE_TILE, IMAGE_TILE, 1 * GAME_TILE, 5 * GAME_TILE, GAME_TILE, GAME_TILE);
    legendCtx.drawImage(TILE_PROP, 2 * IMAGE_TILE, 3 * IMAGE_TILE, IMAGE_TILE, IMAGE_TILE, 2 * GAME_TILE, 5 * GAME_TILE, GAME_TILE, GAME_TILE);
});



