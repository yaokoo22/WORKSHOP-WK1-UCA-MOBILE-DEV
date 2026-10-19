self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/script.js',
        '/icon.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIF-KkDk_CmhO35Ig0KLzi0AFL2CJePLAv0CsCGFUvTI9odqOpovdxUr8&s=10'
      ]);
    })
  );
});
