document.addEventListener('DOMContentLoaded', () => {
    // Number Animation for Statistics
    const circles = document.querySelectorAll('.circle');
    if (circles.length > 0) {
        circles.forEach(circle => {
            const percent = circle.getAttribute('data-percent');
            const number = circle.querySelector('.number');
            let count = 0;
            
            const interval = setInterval(() => {
                if (count >= percent) {
                    clearInterval(interval);
                } else {
                    count++;
                    number.textContent = count;
                    circle.style.setProperty('--percent', `${count}%`);
                }
            }, 20);
        });
    }

    // Animation Setup for Cards
    const animateElements = {
        reviewCards: document.querySelectorAll('.review-card'),
        locationItems: document.querySelectorAll('.location-item')
    };

    // Set index custom property
    Object.entries(animateElements).forEach(([key, elements]) => {
        if (elements.length > 0) {
            elements.forEach((element, index) => {
                element.style.setProperty('--index', index);
            });
        }
    });

    // Single Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-card');
            }
        });
    }, { threshold: 0.1 });

    // Observe all elements
    Object.values(animateElements).forEach(elements => {
        if (elements.length > 0) {
            elements.forEach(element => observer.observe(element));
        }
    });
});