let basketSum = 0;
let totalSum = 0;
let pickup = false;

let menuItems = {
    vorspeisen: {
        name: 'Vorspeise',
        image: './assets/icons/olive.png',
        items: [
            {
                'image': 'assets/img/saganaki.webp',
                'name': 'Saganaki',
                'Preis': 5.50,
                'Beschreibung': 'Griechischer Käse, gebraten und mit Zitrone serviert',
                'amount': 0
            },
            {
                'image': 'assets/img/tzatziki.jpg',
                'name': 'Tzatziki',
                'Preis': 4.90,
                'Beschreibung': 'Joghurt mit Gurke, Knoblauch, Olivenöl und Dill',
                'amount': 0
            },
            {
                'image': 'assets/img/dolmadakia.jpg',
                'name': 'Dolmadakia',
                'Preis': 5.20,
                'Beschreibung': 'Gefüllte Weinblätter mit Reis und Kräutern',
                'amount': 0
            },
            {
                'image': 'assets/img/gigantes.jpg',
                'name': 'Gigantes',
                'Preis': 5.80,
                'Beschreibung': 'Weiße Riesenbohnen in Tomatensauce aus dem Ofen',
                'amount': 0
            }
        ]
    },

    salate: {
        name: 'Salat',
        image: './assets/icons/salad.png',
        items: [
            {
                'image': 'assets/img/choriatiki.jpg',
                'name': 'Choriatiki',
                'Preis': 7.50,
                'Beschreibung': 'Griechischer Bauernsalat mit Tomaten, Gurken, Oliven, Zwiebeln und Feta',
                'amount': 0
            },
            {
                'image': 'assets/img/krautsalat.jpg',
                'name': 'Krautsalat',
                'Preis': 4.90,
                'Beschreibung': 'Weißkohlsalat mit Karotten, Essig und Olivenöl',
                'amount': 0
            },
            {
                'image': 'assets/img/tomatensalat.jpg',
                'name': 'Tomatensalat',
                'Preis': 5.20,
                'Beschreibung': 'Frische Tomaten mit Zwiebeln, Oregano und Olivenöl',
                'amount': 0
            },
            {
                'image': 'assets/img/rucola.jpg',
                'name': 'Rucola Salat',
                'Preis': 6.20,
                'Beschreibung': 'Rucola mit Kirschtomaten, Parmesan und Balsamico',
                'amount': 0
            }
        ]
    },

    hauptgerichte: {
        name: 'Hauptgericht',
        image: './assets/icons/main_course.png',
        items: [
            {
                'image': 'assets/img/gyros.jpg',
                'name': 'Gyros Teller',
                'Preis': 13.90,
                'Beschreibung': 'Gyros vom Drehspieß mit Pommes, Tzatziki und Salat',
                'amount': 0
            },
            {
                'image': 'assets/img/souvlaki.jpg',
                'name': 'Souvlaki',
                'Preis': 14.50,
                'Beschreibung': 'Gegrillte Schweinefleischspieße mit Pommes, Tzatziki und Salat',
                'amount': 0
            },
            {
                'image': 'assets/img/bifteki.jpg',
                'name': 'Bifteki',
                'Preis': 15.20,
                'Beschreibung': 'Griechisches Hacksteak gefüllt mit Feta, dazu Pommes und Salat',
                'amount': 0
            },
            {
                'image': 'assets/img/moussaka.jpg',
                'name': 'Moussaka',
                'Preis': 14.90,
                'Beschreibung': 'Auberginenauflauf mit Hackfleisch, Kartoffeln und Béchamelsauce',
                'amount': 0
            }
        ]
    }
};

function init() {
    getFromLocalStorage();
    card();
}

function card() {
    let categories = Object.keys(menuItems);

    for (let j = 0; j < categories.length; j++) {
        let categoryKey = categories[j];
        let category = menuItems[categoryKey];
        let headerName = category.name;
        let headerImage = category.image;
        let headerObject = category.items;
        let items = menuItems[categoryKey].items;

        document.getElementById('content').innerHTML += headerContent(headerName, headerImage);

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

    basketContentUpdate();
}

function basketContentUpdate() {

    let basketContentHTML = '';
    let categories = Object.keys(menuItems);

    for (let j = 0; j < categories.length; j++) {
        let categoryKey = categories[j];
        let items = menuItems[categoryKey].items;

        for (let i = 0; i < items.length; i++) {
            if (items[i].amount > 0) {
                basketContentHTML += basketContentRef(items[i].name, items[i].Preis, items[i].amount, categoryKey, i);
            }

        }
    }
    document.getElementById('basket').innerHTML = basketContent();
    document.getElementById('basketContent').innerHTML = basketContentHTML;
    let checkbox = document.getElementById('flexSwitchCheckDefault');
    if (checkbox) {
        checkbox.checked = pickup;
    }
    if (pickup) {
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
    card();
}

function saveToLocalStorage() {
    localStorage.setItem('menuItems', JSON.stringify(menuItems));
}

function getFromLocalStorage() {
    let arrName = JSON.parse(localStorage.getItem('menuItems'));

    if (arrName) {
        menuItems = arrName;
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
                basketSum += items[i].Preis * items[i].amount;
            }
        }
    }
    if (pickup) {
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
    card();
}

function decreaseAmount(categoryKey, i) {
    menuItems[categoryKey].items[i].amount--;

    saveToLocalStorage();
    calcBasket();
    basketContentUpdate();
    card();
}

function switchPickUp() {
    pickup = !pickup;
    calcBasket();
    basketContentUpdate();
    let checkbox = document.getElementById('flexSwitchCheckDefault');
    if (checkbox) {
        checkbox.checked = pickup;
    }
}