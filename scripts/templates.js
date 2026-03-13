function cardContent(element) {
    return ` 
    <div class="card">
            <div class="cardImage"><img src="${element.image}" alt="${element.name}"></div>
            <div class="cardRight">
                <div class="cardText">
                    <h2>${element.name}
                    </h2>
                    <p>${element.Beschreibung}
                    </p>
                </div>
                <div class="cardPrice">
                    <h2>${element.Preis.toFixed(2).replace(".",",")}€</h2>
                </div>
            </div>
        </div>
    `
}

function headerContent(headerName,headerImage) {
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