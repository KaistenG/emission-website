  // Funktion zum Blättern durch die Tabelle
  function ergebnisse(pageSize) {
    var table = document.getElementById("myTable");
    var rows = table.rows;

    // Schleife über alle Zeilen der Tabelle
    for (var i = 1; i < rows.length; i++) {
      var row = rows[i];

      // Überprüfen, ob die Zeile angezeigt werden soll
      if (i > pageSize) {
        row.style.display = "none";
      } else {
        row.style.display = "";
      }
    }
  }

  // Funktion zum Wechseln der Seiten
  function changePage() {
    var pageSize = parseInt(document.getElementById("pageSize").value, 10);
    ergebnisse(pageSize);
  } 

  // Aufruf der changePage-Funktion beim Laden der Seite
  window.onload = function() {
    changePage();
  };

 