function updateContent() {
    document.querySelector('.container-2--title').innerText = products[indexActualProject].title;

    document.querySelector('.container-2--paragraph').innerHTML = products[indexActualProject].desc;

    document.querySelector('.container-1--img').src = products[indexActualProject].img;
}

let indexActualProject = 0;
let products = [
    {
        id: 0,
        title: 'Discover innovative ways to decorate',
        desc: 'We provide unmatched quality, comfort, and style for property owners across the country.<br>Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
        img: 'IMAGES/desktop-image-hero-1.jpg'
    },
    {
        id: 1,
        title: 'We are available all across the globe',
        desc: 'With stores all over the world, it\'s easy for you to find furniture for your home or place of business.<br>Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today.',
        img: 'IMAGES/desktop-image-hero-2.jpg'
    },
    {
        id: 3,
        title: 'Manufactured with the best materials',
        desc: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
        img: 'IMAGES/desktop-image-hero-3.jpg'
    }
];


document.querySelector('.controller-left').addEventListener('click', (e) => {
    indexActualProject -= 1;

    if (indexActualProject < 0) {
        indexActualProject = products.length;
    }

    updateContent();
});

document.querySelector('.controller-right').addEventListener('click', (e) => {
    indexActualProject += 1;

    if (indexActualProject >= products.length) {
        indexActualProject = 0;
    }

    updateContent();
});


