let vorspeisen = [

    {
        'image': 'assets/img/saganaki.webp',
        'Vorspeise': 'Saganaki',
        'Preis': 5.50,
        'Beschreibung': 'Griechischer Käse, gebraten und mit Zitrone serviert',
        'amount': 0
    },

    {
        'image': 'assets/img/tzatziki.jpg',
        'Vorspeise': 'Tzatziki',
        'Preis': 4.90,
        'Beschreibung': 'Joghurt mit Gurke, Knoblauch, Olivenöl und Dill',
        'amount': 0
    },

    {
        'image': 'assets/img/dolmadakia.jpg',
        'Vorspeise': 'Dolmadakia',
        'Preis': 5.20,
        'Beschreibung': 'Gefüllte Weinblätter mit Reis und Kräutern',
        'amount': 0
    },

    {
        'image': 'assets/img/gigantes.jpg',
        'Vorspeise': 'Gigantes',
        'Preis': 5.80,
        'Beschreibung': 'Weiße Riesenbohnen in Tomatensauce aus dem Ofen',
        'amount': 0
    }

];

let salate = [

    {
        'image': 'assets/img/choriatiki.jpg',
        'Salat': 'Choriatiki',
        'Preis': 7.50,
        'Beschreibung': 'Griechischer Bauernsalat mit Tomaten, Gurken, Oliven, Zwiebeln und Feta',
        'amount': 0
    },

    {
        'image': 'assets/img/krautsalat.jpg',
        'Salat': 'Krautsalat',
        'Preis': 4.90,
        'Beschreibung': 'Weißkohlsalat mit Karotten, Essig und Olivenöl',
        'amount': 0
    },

    {
        'image': 'assets/img/tomatensalat.jpg',
        'Salat': 'Tomatensalat',
        'Preis': 5.20,
        'Beschreibung': 'Frische Tomaten mit Zwiebeln, Oregano und Olivenöl',
        'amount': 0
    },

    {
        'image': 'assets/img/rucola.jpg',
        'Salat': 'Rucola Salat',
        'Preis': 6.20,
        'Beschreibung': 'Rucola mit Kirschtomaten, Parmesan und Balsamico',
        'amount': 0
    }

];

let hauptgerichte = [

    {
        'image': 'assets/img/gyros.jpg',
        'Gericht': 'Gyros Teller',
        'Preis': 13.90,
        'Beschreibung': 'Gyros vom Drehspieß mit Pommes, Tzatziki und Salat',
        'amount': 0
    },

    {
        'image': 'assets/img/souvlaki.jpg',
        'Gericht': 'Souvlaki',
        'Preis': 14.50,
        'Beschreibung': 'Gegrillte Schweinefleischspieße mit Pommes, Tzatziki und Salat',
        'amount': 0
    },

    {
        'image': 'assets/img/bifteki.jpg',
        'Gericht': 'Bifteki',
        'Preis': 15.20,
        'Beschreibung': 'Griechisches Hacksteak gefüllt mit Feta, dazu Pommes und Salat',
        'amount': 0
    },

    {
        'image': 'assets/img/moussaka.jpg',
        'Gericht': 'Moussaka',
        'Preis': 14.90,
        'Beschreibung': 'Auberginenauflauf mit Hackfleisch, Kartoffeln und Béchamelsauce',
        'amount': 0
    }

];

function init() {
    card();
}

function card() {
    for (let i = 0; i < vorspeisen.length; i++) {
        const element = vorspeisen[i];
        document.getElementById('container').innerHTML += cardContent(element);
        document.getElementById('container1').innerHTML += cardContent(element);
        document.getElementById('container2').innerHTML += cardContent(element);
        document.getElementById('container3').innerHTML += cardContent(element);
    }
}

function cardContent(element) {
    return `
           <div class="card">
            <div class="cardImage"><img src="${element.image}" alt="${element.Vorspeise}">
            </div>
            <div class="cardRight">
                <div class="cardText">
                    <h2>${element.Vorspeise}</h2>
                     <p>${element.Beschreibung}</p>
                </div>
                <div class="cardPrice">
                   <h2>Preis: ${element.Preis.toFixed(2)} €</h2>
                </div>
            </div>
        </div>
`
}