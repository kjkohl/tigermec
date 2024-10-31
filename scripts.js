// Smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        
        // Scroll to the section
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('interestForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    sendEmail(formData);
});

document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    sendEmail(formData);
});

// Simulated email sending function (replace with actual service)
function sendEmail(formData) {
    alert("Your form has been submitted!");
    // Here you can implement the actual email sending logic using a backend service or API
    // e.g., using Fetch API to send formData to your server
    this.reset(); // Reset the form after submission
}
