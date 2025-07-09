self.addEventListener('install', function(event) {
  console.log('Service Worker: Terinstal');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
