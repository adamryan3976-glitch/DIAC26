// Minimal service worker for the DIAC Staff Hub.
//
// This does NOT cache anything or work offline — every request just goes
// straight to the network, same as if there were no service worker at all.
// Its only job is to exist and be registered, because iOS Safari only grants
// "installed" web apps (added to the Home Screen) protection from its
// aggressive local-storage clearing once the site has a real manifest.json
// *and* a controlling service worker. Without this, staff signed in and
// using the app as a Home Screen icon could get signed out as soon as they
// closed the app, regardless of how long the session is set to last.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
