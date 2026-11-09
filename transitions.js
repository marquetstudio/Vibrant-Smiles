// Smooth Transitions and Component Loader for Vibrant Smiles

document.addEventListener('DOMContentLoaded', () => {
    // Reveal page smoothly
    requestAnimationFrame(() => {
        document.body.classList.add('page-loaded');
    });

    // Image smooth load handler
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => img.classList.add('loaded'));
        }
    });

    // IntersectionObserver for smooth scroll-triggered component reveals
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Once revealed, unobserve to free resources
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    } else {
        // Fallback for older browsers
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
    }
});

