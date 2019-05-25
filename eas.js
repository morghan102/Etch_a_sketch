var container = document.getElementById("container");


function makeGrid() {
    // var cont = document.createElement("div");
    // var column = document.createElement("div");
    // var row = document.createElement("div");
    // var column, row;

    for (var i = 0; i <= 16; i++) {
        for (var y = 0; y <= 16; y++) {
            console.log(y);
            var column = document.createElement("div");
            container.appendChild(column);

            // var container = document.getElementById(container);

        }        console.log(i) ;
            var row = document.createElement("div");
            column.appendChild(row);

        } 
}
makeGrid();
// container.textContent = makeGrid();
// div.setAttribute("style", "color: black, border: none")