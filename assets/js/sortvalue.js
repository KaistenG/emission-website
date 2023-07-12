  let sortDirection = "desc";

function sortTableByValue() {
  let table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = parseFloat(rows[i].getElementsByTagName("td")[1].innerHTML.replace(/\./g, "").replace(",", "."));
      y = parseFloat(rows[i + 1].getElementsByTagName("td")[1].innerHTML.replace(/\./g, "").replace(",", "."));
      if (sortDirection === "desc") {
        if (x < y) {
          shouldSwitch = true;
          break;
        }
      } else {
        if (x > y) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }

  // Sortierung umkehren
  if (sortDirection === "desc") {
    sortDirection = "asc";
  } else {
    sortDirection = "desc";
  }
}