document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        item: formData.get('item'),
        dimensions: formData.get('dimensions'),
        specialInstructions: formData.get('specialInstructions')
    };

    // Send data to Google Apps Script
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
