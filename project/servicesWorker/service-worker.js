// // service-worker.js
// const CACHE_NAME = 'demo-cache-v1';
// const urlsToCache = [
//   '/',
//   '/index.html'
// ];

// self.addEventListener('install', event => {
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(cache => {
//         return cache.addAll(urlsToCache);
//       })
//   );
// });

// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request)
//       .then(response => {
//         // Cache hit - return cached response
//         if (response) {
//           return response;
//         }

//         // Clone the request to make a network request
//         const fetchRequest = event.request.clone();

//         return fetch(fetchRequest).then(response => {
//           // Check if we received a valid response
//           if (!response || response.status !== 200 || response.type !== 'basic') {
//             return response;
//           }

//           // Clone the response to cache it
//           const responseToCache = response.clone();

//           caches.open(CACHE_NAME)
//             .then(cache => {
//               cache.put(event.request, responseToCache);
//             });

//           return response;
//         });
//       })
//   );
// });

const obb=()=>{
  console.log(this.a);
}
const obj ={
  a:10,
  b:function(){
    console.log(a)
  }
}

obb.b()