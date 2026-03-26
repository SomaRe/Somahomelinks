const CACHE = 'somalab-v1';
const SHELL = [
  '/',
  '/index.html',
  '/script.js',
  '/styles.css',
  '/manifest.json',
  '/assets/images/logo-512.png',
  '/assets/images/logo-favicon.png',
  '/assets/images/sonarr-logo.png',
  '/assets/images/radarr-logo.png',
  '/assets/images/qBittorrent-logo.png',
  '/assets/images/overseerr-logo.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
