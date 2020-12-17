self.addEventListener("install", e => {
    e.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll(['./', "./bat.obj","./p5s/p5.js", "./p5s/p5.dom.js", "./p5s/p5.sound.js", "./sketch4.js","./src/main.css", "./images/logo192.png", "./images/logo512.png"]);
        })
    );
    console.log("installed");
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});