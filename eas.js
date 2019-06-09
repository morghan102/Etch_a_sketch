var x;
var ui;
var message = "How many squares per side do you want?";

// document.getElementById("h1").style.color = 

var container = document.getElementById("container");

function makeRandomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var color = ("rgb("+r+", "+g+", "+b+")");
        return color;
    };

function makeGrid() {
    if(typeof ui === "undefined") {
        ui = 4;
    };
    //  else if (typeof ui === "number") {
    //     placeHolder = ui; //this is 1 idea...
    //     //replace ui w/ placeholder, declare ph globally
    // };
    for (var i = 0; i < ui; i++) {
        //     var row = document.createElement("div");
        //     row.className = "row";
        //     container.appendChild(row);
        for (var y = 0; y < ui; y++) {
            var box = document.createElement("div");
            box.className = "box";
            container.appendChild(box);
            box.style.height = `${100/ui}%`;
            box.style.width = `${100/ui}%`;
        }} 
        var randomColor = makeRandomColor();
        document.getElementById("h1").style.color = randomColor;


//prob is w how the rgb values are put together?
    var box = document.querySelectorAll("div.box");
    box.forEach((box) => {
        box.addEventListener("mouseover", (e) => {
            box.style.backgroundColor = randomColor;
        }); 
    });
    } 
makeGrid();

function clearGrid() {
    $(".box").remove();
};

document.getElementById("btn").onclick = function userChangeGrid() {
    x = prompt(message, "");
    ui = parseInt(x);
    clearGrid();
    makeGrid(ui);
        };