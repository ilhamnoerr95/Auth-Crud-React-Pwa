const CACHE_NAME = "pwa-1";
const urlToCache = ["index.html", "offline"];

this.addEventListener("install", (event: any) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log("opened");
			return cache.addAll(urlToCache);
		})
	);
});

this.addEventListener("fetch", (event: any) => {
	event.respondWith(
		caches.match(event.request).then((res) => {
			return fetch(event.request).catch(() => caches.match("offline.html"));
		})
	);
});

this.addEventListener("activate", (event: any) => {
	const cacheWhiteList: any[] = [];
	cacheWhiteList.push(CACHE_NAME);

	event.waitUntil(
		caches.keys().then((cacheNames) =>
			Promise.all(
				cacheNames.map((cacheName) => {
					if (!cacheWhiteList.includes(cacheName)) {
						return caches.delete(cacheName);
					}
				})
			)
		)
	);
});
