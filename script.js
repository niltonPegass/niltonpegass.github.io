const navbar = document.querySelector('.navbar');
const revealElements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

if ('IntersectionObserver' in window) {
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach((element) => revealOnScroll.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add('active'));
}

window.addEventListener('load', () => {
    document.querySelectorAll('#hero .reveal').forEach((element) => {
        element.classList.add('active');
    });
});
