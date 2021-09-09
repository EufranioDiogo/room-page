const hamburgerAndCloseButton = document.querySelector('.hamburger-and-close-button');
let flagMenuOpen = false;

hamburgerAndCloseButton.addEventListener('click', (e) => {
    flagMenuOpen = !flagMenuOpen;

    if (flagMenuOpen) {
        document.querySelector('.header--menu').style.opacity = '1';
        hamburgerAndCloseButton.src = 'IMAGES/icon-close.svg';
    } else {
        document.querySelector('.header--menu').style.opacity = '0';
        hamburgerAndCloseButton.src = 'IMAGES/icon-hamburger.svg';
    }
})