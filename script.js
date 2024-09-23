// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}
// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}

// Scroll Reveal
const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});


sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200
})
document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkmode');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Cart Dropdown Toggle
    const cartIcon = document.getElementById('cart-icon');
    const cartDropdown = document.getElementById('cart-dropdown');
    cartIcon.addEventListener('click', () => {
        cartDropdown.classList.toggle('show');
    });

    // Sample Cart Item Addition (Replace with dynamic cart management)
    const cartItems = document.getElementById('cart-items');
    function addToCart(itemName) {
        const li = document.createElement('li');
        li.textContent = itemName;
        cartItems.appendChild(li);
    }

    // Login/Signup Links (For demonstration purposes)
    const loginLink = document.getElementById('login-link');
    const signupLink = document.getElementById('signup-link');

    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Login functionality to be implemented');
    });

    signupLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Signup functionality to be implemented');
    });

    // Show cart dropdown when clicked
    cartDropdown.classList.add('show'); // For demonstration; remove this line in production
});

// Function to toggle dark/light mode
function toggleDarkMode() {
    const body = document.body;
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
}

// Add event listener to a button or switch for toggling dark mode
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);




