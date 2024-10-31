document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
            } else {
                const id = entry.target.getAttribute('id');
                document.querySelector(`nav a[href="#${id}"]`).classList.remove('active');
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    sections.forEach(section => {
        observer.observe(section);
    });
});

document.getElementById('interestForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        phone: formData.get('phone')
    };

    // Send data to Google Apps Script (replace with your actual URL)
    fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.result === 'success') {
            alert('Interest submitted successfully!');
            document.getElementById('interestForm').reset(); // Reset the form after submission
        } else {
            alert('There was a problem submitting your interest. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your interest. Please try again.');
    });
});

// Order Form Submission
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        item: formData.get('item'),
        dimensions: formData.get('dimensions'),
        specialInstructions: formData.get('specialInstructions')
    };

    // Send data to Google Apps Script (replace with your actual URL)
    fetch('https://script.google.com/macros/s/AKfycbw9EzutFhLNPXFj33sYo9a_2KwJOPBGXz34I-9L-mdKWdfCsOOetg2NoRskR8ydLdP3/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.result === 'success') {
            alert('Order submitted successfully!');
            document.getElementById('orderForm').reset(); // Reset the form after submission
        } else {
            alert('There was a problem submitting your order. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your order. Please try again.');
    });
});
