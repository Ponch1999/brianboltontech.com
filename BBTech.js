// Get the modal and the button
const modal = document.getElementById('contactModal');
const contactButton = document.getElementById('contactButton');
const closeModal = document.getElementById('closeModal');

// Open the modal when the Contact button is clicked
contactButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close the modal when the close button is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
