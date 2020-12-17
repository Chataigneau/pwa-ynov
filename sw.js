const CACHE = "v1";

this.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE).then(function (cache) {
            return cache.addAll([
                "/",
                "/index.html",
                "/favicon.ico",
                "/styles/",
                "/styles/style.css",
                "/scripts/",
                "/scripts/app.js",
                "/scripts/image.js",
                "/assets/",
                "/assets/icons/",
                "/assets/icons/icon48.png",
                "/assets/icons/icon72.png",
                "/assets/icons/icon96.png",
                "/assets/icons/icon144.png",
                "/assets/icons/icon168.png",
                "/assets/icons/icon192.png",
                "/assets/imgs/",
                "/assets/imgs/bordmer.jpg",
                "/assets/imgs/ecluse.jpg",
                "/assets/imgs/monte_perdido.jpg",
                "/assets/imgs/pc.jpg",
                "/assets/imgs/plaine.jpg",
                "/assets/imgs/port.jpg",
                "/assets/imgs/imageDictionnary.js",
                "/assets/imgs/tiny/",
                "/assets/imgs/tiny/bordmer.jpg",
                "/assets/imgs/tiny/ecluse.jpg",
                "/assets/imgs/tiny/monte_perdido.jpg",
                "/assets/imgs/tiny/pc.jpg",
                "/assets/imgs/tiny/plaine.jpg",
                "/assets/imgs/tiny/port.jpg",
                "/assets/imgs/tiny/tinyImageDictionnary.js",
            ]);
        })
    );
});
