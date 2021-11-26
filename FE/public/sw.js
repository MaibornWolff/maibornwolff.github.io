let CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = ['/'];
self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
self.onfetch = function (event) {
    event.respondWith(
        (async function () {
            var cache = await caches.open(cacheName);
            var cachedFiles = await cache.match(event.request);
            if (cachedFiles) {
                return cachedFiles;
            } else {
                try {
                    var response = await fetch(event.request);
                    await cache.put(event.request, response.clone());
                    return response;
                } catch (e) {}
            }
        })()
    );
};
