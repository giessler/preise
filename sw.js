var C='preise-v4',F=['./','index.html','zxing.min.js','manifest.webmanifest','icon.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){if(new URL(e.request.url).origin!==location.origin)return;e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(function(r){return r||fetch(e.request)}))});
