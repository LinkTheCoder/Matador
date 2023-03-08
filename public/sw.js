var CACHE_STATIC_NAME = 'static-v1.0.1';
var CACHE_DYNAMIC_NAME ='dynamic-v1.0.1';

self.addEventListener('install', function(event){
    console.log('[Service Worker] Install Service Worker', event);
    event.waitUntil(
        caches.open(CACHE_STATIC_NAME)
        .then(function(cache){
            console.log('[Service Worker] Precach AppShell');
            cache.addAll([
                '/',
                'index.html',
                'regsw.js',
                '/App.jsx',
                '/index.css',
                './src/components/CardPWA.jsx',
                './components/Dinner.jsx',
                './components/FindUs.jsx',
                './components/Footer.jsx',
                './components/Hero.jsx',
                './components/Lunch.jsx',
                './components/Navbar.jsx',
                './data/data.js',
                'index.html',
                'images/Azteka.jpg',
                'images/BarnPizza.jpg',
                'images/Bolognese.jpg',
                'images/Calzone.jpg',
                'images/Falafel.jpg',
                'images/HeroImage.jpg',
                'images/Husmakost.jpg',
                'images/Italy.jpg',
                'images/Kebab.jpg',
                'images/KebabLunch.jpg',
                'images/Margherita.jpg',
                'images/NewYork.jpg',
                'images/Romana.jpg',
                'images/Sallad.jpg',
                'images/SalladTallrik.jpg',
                'images/Skrovmal.jpg',
                'images/Svamp.jpg'
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