// A Service Worker is a set of code that runs in the background and 
// allows secondary actions to be performed with the running application. 
// In this case we manage the caching of the application and its update 
// through a Service Worker located in 'src/sw.ts'.

import { precacheAndRoute } from 'workbox-precaching'

declare let self: ServiceWorkerGlobalScope

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting()
})
// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST)