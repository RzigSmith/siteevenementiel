document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousel functionality
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        let currentIndex = 0;
        const items = carousel.querySelectorAll('.carousel-item');
        const totalItems = items.length;

        function showItem(index) {
            items.forEach((item, i) => {
                item.style.display = (i === index) ? 'block' : 'none';
            });
        }

        function nextItem() {
            currentIndex = (currentIndex + 1) % totalItems;
            showItem(currentIndex);
        }

        // Set an interval for the carousel to auto-advance
        setInterval(nextItem, 3000); // Change item every 3 seconds
        showItem(currentIndex);
    }

    // Counter functionality
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = target / 200; // Adjust the speed of the counter

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});