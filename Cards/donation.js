document.getElementById('shareBtn1').onclick = function() {
    document.getElementById('shareModal').style.display = 'block'; // Show the modal
};
document.getElementById('shareBtn2').onclick = function() {
    document.getElementById('shareModal').style.display = 'block'; // Show the modal
};
document.getElementById('shareBtn3').onclick = function() {
    document.getElementById('shareModal').style.display = 'block'; // Show the modal
};
document.getElementById('shareBtn4').onclick = function() {
    document.getElementById('shareModal').style.display = 'block'; // Show the modal
};
document.getElementById('shareBtn5').onclick = function() {
    document.getElementById('shareModal').style.display = 'block'; // Show the modal
};
document.getElementById('shareBtn6').onclick = function() {
    document.getElementById('shareModal').style.display = 'block'; // Show the modal
};

document.getElementById('closeModal').onclick = function() {
    document.getElementById('shareModal').style.display = 'none'; // Close the modal
};

document.getElementById('instagramShare').onclick = function() {
    window.open('https://www.instagram.com/'); // Redirect to Instagram Story
    document.getElementById('shareModal').style.display = 'none'; // Close the modal
};

document.getElementById('facebookShare').onclick = function() {
    window.open('https://www.facebook.com/compose/post'
    ); // Redirect to Facebook Story
    document.getElementById('shareModal').style.display = 'none'; // Close the modal
};

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('shareModal')) {
        document.getElementById('shareModal').style.display = 'none'; // Close modal if clicked outside
    }
};

// Function to open payment.html
function openPaymentPage() {
    window.location.href = 'payment.html';
}

// Add event listeners for donate buttons
document.getElementById('donateBtn1').addEventListener('click', openPaymentPage);
document.getElementById('donateBtn2').addEventListener('click', openPaymentPage);
document.getElementById('donateBtn3').addEventListener('click', openPaymentPage);
document.getElementById('donateBtn4').addEventListener('click', openPaymentPage);
document.getElementById('donateBtn5').addEventListener('click', openPaymentPage);
document.getElementById('donateBtn6').addEventListener('click', openPaymentPage);
