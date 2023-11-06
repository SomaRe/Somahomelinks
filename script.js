let navMedia = document.getElementById('nav-media-container');
let navApps = document.getElementById('nav-apps-container');


// create a card data object that store information of cards like card image, card name, and card description.
card_data_objects = [
    {
        'card-category': 'Media Server',
        'card_image': 'assets/images/plex-icon.png',
        'card_name': 'Plex',
        'card_description': 'Plex is a versatile media server software for organizing and streaming media collections.',
        'card_link': 'https://app.plex.tv/'
    },
    {
        'card-category': 'Media Server',
        'card_image': 'assets/images/overseerr-logo.png',
        'card_name': 'Overseerr',
        'card_description': 'Media request and management platform for simplifying and improving your media server experience.',
        'card_link': 'https://overseerr.somahomelabs.com/'
    },
    {
        'card-category': 'Media Server',
        'card_image': 'assets/images/sonarr-logo.png',
        'card_name': 'Sonarr',
        'card_description': 'Sonarr is an automated TV series management tool for efficiently downloading and organizing shows.',
        'card_link': 'https://sonarr.somahomelabs.com/'
    },
    {
        'card-category': 'Media Server',
        'card_image': 'assets/images/radarr-logo.png',
        'card_name': 'Radarr',
        'card_description': 'Radarr is a fork of Sonarr, designed for automated movie management and organization.',
        'card_link': 'https://radarr.somahomelabs.com/'
    },
    {
        'card-category': 'Media Server',
        'card_image': 'assets/images/qBittorrent-logo.png',
        'card_name': 'qBittorrent',
        'card_description': 'qBittorrent is a free and open-source cross-platform BitTorrent client.',
        'card_link': 'https://qbit.somahomelabs.com/'
    },
    {
        'card-category': 'Apps',
        'card_image': 'assets/images/hibid-tracker-logo.png',
        'card_name': 'HiBid Tracker',
        'card_description': 'HiBid Tracker is a web application that enables me to see price history from specific auctioneers.',
        'card_link': 'https://hibid.somahomelabs.com/'
    }
];


function createCard(title, imagePath, description, card_link) {
    return `<div class="col-12 col-sm-6 col-md-3 col-lg-3 card" onclick="window.open('${card_link}', '_blank')">
                <div class="card-img col-4">
                    <img src="${imagePath}
                    " class="" alt="Logo">
                </div>
                <div class="card-body col-8">
                    <p class="card-title">${title}</p>
                    <p class="card-text">${description}</p>
                </div>
                </div>`;
}

function renderCards() {
    let MediaServerCardsHTML = '';
    let AppsCardsHTML = '';
    for (let card of card_data_objects) {
        if (card['card-category'] === 'Media Server') {
            MediaServerCardsHTML += createCard(card.card_name, card.card_image, card.card_description, card.card_link);
        } else if (card['card-category'] === 'Apps') {
            AppsCardsHTML += createCard(card.card_name, card.card_image, card.card_description, card.card_link);
        }
    }
    navMedia.innerHTML = MediaServerCardsHTML;
    navApps.innerHTML = AppsCardsHTML;
}



renderCards();