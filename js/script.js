// 圖片輪播
var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: { delay: 3000 },
    pagination: { el: ".swiper-pagination" },
});

// 倒數計時
function updateCountdown() {
    const weddingDate = new Date("2026-01-17T00:00:00");
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerText = "婚禮進行中 🎉";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerText =
        `倒數 ${days} 天 ${hours} 小時 ${minutes} 分 ${seconds} 秒`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
