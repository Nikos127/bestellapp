function cardContent(element) {
    return ` 
    <div class="card">
            <div class="cardImage"><img src="${element.image}" alt="${element.Vorspeise}"></div>
            <div class="cardRight">
                <div class="cardText">
                    <h2>${element.Vorspeise
        }

                    </h2>
                    <p>${element.Beschreibung
        }

                    </p>
                </div>
                <div class="cardPrice">
                    <h2>Preis: ${element.Preis.toFixed(2)
        }

                        €</h2>
                </div>
            </div>
        </div>
    `
}