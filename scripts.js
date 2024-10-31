// Initialize EmailJS with your user ID
(function() {
    emailjs.init('mNyyJ122SS3dJ1aHl'); // Replace with your actual EmailJS user ID
})();

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for animating sections as they come into view
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

    // Common function to run after successful submission
    function handleSubmissionSuccess(formType) {
        alert(`${formType} submitted successfully!`);
        console.log(`${formType} data sent to EmailJS`);
    }

    // Handle interest form submission
    document.getElementById('interestForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
        };

        try {
            await emailjs.send('service_3crc41y', 'template_m3536ow', data, 'mNyyJ122SS3dJ1aHl');
            handleSubmissionSuccess('Interest Form');
            this.reset(); // Reset the form after submission
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error submitting your interest form. Please try again.');
        }
    });

    // Handle order form submission
    document.getElementById('orderForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            item: formData.get('item'),
            dimensions: formData.get('dimensions'),
            specialInstructions: formData.get('specialInstructions'),
        };

        try {
            await emailjs.send('service_3crc41y', 'template_m3536ow', data, 'mNyyJ122SS3dJ1aHl');
            handleSubmissionSuccess('Order Form');
            this.reset(); // Reset the form after submission
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error submitting your order. Please try again.');
        }
    });
});
