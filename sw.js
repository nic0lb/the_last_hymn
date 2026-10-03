/* Service Worker — Prova de Amor Maior (Nicolas Benicio)
   Offline completo: HTML, manifest e ícones são pré-cacheados; as fontes do Google entram no cache na primeira visita online.
   Ao publicar uma nova versão do jogo, aumente VERSION para invalidar o cache antigo. */
const VERSION = 'v1';
const PREFIX  = 'prova-de-amor-maior-';
const CACHE   = PREFIX + VERSION;
const CORE    = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];
const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith(PREFIX) && k !== CACHE).map(k => caches.delete(k))))  // só apaga caches deste jogo
      .then(() => self.clients.claim())
  );
});

/* Cache primeiro, com atualização em segundo plano (stale-while-revalidate). */
function swr(e, lookup) {
  const req = e.request;
  e.respondWith(caches.open(CACHE).then(async cache => {
    const hit = await cache.match(lookup || req, { ignoreSearch: true });
    const net = fetch(req).then(res => {
      if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
      return res;
    }).catch(() => null);
    e.waitUntil(net);
    if (hit) return hit;
    const res = await net;
    if (res) return res;
    if (req.mode === 'navigate') return (await cache.match('./index.html')) || new Response('Offline', { status: 503 });
    return Response.error();
  }));
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (req.mode === 'navigate') return swr(e, './index.html');
  if (url.origin === self.location.origin || FONT_HOSTS.includes(url.hostname)) return swr(e);
});
