// Animasi sederhana saat scroll atau efek interaktif bisa ditambahkan di sini
console.log("Portofolio berhasil dimuat!");

// Contoh: Navbar berubah warna sedikit saat di-scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.9)';
    }
});
