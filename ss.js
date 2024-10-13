const sky = document.querySelector('.sky');

function createStars(count) {
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        const top = Math.random() * 100;
        const left = Math.random() * 100;

        star.style.top = `${top}%`;
        star.style.left = `${left}%`;

        sky.appendChild(star);
    }
}

createStars(100);

function createFallingStar() {
    const star = document.createElement('div');
    star.classList.add('starFall');

    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.top = Math.random() * (window.innerHeight / 2) + 'px';

    document.body.appendChild(star);
    setTimeout(() => {
        star.remove();
    }, 5000);
}

function generateStars() {
    setInterval(createFallingStar, 5000);
}

window.onload = generateStars;