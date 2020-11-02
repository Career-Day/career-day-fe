const CACHE_NAME = "version-1"
const urlsToCache = ['index.html', 'offline.html']

const self = this

//install SW
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)
     })
  )
})

// Listen for requests

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(cacheRes => {
      return cacheRes || fetch(event.request).then(fetchRes => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request.url, fetchRes.clone())
            return fetchRes
        })
      })
    }).catch(() => {
      if(event.request.url.indexOf('.html') > -1){
        return caches.match('offline.html')
      }
    })
  )
})

// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request)
//       .then(() => {
//         return fetch(event.request) 
//           .catch(() => caches.match('offline.html'))
//     })
//   )
// });

// self.addEventListener('fetch', function (event) {
//   event.respondWith(
//     // Try the cache
//     caches
//       .match(event.request)
//       .then(function (response) {
//         // Fall back to network
//         return response || fetch(event.request);
//       })
//       .catch(function () {
//         // If both fail, show a generic fallback:
//         return caches.match('/offline.html');
//         // However, in reality you'd have many different
//         // fallbacks, depending on URL and headers.
//         // Eg, a fallback silhouette image for avatars.
//       }),
//   );
// });

// Activate SW

self.addEventListener('activate', (event) => {
  const cacheWhiteList = []
  cacheWhiteList.push(CACHE_NAME)

  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => {
        if(!cacheWhiteList.includes(cacheName)) {
          return caches.delete(cacheName)
        }
      })
    ))
  )
})