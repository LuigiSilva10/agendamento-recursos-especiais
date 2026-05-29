self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  // Cache assets if needed for offline functionality
  // e.waitUntil(
  //   caches.open('ldc-agendamento-cache-v1').then((cache) => {
  //     return cache.addAll([
  //       '/',
  //       'index.html',
  //       // Add other critical assets here
  //     ]);
  //   })
  // );
});

self.addEventListener('fetch', (e) => {
  // Basic network-first strategy for all requests
  // This ensures that the app tries to get the latest content from the network
  // but falls back to cache if offline.
  e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});