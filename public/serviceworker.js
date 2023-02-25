var CACHE_STATIC_NAME = 'static';
var CACHE_DYNAMIC_NAME ='dynamic';

self.addEventListener('install', function(event){
    console.log('[Service Worker] Install Service Worker', event);
    event.waitUntil(
        caches.open(CACHE_STATIC_NAME)
        .then(function(cache){
            console.log('[Service Worker] Precach AppShell');
            cache.addAll([
                '/',
                'index.html',
                'js/app.js',
                'index.css',
            ]);
        })
    );
});

self.addEventListener('activate', function(event){
    console.log('[Service Worker] Activate Service Worker', event);
    event.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME){
                    console.log('[Service Worker] Delete old caches', key);
                    caches.delete(key);
                }
            }));
        })
    );
});

self.addEventListener('fetch', function(event){
    //console.log('[Service Worker] Hämtar något med fetch', event);
    event.respondWith(async function() {
        const cachedResponse = await caches.match(event.request);
        if(cachedResponse) return cachedResponse;
        return fetch(event.request)
        .then(function(res) {
            return caches.open(CACHE_DYNAMIC_NAME)
            .then(function(cache) {
                cache.put(event.request.url, res.clone());
                return res;
            });
        })
        .catch(function(error){

        });
    }());
});