# AGENTS.md — Somahomelinks Site Guide

## What This Repo Is

A static home lab dashboard served via **GitHub Pages** at `somahomelabs.com`. It displays cards linking to all services running on the soma server, organized into two tabs: **Applications** and **Media Server**.

## Deployment

- Hosted on **GitHub Pages** — pushing to `main` deploys automatically.
- Custom domain: `somahomelabs.com` (configured via `CNAME` file).
- No build step — plain HTML, CSS, and JavaScript.

## Structure

```
index.html        # Main page — tabs and layout
script.js         # Card data and rendering logic
styles.css        # Custom styles
manifest.json     # PWA manifest (installable on mobile)
sw.js             # Service worker for PWA support
assets/
  images/         # Logos and icons for each service card
  logo.psd        # Source file for site logo
```

## How to Add or Update a Service Card

All cards are defined in `script.js` in the `card_data_objects` array. Each entry looks like:

```js
{
    'card-category': 'Apps',           // 'Apps' or 'Media Server'
    'card_image': 'assets/images/your-logo.png',
    'card_name': 'Service Name',
    'card_description': 'Short description of the service.',
    'card_link': 'https://service.somahomelabs.com/'
}
```

Steps:
1. Add the logo image to `assets/images/`
2. Add a new object to `card_data_objects` in `script.js`
3. Commit and push — GitHub Pages deploys automatically

## Services Currently Listed

| Name         | Category     | URL                                  |
|--------------|--------------|--------------------------------------|
| Claude UI    | Apps         | https://claudeui.somahomelabs.com/   |
| Jellyseerr   | Media Server | https://jellyseerr.somahomelabs.com/ |
| Sonarr       | Media Server | https://sonarr.somahomelabs.com/     |
| Radarr       | Media Server | https://radarr.somahomelabs.com/     |
| qBittorrent  | Media Server | https://qbit.somahomelabs.com/       |

## Notes

- Services are exposed via **Cloudflare Tunnels** — not direct port forwarding.
- Plex was removed 2026-03-27; fully replaced by Jellyfin.
- The site is a PWA — installable on mobile home screens.
- Icons sourced from official project sites or uxwing.com.
