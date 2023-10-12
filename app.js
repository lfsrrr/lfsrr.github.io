document.addEventListener('DOMContentLoaded', function() {
    try {
        const sternzeichenSelect = document.getElementById('sternzeichen');
        const horoskopContainer = document.getElementById('horoskop-output');
        const sternzeichenTitel = document.getElementById('sternzeichen-titel');

        sternzeichenSelect.addEventListener('change', function() {
            const ausgewaehltesSternzeichen = this.value;

            fetch('horoskope.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    const horoskop = data.Horoskope.find(h => h.Sternzeichen === ausgewaehltesSternzeichen);

                    if (horoskop) {
                        sternzeichenTitel.textContent = horoskop.Sternzeichen;

                        horoskopContainer.innerHTML = `
                            <p><strong>Prognose:</strong> ${horoskop.Prognose}</p>
                            <p><strong>Glückszahl:</strong> ${horoskop.Glückszahl}</p>
                            <p><strong>Glücksfarbe:</strong> <span class="gluecksfarbe" style="background-color:${horoskop.Glücksfarbe};"></span></p>
                        `;
                    } else {
                        sternzeichenTitel.textContent = "Horoskop nicht gefunden";
                        horoskopContainer.innerHTML = "";
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        });

        function berechneQuersumme(event) {
            event.preventDefault();
            const datepicker = document.getElementById('datepicker');
            const dateValue = datepicker.value;
        
            // Entferne die Trennzeichen (-) im Datum
            const dateWithoutDashes = dateValue.split('-').join('');
        
            // Berechne die Quersumme
            const quersumme = dateWithoutDashes.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        
            const output = document.getElementById('output');
            output.innerHTML = `Die Engelszahl des eingegebenen Datums ist: ${quersumme}`;
        }
        
        // Event-Listener für den Submit-Button
        const submitButton = document.getElementById('submit-button');
        submitButton.addEventListener('click', berechneQuersumme);

    } catch (error) {
        console.error('Error in document.addEventListener:', error);
    }
});

	const darkModeButton = document.getElementById('darkModeButton');
	const body = document.body;

	darkModeButton.addEventListener('click', toggleDarkMode);

	function toggleDarkMode() {
 		 body.classList.toggle('dark-mode');
	}

document.addEventListener('DOMContentLoaded', function() {
    const collapsibles = document.querySelectorAll('.collapsible');

    collapsibles.forEach(function(collapsible) {
        const header = collapsible.querySelector('h2');

        header.addEventListener('click', function() {
            const content = collapsible.querySelector('div');
            content.classList.toggle('collapsed');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const acceptCookiesButton = document.getElementById('accept-cookies');
    const cookieBanner = document.getElementById('cookie-banner');

    acceptCookiesButton.addEventListener('click', function() {
        cookieBanner.style.display = 'none';
    });
});

// Funktion, um das Horoskop anzuzeigen
function zeigeHoroskop(sternzeichen) {
    // Dein bestehender Code ...
  
    // JSON-Objekt (Beispiel)
    let horoskop = {
      "Sternzeichen": "Widder",
      "Prognose": "Du wirst heute voller Energie sein. Nutze diese Kraft, um deine Ziele zu verfolgen.",
      "Glückszahl": 7,
      "Glücksfarbe": "#FF0000"
    };
  
    // Extrahiere die Lieblingsfarbe
    let lieblingsfarbe = horoskop.Glücksfarbe;
  
    // Finde das Element, in dem die Lieblingsfarbe angezeigt werden soll
    let lieblingsfarbeAnzeige = document.getElementById("lieblingsfarbe-anzeige");
  
    // Setze den Hintergrund der Anzeige auf die Lieblingsfarbe
    lieblingsfarbeAnzeige.style.backgroundColor = lieblingsfarbe;
  
    // Setze den Textinhalt des Elements auf die Lieblingsfarbe
    lieblingsfarbeAnzeige.textContent = `Lieblingsfarbe: ${lieblingsfarbe}`;
  }
   
  