let vorspeisen = [

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

];

let salate = [

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

];

let hauptgerichte = [

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

];

let header = [
    {
        'name': 'Vorspeise',
        'image': './assets/icons/olive.png',
        'object': vorspeisen
    },
    {
        'name': 'Salat',
        'image': './assets/icons/salad.png',
        'object': salate
    },
    {
        'name': 'Hauptgericht',
        'image': './assets/icons/main_course.png',
        'object': hauptgerichte
    }

]

let basketOrder = {
    'amount': [],
    'name': [],
    'preis': []
}

function init() {
    getFromLocalStorage();
    card();
}

function card() {
    for (let j = 0; j < header.length; j++) {
        let headerName = header[j].name
        let headerImage = header[j].image
        let headerObject = header[j].object
        document.getElementById('content').innerHTML += headerContent(headerName, headerImage);


        for (let i = 0; i < headerObject.length; i++) {

            const element = headerObject[i];
            document.getElementById('content').innerHTML += cardContent(element);
        }
    }
    basketContentUpdate();
}

function basketContentUpdate() {
    document.getElementById('basket').innerHTML = basketContent();
    // document.getElementById('basketContent').innerHTML = '';
    for (let i = 0; i < basketOrder.name.length; i++) {
        document.getElementById('basketContent').innerHTML += basketContentRef(i);
    }
}



function addToCart(elementName, elementPreis, elementAmount) {
    basketOrder.name.push(elementName);
    basketOrder.preis.push(elementPreis);
    basketOrder.amount.push(elementAmount + 1);

    saveToLocalStorage();
    basketContentUpdate();
}

function saveToLocalStorage() {
    localStorage.setItem('basketOrder', JSON.stringify(basketOrder.name));
    localStorage.setItem('basketOrderPreis', JSON.stringify(basketOrder.preis));
    localStorage.setItem('basketOrderAmount', JSON.stringify(basketOrder.amount));
}

function getFromLocalStorage() {
    let arrName = JSON.parse(localStorage.getItem('basketOrder'));
    let arrPreis = JSON.parse(localStorage.getItem('basketOrderPreis'));
    let arrAmount = JSON.parse(localStorage.getItem('basketOrderAmount'));

    if (arrName && arrPreis && arrAmount) {
        basketOrder.name = arrName;
        basketOrder.preis = arrPreis;
        basketOrder.amount = arrAmount;
    }

    basketContentUpdate();
}