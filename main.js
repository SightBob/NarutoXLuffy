const imgLogo = document.getElementById('img-logo');
const maxScroll = document.documentElement.scrollHeight / 5;
const maxWidth = 300;
const minWidth = 160;

function resizeLogo() {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 640) {
        imgLogo.style.width = '120px';
    } else if (windowWidth <= 1024) {
        imgLogo.style.width = '180px';
    } else {
        const scrollPercentage = window.scrollY / maxScroll;
        const size = maxWidth - (scrollPercentage * (maxWidth - minWidth));
        imgLogo.style.width = `${Math.max(Math.min(size, maxWidth), minWidth)}px`;
    }
}

window.addEventListener('scroll', resizeLogo);
window.addEventListener('resize', resizeLogo);

// Initial call to set correct size on page load
resizeLogo();

window.addEventListener('resize', 
    AOS.init({
        once: true, // Animation happens only once
      })
);
// INITIALIZE AOS


const nav_menu = document.getElementById('nav-menu');
const nav_toggle = document.getElementById('nav-toggle');
const body = document.getElementById('id-body');


if(nav_toggle){
    nav_toggle.addEventListener('click', () => {
        nav_menu.classList.toggle('active');
        body.classList.toggle('overflow-hidden');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const sections = [
        { page: 'about-page', naruto: 'naruto-about' },
        { page: 'comics-page', naruto: 'naruto-comic' },
        { page: 'anime-page', naruto: 'naruto-anime' },
        { page: 'related-page', naruto: 'naruto-related' },
        { page: 'social-page', naruto: 'naruto-social' },
        { page: 'banner-page', naruto: 'naruto-banner' }
    ].map(section => ({
        page: document.getElementById(section.page),
        naruto: document.getElementById(section.naruto)
    }));

    function checkScroll() {
        if (window.innerWidth < 640) {
            return;
        }

        let activeIndex = -1;

        sections.forEach((section, index) => {
            const position = section.page.getBoundingClientRect();
            if (position.top < 0) {
                activeIndex = index;
            }
        });

        sections.forEach((section, index) => {
            if (index === activeIndex) {
                section.naruto.querySelector('img').classList.add('show-image');
            } else {
                section.naruto.querySelector('img').classList.remove('show-image');
            }
        });
    }

    function checkScreenSize() {
        if (window.innerWidth > 640) {
            window.addEventListener('scroll', checkScroll);
        } else {
            window.removeEventListener('scroll', checkScroll);
        }
    }

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
});


