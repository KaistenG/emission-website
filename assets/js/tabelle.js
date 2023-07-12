function myFunction() {
  let input, filter, table, tr, td, i, txtValue; //Variablen deklarieren
  input = document.getElementById("myInput"); //Eingabefeld abrufen
  filter = input.value.toUpperCase(); //Suchfilter auf Wert des Eingabefeldes in Großbuchstaben setzen
  table = document.getElementById("myTable"); //Tabelle abrufen
  tr = table.getElementsByTagName("tr"); //Tabellenzeilen abrufen

  // Loop durch die Reihen und verstecken was nicht stimmt
  for (i = 0; i < tr.length; i++) {
    td1 = tr[i].getElementsByTagName("td")[0]; //1. Zeile abrufen
    td2 = tr[i].getElementsByTagName("td")[1]; //2. Zeile abrufen
    if (td1 && td2) { //prüfen ob Zeilen vorhanden sind
      txtValue = td1.textContent || td1.innerText; //Textinhalt abrufen
      txtValue += "" + (td2.textContent || td2.innerText) //Textinhalt aus spalte 1 und 2 zusammenfügen
      if (txtValue.toUpperCase().indexOf(filter) > -1) {  //prüfen ob Text im Suchfilter enthalten ist
        tr[i].style.display = ""; //sichtbar machen falls ja
      } else {
        tr[i].style.display = "none"; //nicht sichbtbar machen, falls nein
      }
    }
  }
}
