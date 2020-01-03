const VERSION = 'v1'

self.addEventListener('install', event => {
  event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
  const request = event.request
  // get
  if (request.method !== 'GET') {
    return;
  }

  // search in cache
  event.respondWith(cachedResponse(request))

  // update cache
  event.respondWith(updateCache(request))
})

async function precache() {
  const cache = await caches.open(VERSION)
  return cache.addAll([
    // '/',
    // '/index.html',
    // '/assets/index.js',
    // '/assets/index.css',
    // '/assets/mediaPlayer.js',
    // '/assets/BigBuckBunny.mp4',
    // '/assets/plugins/autoplay.js',
    // '/assets/plugins/autoPause.js',
  ])
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION)
  const response = await cache.match(request)
  return response || fetch(request)
}

async function updateCache(request) {
  const cache = await caches.open(VERSION)
  const response = await fetch(request)
  return cache.put(request, response)
}
