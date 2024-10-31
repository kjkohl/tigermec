document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Handle form submissions
    document.getElementById('interestForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        console.log('Interest Form Data:', Object.fromEntries(formData)); // Replace with actual data handling
        this.reset(); // Reset the form after submission
    });

    document.getElementById('orderForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        console.log('Order Form Data:', Object.fromEntries(formData)); // Replace with actual data handling
        this.reset(); // Reset the form after submission
    });
});
