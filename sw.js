self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // Estratégia básica de bypass para o Turso funcionar online
  e.respondWith(
    fetch(e.request).catch(() => {
      return new Response('Offline');
    })
  );
});