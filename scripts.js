document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm');
    const interestForm = document.getElementById('interestForm');
    const SHEET_URL = 'https://script.google.com/macros/s/AKfycbw9EzutFhLNPXFj33sYo9a_2KwJOPBGXz34I-9L-mdKWdfCsOOetg2NoRskR8ydLdP3/exec'; // Replace with your Google Sheets Web App URL

    // Submit Order Form
    orderForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
        const formData = new FormData(orderForm); // Get form data
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            item: formData.get('item'),
            dimensions: formData.get('dimensions'),
            specialInstructions: formData.get('specialInstructions'),
        };

        sendData(data, SHEET_URL); // Send data to Google Sheets
        orderForm.reset(); // Reset form fields
    });

    // Submit Interest Form
    interestForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
        const formData = new FormData(interestForm); // Get form data
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
        };

        sendData(data, SHEET_URL); // Send data to Google Sheets
        interestForm.reset(); // Reset form fields
    });

    // Function to send data to Google Sheets
    function sendData(data, url) {
        fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(data),
        })
        .then(response => console.log('Success:', response))
        .catch((error) => console.error('Error:', error));
    }

    // Fade-in effect for sections
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add('active');
            }
        });
    });
});
