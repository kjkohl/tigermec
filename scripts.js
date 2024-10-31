// Smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        
        // Add active class for animation
        targetSection.classList.add('active');
        
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle form submissions
document.getElementById('interestForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    sendForm(formData);
});

document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    sendForm(formData);
});

// Simulated form submission (to Google Sheets or similar)
function sendForm(formData) {
    alert("Your form has been submitted!"); // Placeholder for actual submission
    this.reset(); // Reset the form after submission
}
