// 服務工作者 (Service Worker) - PWA 核心
// 這個檔案主要用來讓瀏覽器判斷網站是否可安裝 (Installable)
// 註冊一個空的 fetch 事件，讓瀏覽器認為網站具備離線能力。
self.addEventListener('fetch', function(event) {
// 由於我們是 Firebase 雲端 App，這裡不實作複雜的快取邏輯，
// 僅確保 service worker 啟動。
});
// 安裝事件
self.addEventListener('install', function(event) {
self.skipWaiting();
console.log('Service Worker: 安裝完成');
});
// 啟動事件
self.addEventListener('activate', function(event) {
console.log('Service Worker: 啟動成功');
});
