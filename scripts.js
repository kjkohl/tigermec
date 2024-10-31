document.addEventListener('DOMContentLoaded', () => {
    const interestForm = document.getElementById('interestForm');
    const orderForm = document.getElementById('orderForm');

    // Change this to your Google Sheets Web App URL
    const SHEET_URL = 'YOUR_GOOGLE_SHEET_WEB_APP_URL';

    // Handle the interest form submission
    interestForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(interestForm);
        const data = {
            timestamp: new Date().toLocaleString(), // Timestamp of submission
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            item: '', // No item for interest form
            dimensions: '', // No dimensions for interest form
            specialInstructions: '', // No special instructions for interest form
        };
        sendData(data, SHEET_URL);
        interestForm.reset();
    });

    // Handle the order form submission
    orderForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(orderForm);
        const data = {
            timestamp: new Date().toLocaleString(), // Timestamp of submission
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            item: formData.get('item'),
            dimensions: formData.get('dimensions'),
            specialInstructions: formData.get('specialInstructions'),
        };
        sendData(data, SHEET_URL);
        orderForm.reset();
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
});
