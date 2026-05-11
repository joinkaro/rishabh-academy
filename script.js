document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.getElementById('registerBtn');
    const modal = document.getElementById('registrationModal');
    const closeBtn = document.getElementById('closeModalBtn');
    const form = document.getElementById('registrationForm');

    // Open Modal
    registerBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });

    // Close Modal
    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Close Modal on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    // Handle Form Submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('fullName').value;
        const mobile = document.getElementById('mobileNumber').value;
        
        if(name && mobile) {
            // Optional: You could save to local storage or an API here.
            
            // Redirect to WhatsApp or show success
            const waText = encodeURIComponent(`Hi, I'm ${name} and my number is ${mobile}. I want to register for the Sniper Pro Indicator Workshop.`);
            const waNumber = '919876543210'; // Update with real number if needed
            
            // Simulating redirect for user feedback
            registerBtn.innerHTML = '<span>Redirecting...</span>';
            setTimeout(() => {
                window.location.href = `https://wa.me/${waNumber}?text=${waText}`;
            }, 1000);
        }
    });
});
