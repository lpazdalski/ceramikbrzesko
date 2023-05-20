const header = document.querySelector('header');
const hero = document.querySelector('.hero');

const heroOptions = {
    rootMargin: "-90% 0px 0px 0px"
};

const heroObserver = new IntersectionObserver(function(entries, heroObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add('nav-scrolled');
        }
        else {
            header.classList.remove('nav-scrolled');
        }
    })
}, heroOptions);

heroObserver.observe(hero);
