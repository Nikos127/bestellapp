let basketSum = 0;
let totalSum = 0;

function init() {
    getFromLocalStorage();
    cardHeader();
}

function cardHeader() {
    let categories = Object.keys(menuItems);
    document.getElementById('content').innerHTML = "";

    for (let j = 0; j < categories.length; j++) {
        let categoryKey = categories[j];
        let category = menuItems[categoryKey];
        let headerName = category.name;
        let headerImage = category.image;
        let headerObject = category.items;
        let items = menuItems[categoryKey].items;

        document.getElementById('content').innerHTML += headerContent(headerName, headerImage);
        cardMainMenu(headerObject, categoryKey, items);
    }

    basketContentUpdate();
    basketBadge();
}

function cardMainMenu(headerObject, categoryKey, items) {
    for (let i = 0; i < headerObject.length; i++) {
        const element = headerObject[i];
        let contentRef = document.getElementById('content');
        contentRef.innerHTML += cardContent(element, categoryKey, i, items);

        document.getElementById(`addToCart-${categoryKey}-${i}`).classList.remove('noButton');
        document.getElementById(`addedToCart-${categoryKey}-${i}`).classList.add('noButton');
        document.getElementById(`addedToCart-${categoryKey}-${i}`).innerHTML = `hinzugefügt ${items[i].amount}`;

        if (items[i].amount > 0) {

            document.getElementById(`addToCart-${categoryKey}-${i}`).classList.add('noButton');
            document.getElementById(`addedToCart-${categoryKey}-${i}`).classList.remove('noButton');
            document.getElementById(`addedToCart-${categoryKey}-${i}`).innerHTML = `hinzugefügt ${items[i].amount}`;
        }
    }
}

function basketBadge() {
    let sumItems = 0;
    let categories = Object.keys(menuItems);

    for (let j = 0; j < categories.length; j++) {
        let categoryKey = categories[j];
        let items = menuItems[categoryKey].items;

        for (let i = 0; i < items.length; i++) {
            if (items[i].amount > 0) {
                sumItems++
            };
        }
    }
    if (sumItems > 0) {
        document.getElementById('basketBadge').innerHTML = `${sumItems}`;
        document.getElementById('basketBadgeToggle').classList.add('basketBadgeFull');
        document.getElementById('basketBadgeToggle').classList.remove('basketBadgeEmpty');
    } else {
        document.getElementById('basketBadge').innerHTML = "";
        document.getElementById('basketBadgeToggle').classList.remove('basketBadgeFull');
        document.getElementById('basketBadgeToggle').classList.add('basketBadgeEmpty')
    }

}

function basketContentUpdate() {

    let basketContentHTML = '';
    let categories = Object.keys(menuItems);

    for (let j = 0; j < categories.length; j++) {
        let categoryKey = categories[j];
        let items = menuItems[categoryKey].items;

        for (let i = 0; i < items.length; i++) {
            if (items[i].amount > 0) {
                basketContentHTML += basketContentRef(items[i].name, items[i].price, items[i].amount, categoryKey, i);
            }
        }
    }
    document.getElementById('basket').innerHTML = basketContent();
    document.getElementById('basketContent').innerHTML = basketContentHTML;
    let checkbox = document.getElementById('flexSwitchCheckDefault');
    if (checkbox) {
        checkbox.checked = appSettings.pickup;
    }
    if (appSettings.pickup) {
        document.getElementById('shipping').innerHTML = `0,00€`
    } else {
        document.getElementById('shipping').innerHTML = `4,99€`
    }
}

function addToCart(categoryKey, i) {
    menuItems[categoryKey].items[i].amount++

    saveToLocalStorage();
    calcBasket();
    basketContentUpdate();
    cardHeader();
}

function saveToLocalStorage() {
    localStorage.setItem('appSettings', JSON.stringify(appSettings));
    localStorage.setItem('menuItems', JSON.stringify(menuItems));
}

function getFromLocalStorage() {
    let arrSettings = JSON.parse(localStorage.getItem('appSettings'));
    let arrName = JSON.parse(localStorage.getItem('menuItems'));

    if (arrName) {
        menuItems = arrName;
    }
    if (arrSettings) {
        appSettings = arrSettings;
    }

    calcBasket();
    basketContentUpdate();
}

function calcBasket() {
    basketSum = 0;
    let categories = Object.keys(menuItems);

    for (let j = 0; j < categories.length; j++) {
        let categoryKey = categories[j];
        let items = menuItems[categoryKey].items;
        for (let i = 0; i < items.length; i++) {
            if (items[i].amount > 0) {
                basketSum += items[i].price * items[i].amount;
            }
        }
    }
    if (appSettings.pickup) {
        totalSum = basketSum
    } else {
        totalSum = basketSum + 4.99
    }
}

function increaseAmount(categoryKey, i) {
    menuItems[categoryKey].items[i].amount++

    saveToLocalStorage();
    calcBasket();
    basketContentUpdate();
    cardHeader();
}

function decreaseAmount(categoryKey, i) {
    menuItems[categoryKey].items[i].amount--;

    saveToLocalStorage();
    calcBasket();
    basketContentUpdate();
    basketBadge();
    cardHeader();
}

function switchPickUp() {
    appSettings.pickup = !appSettings.pickup;
    calcBasket();
    basketContentUpdate();
    let checkbox = document.getElementById('flexSwitchCheckDefault');
    if (checkbox) {
        checkbox.checked = appSettings.pickup;
    }

    saveToLocalStorage();
}

function showBasketMobile() {
    document.getElementById('header').classList.add('headerMobile')
    document.getElementById('content').classList.add('contentMobile')
    document.getElementById('footer').classList.add('footerMobile')
    document.getElementById('basket').classList.add('basketMobile')
}

function closeBasket() {
    document.getElementById('header').classList.remove('headerMobile')
    document.getElementById('content').classList.remove('contentMobile')
    document.getElementById('footer').classList.remove('footerMobile')
    document.getElementById('basket').classList.remove('basketMobile')
}

function buyNow() {
    if (window.innerWidth > 775) {
        document.getElementById('buyNow').style.display = "flex";
        document.getElementById('basket').style.display = "none";
    } else {
        document.getElementById('buyNow').style.display = "flex";
        document.getElementById('basket').style.display = "none";
        closeBasket();
    }

    setTimeout(() => {
        document.getElementById('basket').style.display = "";
        closeOrderConfimation();
    }, 5000);
}

function closeOrderConfimation() {
    emptyBasket();
    saveToLocalStorage();
    calcBasket();
    basketContentUpdate();
    basketBadge();
    cardHeader();
    document.getElementById('basket').style.display = "";
    document.getElementById('buyNow').style.display = "none";
}

function emptyBasket() {
    let categories = Object.keys(menuItems);

    for (let j = 0; j < categories.length; j++) {
        let categoryKey = categories[j];
        let items = menuItems[categoryKey].items;

        for (let i = 0; i < items.length; i++) {
            items[i].amount = 0

        }
    }

    saveToLocalStorage();
}