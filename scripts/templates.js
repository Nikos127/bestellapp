function headerContent(headerName, headerImage) {
    return `
    <div class="headerFoodGroups">
        <img class="foodGroupImage" src="${headerImage}" alt="">
            ${headerName}
        </div>
    <div id="container" class="container"></div>
    `
}

function cardContent(element, categoryKey, i, items) {
    return ` 
    <div class="card">
            <div class="cardImage"><img src="${element.image}" alt="${element.name}"></div>
            <div class="cardRight">
                <div class="cardText">
                    <h3>${element.name}
                    </h3>
                    <p>${element.description}
                    </p>
                </div>
                <div class="cardPrice">
                    <h3>${(element.price).toFixed(2).replace(".", ",")}€</h3>
                    <button id="addToCart-${categoryKey}-${i}"  onclick="addToCart('${categoryKey}', ${i})">In den Warenkorb</button>
                    <button id="addedToCart-${categoryKey}-${i}" onclick="increaseAmount('${categoryKey}', ${i})" class="noButton" style="color: #E76C1F"></button>
                </div>
            </div>
        </div>
    `
}

function basketContent() {
    return `
                    <button id="closeBasket" class="closeBasket" onclick="toggleBasket()"><img src="./assets/icons/close.png" alt=""></button>
                    <div class="form-check form-switch">
                    <input onchange="switchPickUp()" class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                    <label class="form-check-label" for="flexSwitchCheckDefault">Selbstabholung</label>
                    </div>
                    <h2>Dein Warenkorb</h2>
                    <div id="basketContent">
                    </div>
                    <table id="basketSum" class="basketSum" style="font-size: 20px">
                        <tr>
                            <td>Zwischensumme</td>
                            <td id="subtotal">${basketSum.toFixed(2).replace(".", ",")}€</td>
                        </tr>
                        <tr>
                            <td>Lieferkosten</td>
                            <td id="shipping"></td>
                        </tr>
                        <tr class="line" style="border: 1px solid #FFFFFF">
                        </tr>
                        <tr>
                            <td>Summe</td>
                            <td id="total">${totalSum.toFixed(2).replace(".", ",")}€</td>
                        </tr>
                    </table>
                    <button ${basketSum === 0 ? `disabled` : `onclick="buyNow()"`}>
                        <h2>Jetzt kaufen</h2>
                    </button>
                    `
}

function basketContentRef(name, price, amount, categoryKey, i) {
    return `
    <div id="basketContent" class="basketContent">
            ${amount} x ${name}
        <div style="font-size:22px" class="basketAmount">
            <div>
             <button class="changeAmount" onclick = "decreaseAmount('${categoryKey}', ${i})" > -</button>
                ${amount}
                <button class="changeAmount" onclick="increaseAmount('${categoryKey}', ${i})">+</button>
            </div>
            ${(price * amount).toFixed(2).replace(".", ",")}€
            <button class="changeAmount" onclick = "eraseAmount('${categoryKey}', ${i})" > <img src="./assets/icons/trash.png" alt="Remove"></button>
        </div>
    </div>
    `
}