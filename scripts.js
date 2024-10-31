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

    // Handle interest form submission
    document.getElementById('interestForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        const formData = {
            name: this.name.value,
            email: this.email.value,
            phone: this.phone.value,
            message: this.message.value,
        };

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbypslClUHjD4Utg6kZ4QaU7Z7-5OfVfOrk_eUdQbo4KUQ02Qmy_8EWyKomg_llRnmX_/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (result.result === "Success") {
                alert('Interest form submitted successfully!');
                this.reset(); // Reset the form after submission
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error submitting your interest form. Please try again.');
        }
    });

    // Handle order form submission
    document.getElementById('orderForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        const formData = {
            name: this.name.value,
            email: this.email.value,
            phone: this.phone.value,
            item: this.item.value,
            dimensions: this.dimensions.value,
            specialInstructions: this.specialInstructions.value,
        };

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbypslClUHjD4Utg6kZ4QaU7Z7-5OfVfOrk_eUdQbo4KUQ02Qmy_8EWyKomg_llRnmX_/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (result.result === "Success") {
                alert('Order submitted successfully!');
                this.reset(); // Reset the form after submission
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error submitting your order. Please try again.');
        }
    });
});
