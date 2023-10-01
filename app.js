document.addEventListener('DOMContentLoaded', function() {
    const sternzeichenSelect = document.getElementById('sternzeichen');
    const horoskopContainer = document.getElementById('horoskop-output');
    const sternzeichenTitel = document.getElementById('sternzeichen-titel');


    sternzeichenSelect.addEventListener('change', function() {
        const ausgewaehltesSternzeichen = this.value;

        fetch('horoskope.json')
            .then(response => response.json())
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
            });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const darkModeCheckbox = document.getElementById('dark-mode-checkbox');

    darkModeCheckbox.addEventListener('change', function() {
        toggleDarkMode();
    });
});

// Füge diese Funktion in deinen app.js-Code ein

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

document.addEventListener('DOMContentLoaded', function() {
    const impressumToggle = document.querySelector('.impressum-toggle');

    impressumToggle.addEventListener('click', function() {
        const impressum = document.getElementById('impressum');
        impressum.classList.toggle('collapsed');
    });
});
