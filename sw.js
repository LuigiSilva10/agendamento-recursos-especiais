self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  self.skipWaiting();
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

self.addEventListener('activate', (e) => {
  console.log('[Service Worker] Activate');
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Estratégia Network-First: Tenta buscar a versão mais nova na rede.
  // Se falhar (offline), busca no cache.
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});