document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.banner-content button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert(`Вы нажали кнопку: ${this.innerText}`);
        });
    });

    // Функция для анимации баннера
    function animateBanner() {
        const banner = document.querySelector('.banner');
        setInterval(() => {
            banner.style.transform = `translateY(${Math.sin(Date.now() / 100) * 2}px)`;
        }, 100);
    }

    animateBanner();

    // Добавление демо-игры при нажатии на кнопку
    document.querySelectorAll('.demo-bet').forEach(button => {
        button.addEventListener('click', function() {
            alert('Игра в демо-режиме запущена!');
        });
    });

    // Скрытие заголовка при прокрутке вниз и показ при прокрутке вверх
    let lastScrollTop = 0;
    const bannerContent = document.querySelector('.banner-content');
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        bannerContent.classList.toggle('hidden', scrollTop > lastScrollTop);
        lastScrollTop = scrollTop;
    });

    // Эффекты при наведении на картинки и текст
    const mediaElements = document.querySelectorAll('.media img, .media video, article h3, article p, article img, .comment, .comment h4, .offer, .offer h4, .game, .game h4');
    mediaElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.transform = 'scale(1.05)';
        });
        element.addEventListener('mouseout', () => {
            element.style.transform = 'scale(1)';
        });
    });

    // Адаптация для телефона
    if (window.innerWidth <= 768) {
        const navbar = document.querySelector('.navbar ul');
        navbar.style.flexDirection = 'column';
        navbar.style.gap = '5px';
    }
});
