window.addEventListener("load", function() {
    Array.from(this.document.getElementsByClassName("starry")).forEach(x=>addStars(x));
});

var STAR_MARGIN_AREA = 60;
var STAR_SIZE = 2;

/**
 * 
 * @param {Element} elem 
 */
function addStars(elem) {
    //make sure things don't get double-starred
    if(elem.getAttribute("data-starred") == "true") return;
    elem.setAttribute("data-starred", "true");
    
    var initialScrollY = window.scrollY;
    
    var box = elem.getClientRects()[0];
    
    var canvas = document.createElement("canvas");
    
    var h = canvas.height = box.height * 2;
    var w = canvas.width = box.width;
    
    var initialDistanceFromTop = box.y;
    
    canvas.classList.add("star-canvas");
    
    if(elem.firstChild) elem.insertBefore(canvas, elem.firstChild);
    else elem.appendChild(canvas);
    
    var ctx = canvas.getContext("2d");
    
    
    for(var x = 0; x < w; x += STAR_MARGIN_AREA) {
        for(var y = 0; y < h; y += STAR_MARGIN_AREA) {
            addStarToCanvas(ctx, x, y);
        }
    }
    
    requestAnimationFrame(animate);
    
    function animate() {
        var p = (((window.scrollY - initialScrollY) - initialDistanceFromTop) * 0.4) % h;
        canvas.style.transform = "translateY(" + p + "px)";
        requestAnimationFrame(animate);
    }
}

function addStarToCanvas(ctx, x, y) {
    var randDistX = Math.random();
    var randDistY = Math.random();
    
    ctx.fillStyle = "#CCC5B9";
    ctx.beginPath();
    ctx.ellipse(x + randDistX * STAR_MARGIN_AREA, y + randDistY * STAR_MARGIN_AREA, STAR_SIZE, STAR_SIZE, 0, 0, 360, false);
    ctx.fill();
}