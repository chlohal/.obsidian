var STAR_MARGIN_AREA = 100;
var STAR_SIZE = 8;
var STAR_COLOUR = "#EAD7D1";


var fs = require("fs");

var SIZE = 1920;

var svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}">`;

var urgh = {
    add: c=>svg += c
}

writeStarsToCanvas(urgh, SIZE, SIZE, Math.random());

svg += `</svg>`;

fs.writeFileSync(__dirname + "/out.svg", svg);


function writeStarsToCanvas(ctx, w, h, seed) {
    var randFunc = seededRandom(seed);
    for(var x = 0; x < w; x += STAR_MARGIN_AREA) {
        for(var y = 0; y < h; y += STAR_MARGIN_AREA) {
            addStarToCanvas(ctx, x, y, randFunc);
        }
    }
}

function addStarToCanvas(ctx, x, y, r) {
    var randDistX = r();
    var randDistY = r();
    
    ctx.add(`<ellipse fill="${STAR_COLOUR}" cx="${x + randDistX * STAR_MARGIN_AREA}" cy="${y + randDistY * STAR_MARGIN_AREA}" rx="${STAR_SIZE}" ry="${STAR_SIZE}"/>`)
}

function seededRandom(s) {
    s = s || 0;
    return function() {
        var t = s += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
} 