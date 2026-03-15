let order = []

function headerContent(headerName, headerImage) {
    return `
    <div class="headerFoodGroups">
                    ${headerName}
                </div>
                <div>
                    <img class="foodGroupImage" src="${headerImage}" alt="">
                </div>
                <div id="container" class="container"></div>
    `
}

function cardContent(element) {
    return ` 
    <div class="card">
            <div class="cardImage"><img src="${element.image}" alt="${element.name}"></div>
            <div class="cardRight">
                <div class="cardText">
                    <h3>${element.name}
                    </h3>
                    <p>${element.Beschreibung}
                    </p>
                </div>
                <div class="cardPrice">
                    <h3>${element.Preis.toFixed(2).replace(".", ",")}€</h3>
                    <button class="addToCart" onclick="addToCart('${element.name}', ${element.Preis}, ${element.amount})">In den Warenkorb</button>
                </div>
            </div>
        </div>
    `
}

function basketContent() {
    return `
                    <h2>Dein Warenkorb</h2>
                    <div id="basketContent">
                    </div>
                    <table id="basketSum" class="basketSum">
                        <tr>
                            <td>Zwischensumme</td>
                            <td id="subtotal">15,20€</td>
                        </tr>
                        <tr>
                            <td>Lieferkosten</td>
                            <td id="shipping">4,99€</td>
                        </tr>
                        <tr class="line" style="border: 1px solid #FFFFFF">
                        </tr>
                        <tr>
                            <td>Summe</td>
                            <td id="total">100€</td>
                        </tr>
                    </table>
                    <button>
                        <h2>Jetzt kaufen</h2>
                    </button>
                    `
}

function basketContentRef(i) {
    return `
    <div class="basketContent">
    <table>
    <tr>
        <td>${basketOrder.amount[i]} x ${basketOrder.name[i]}</td>
        <td>${basketOrder.preis[i].toFixed(2).replace(".", ",")}€</td>
    </tr>
    </table>
    </div>
    `
}