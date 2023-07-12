function validateInput(event) {
    console.log("validateInput called");
    var keyCode = event.keyCode ? event.keyCode : event.which;
    console.log("Key code: " + keyCode);

    // Tastencode abrufen
    var keyCode = event.keyCode ? event.keyCode : event.which;
  
    // Erlaubte Tastencodes: Buchstaben (A-Z, a-z), Zahlen (0-9), Backspace (8) und Leerzeichen (32)
    var allowedKeys = [8, 32]; // Backspace und Leerzeichen
  
    // Buchstaben von A bis Z (Großbuchstaben)
    for (var i = 65; i <= 90; i++) {
      allowedKeys.push(i);
    }
  
    // Buchstaben von a bis z (Kleinbuchstaben)
    for (var j = 97; j <= 122; j++) {
      allowedKeys.push(j);
    }
  
    // Zahlen von 0 bis 9
    for (var k = 48; k <= 57; k++) {
      allowedKeys.push(k);
    }

    // ß äüö ÄÜÖ
    allowedKeys.push(223, 196, 214, 220, 228, 246, 252);

  
    // Überprüfen, ob der aktuelle Tastencode erlaubt ist
    if (allowedKeys.indexOf(keyCode) === -1) {
      event.preventDefault(); // Verhindert das Einfügen der unerlaubten Taste
    }
}

// Das Eingabefeld abrufen
var inputField = document.getElementById('myInput');

// Ereignislistener hinzufügen, um das Eingabefeld zu überprüfen
inputField.addEventListener('keypress', validateInput);
