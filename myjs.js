window.onload = function() {
    setInterval(doDate, 1000);
    setAltenateCS();
}

function doDate() {
    var str = "";
    var now = new Date();
    str = now.toDateString() + ' ' + now.toLocaleTimeString();
    document.getElementById("ftime").innerHTML = str;
}

function setAltenateCS() {

    $("table").each(function() {

        //get html element from jquery
        var parent = $(this).get(0);
        //get child elements
        var rows = parent.getElementsByTagName("tr");
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];

            //get cell tags
            if (row.cells[0].tagName.toLowerCase() == "th") {
                // it should skip
                // continue;
            } else {

                for (var j = 0; j < row.cells.length; j++) {

                    var cell = row.cells[j];
                    cell.addEventListener("mouseover", function() {
                        this.className = "hover";
                    }, false);
                    cell.addEventListener("mouseout", function() {
                        this.classList.remove("hover");
                    }, false);
                }
            }

        }
    });

}