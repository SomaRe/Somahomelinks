let navMedia = document.getElementById('nav-media-container');
let navApps = document.getElementById('nav-apps-container');


card_data_objects = [
    {
        'card-category': 'Apps',
        'card_image': 'assets/images/familytreelogo.png',
        'card_name': 'Family Tree',
        'card_description': 'Interactive family tree visualizer.',
        'card_link': 'https://family-tree.somahomelabs.com/'
    },
    {
        'card-category': 'Apps',
        'card_image': 'assets/images/filebrowser-logo.png',
        'card_name': 'File Browser',
        'card_description': 'Browse, view and edit files on the server — user-files, memory, scripts and more.',
        'card_link': 'https://files.somahomelabs.com/'
    },
    {
        'card-category': 'Apps',
        'card_image': 'assets/images/claude-ai-icon.png',
        'card_name': 'Claude UI',
        'card_description': 'Web and mobile interface for Claude Code — manage AI agent sessions and projects.',
        'card_link': 'https://claudeui.somahomelabs.com/'
    },
    {
        'card-category': 'Media Server',
        'card_image': 'assets/images/overseerr-logo.png',
        'card_name': 'Jellyseerr',
        'card_description': 'Media request and management platform for simplifying and improving your media server experience.',
        'card_link': 'https://jellyseerr.somahomelabs.com/'
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
];


function createCard(title, imagePath, description, card_link) {
    return `<div class="col-12 col-sm-6 col-md-3 col-lg-3 card" onclick="window.open('${card_link}', '_blank')">
                <div class="card-img col-4">
                    <img src="${imagePath}" class="" alt="Logo">
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
