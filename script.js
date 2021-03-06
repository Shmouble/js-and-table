function sortByColumn(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, headers, switchcount = 0;
    table = document.getElementById("customers");
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.rows;

        if(dir == "asc"){
            headers = rows[0];
            for(k = 0; k < headers.getElementsByTagName("TH").length; k++){
                if( k == n){
                    headers.getElementsByTagName("TH")[k].getElementsByTagName("span")[0].innerHTML = "&#8595;";
                } else{
                    headers.getElementsByTagName("TH")[k].getElementsByTagName("span")[0].innerHTML = "";
                }
            }
        }
        else{
            headers = rows[0];
            for(k = 0; k < headers.getElementsByTagName("TH").length; k++){
                if( k == n){
                    headers.getElementsByTagName("TH")[k].getElementsByTagName("span")[0].innerHTML = "&#8593;";
                } else{
                    headers.getElementsByTagName("TH")[k].getElementsByTagName("span")[0].innerHTML = "";
                }
            }
        }

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount ++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

function companiesSearch() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("customers");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = "none";

        td = tr[i].getElementsByTagName("td");
        for (var j = 0; j < td.length; j++) {
            cell = tr[i].getElementsByTagName("td")[j];
            if (cell) {
                if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break;
                }
            }
        }
    }
}