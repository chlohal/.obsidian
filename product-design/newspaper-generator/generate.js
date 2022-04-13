var fs = require("fs");
var path = require("path")
var fakeDom = require("./fake-dom");

var templateFileContent = fs.readFileSync(path.join(__dirname, "template.svg")).toString();

var backTemplateFileContent = fs.readFileSync(path.join(__dirname, "back-template.svg")).toString();

var dom = fakeDom.makeDocument(fakeDom.parseHTML(templateFileContent));
var backTemplateDom = fakeDom.makeDocument(fakeDom.parseHTML(backTemplateFileContent));

 var topTextLines = dom.getElementById("toptext").childNodes.filter(x=>x.nodeName != "#text");
 var bottomText = dom.getElementById("bottomtext");

var colors = ["red", "orange", "yellow", "green", "blue", "purple"];

 var colorElems = colors.map(x=> [x, dom.getElementById(x + "text"), dom.getElementById(x + "icon")]);

var discoveries = [
    "New Math for Robots",
    "U238 Dense Asteroid",
    "Car Breakage Trend",
    "Reactor Problems"
];

var CARD_COUNT = 150;

var NEWSPAPER_HEIGHT = 90;
var NEWSPAPER_WIDTH = 80;



var pageDoc = initPage(0);

var completeDocument = initDocument();

var page = 0;

for(var i = 1; i <= CARD_COUNT; i++) {
    page = Math.floor(i / 8);
    
    var cardData = randomCard();
    
    if(cardData.chances.filter(x=>x).length <= 1) {
        i--;
        continue;
    }
    
    topTextLines.forEach((x,i)=>x.textContent = cardData.title[i].toUpperCase());
    
    cardData.chances.forEach((chance, cIndex)=> {        
        if(chance) colorElems[cIndex][1].textContent = (Math.abs(chance)) + "+: " + (chance > 0 ? "Up" : "Down");
        else colorElems[cIndex][1].textContent = "Nothing";
       
       colorElems[cIndex][2].style.transformBox = "fill-box";
       colorElems[cIndex][2].style.transformOrigin = "center";
       
       if(chance < 0) {
           colorElems[cIndex][2].style.transform = "rotate(180deg)";
           colorElems[cIndex][2].style.fill = "#F46767";
       } else if(chance > 0) {
        colorElems[cIndex][2].style.transform = "rotate(0deg)";
        colorElems[cIndex][2].style.fill = "#75E76F";
       } else {
        colorElems[cIndex][2].style.transform = "rotate(90deg)";
        colorElems[cIndex][2].style.fill = "#E3CD7D";
       }
    });
    
    bottomText.textContent = `PLUTOCRACY | CARD ${pad(i, 3)}`;
    
    
    var cardGroup = makeCardGroup(dom.getElementsByTagName("svg")[0]);
    var pageIndex = i % 8;
    var pageRow = Math.floor(pageIndex / 4);
    var pageCol = pageIndex % 4;
    
    cardGroup.setAttribute("transform", `translate(${pageCol * NEWSPAPER_WIDTH * 1.1} ${pageRow * NEWSPAPER_HEIGHT *  1.1})`);
    pageDoc.appendChild(cardGroup);
    
    if(i % 8 == 0) {
        completeDocument.appendChild(pageDoc);
        
        var pageDocFile = initDocument();
        pageDocFile.appendChild(pageDoc)
        fs.writeFileSync(path.join(__dirname, `pages/${page}.svg`), pageDocFile.outerHTML);
        
        pageDoc = initPage(page);
    }
    fs.writeFileSync(path.join(__dirname, `newspapers/${i}.svg`), dom.innerHTML);
    
    
    console.log("Finished card " + i);
}

//make an extra page of backs
pageDoc = initPage(page);
for(var i = 1; i <= 8; i++) {
    var cardGroup = makeCardGroup(backTemplateDom.getElementsByTagName("svg")[0]);
    var pageIndex = i % 8;
    var pageRow = Math.floor(pageIndex / 4);
    var pageCol = pageIndex % 4;
    
    cardGroup.setAttribute("transform", `translate(${pageCol * NEWSPAPER_WIDTH * 1.1} ${pageRow * NEWSPAPER_HEIGHT *  1.1})`);
    pageDoc.appendChild(cardGroup);
 
    if(i % 8 == 0) {
        completeDocument.appendChild(pageDoc);
        
        var pageDocFile = initDocument();
        pageDocFile.appendChild(pageDoc)
        fs.writeFileSync(path.join(__dirname, `pages/${page}.svg`), pageDocFile.outerHTML);
        
        pageDoc = initPage(page);
    }
}

fs.writeFileSync(path.join(__dirname, "final.svg"), completeDocument.outerHTML);

function initPage(pageNum) {
    var s = fakeDom.createElement("g");
    
    s.setAttribute("transform", `translate(0 ${pageNum * NEWSPAPER_HEIGHT * 3})`);
    
    return s;
}

function initDocument() {
    var s = fakeDom.createElement("svg");
    
    s.setAttribute("width", "11in");
    s.setAttribute("height", "8.5in");
    s.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    s.setAttribute("version", "1.1");
    
    return s;
}

function makeCardGroup(document) {
    var children = document.childNodes;
    var g = fakeDom.createElement("g");
    for(var i = 0; i < children.length; i++) {
        g.appendChild(children[i].cloneNode());
    }
    return g;
}

function randomCard() {
    var chance = Math.random();
    
    var titleLines = [];
    var chances = [];
    
    if(chance < 0.333) {
        var c = randomFrom(colors);
        var otherColor = getCompetitor(c);
        titleLines = ["Earnings Reports", "from " + capcase(c) + " corp"];
        chances = colors.map(x=>getChance(x == c ? 1 : x == otherColor ? -1 : 0))
    } else if(chance < 0.8) {
        titleLines = [randomFrom(discoveries), "Discovered"];
        chances = colors.map(x=> getChance());
    } else {
        titleLines = ["Another day", "Nothing Interesting"];
        chances = colors.map(x=> getChance());
    }
    
    return {
        title: titleLines,
        chances: chances
    }
}

function getChance(weight) {
    if(weight > 0) return Math.floor(Math.random() * 6) + 4;
    if(weight < 0) return -1 * Math.floor(Math.random() * 6) - 4;
    
    var likely = (Math.round(Math.random() * 24) - 12) || (Math.random() < 0.5 ? -9 : 9);
    if(Math.abs(likely) >= 7) return 0;
    return likely;
}

function getCompetitor(c) {
    var i = colors.indexOf(c);
    if(i % 2) return colors[i + 1];
    else return colors[i - 1]; 
}

function capcase(t) {
    return t[0].toUpperCase() + t.substring(1);
}

function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function pad(n, l) {
    var s = n.toString();
    while(s.length < l) s = "0" + s;
    return s;
}