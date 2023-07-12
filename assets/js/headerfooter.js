//Header einfügen
fetch('../partials/header.html') // Ruft den Inhalt der Datei "header.html" ab
  .then(response => response.text()) //Konvertierung der Antwort in Text
  .then(html => document.querySelector('#header').innerHTML = html); // Fügt den HTML-Inhalt in das Element mit der ID "header" ein

//Footer einfügen
fetch('../partials/footer.html')
  .then(response => response.text())
  .then(html => document.querySelector('#footer').innerHTML = html);