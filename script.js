// ===================================
// Butter & Bloom - Interactive Features
// ===================================

// Loading Animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1000);
});

// ===================================
// Navigation
// ===================================

const navbar = document.querySelector('.navbar');
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

// Sticky navbar on scroll
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Mobile menu toggle
if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Animate hamburger icon
        const spans = mobileToggle.querySelectorAll('span');
        spans[0].style.transform = navMenu.classList.contains('active')
            ? 'rotate(45deg) translateY(8px)'
            : 'rotate(0) translateY(0)';
        spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = navMenu.classList.contains('active')
            ? 'rotate(-45deg) translateY(-8px)'
            : 'rotate(0) translateY(0)';
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            const spans = mobileToggle.querySelectorAll('span');
            spans[0].style.transform = 'rotate(0) translateY(0)';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'rotate(0) translateY(0)';
        }
    });
});

// ===================================
// Menu Page - Product Filtering
// ===================================

const categoryButtons = document.querySelectorAll('.category-btn');
const productCards = document.querySelectorAll('.product-card');

if (categoryButtons.length > 0) {
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            const category = button.getAttribute('data-category');

            // Filter products
            productCards.forEach(card => {
                const cardCategories = card.getAttribute('data-category');

                if (category === 'all' || cardCategories.includes(category)) {
                    card.style.display = 'flex';
                    card.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ===================================
// Menu Search Functionality
// ===================================

const menuSearch = document.getElementById('menuSearch');

if (menuSearch) {
    menuSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        productCards.forEach(card => {
            const productName = card.querySelector('.product-name').textContent.toLowerCase();
            const productDescription = card.querySelector('.product-description').textContent.toLowerCase();

            if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
                card.style.display = 'flex';
                card.style.animation = 'fadeIn 0.5s ease-in';
            } else {
                card.style.display = 'none';
            }
        });

        // If search is empty, show all products or filtered category
        if (searchTerm === '') {
            const activeCategory = document.querySelector('.category-btn.active');
            if (activeCategory) {
                activeCategory.click();
            }
        }
    });
}

// ===================================
// Add to Cart Functionality
// ===================================

const addToCartButtons = document.querySelectorAll('.add-to-cart');
let cart = JSON.parse(localStorage.getItem('butterBloomCart')) || [];

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productCard = e.target.closest('.product-card');
        const productName = productCard.querySelector('.product-name').textContent;
        const productPrice = productCard.querySelector('.product-price').textContent;
        const productWeight = productCard.querySelector('.product-weight').textContent;

        // Add to cart
        const cartItem = {
            name: productName,
            price: productPrice,
            weight: productWeight,
            quantity: 1
        };

        // Check if item already exists in cart
        const existingItemIndex = cart.findIndex(item => item.name === productName);

        if (existingItemIndex !== -1) {
            cart[existingItemIndex].quantity += 1;
        } else {
            cart.push(cartItem);
        }

        // Save to localStorage
        localStorage.setItem('butterBloomCart', JSON.stringify(cart));

        // Visual feedback
        button.textContent = 'Added! ✓';
        button.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';

        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.style.background = 'var(--gradient-peach)';
        }, 2000);

        // Show notification
        showNotification(`${productName} added to cart!`);
    });
});

// ===================================
// Notification System
// ===================================

function showNotification(message) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 50px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInRight 0.5s ease-out;
        font-weight: 600;
    `;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-out';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// ===================================
// Contact Form Handling
// ===================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formMessage = document.getElementById('formMessage');
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Simulate form submission
        formMessage.style.display = 'block';
        formMessage.style.background = 'linear-gradient(135deg, #E8B4A0 0%, #D89580 100%)';
        formMessage.style.color = 'white';
        formMessage.innerHTML = `
            <strong>Thank you, ${name}!</strong><br>
            We've received your message and will get back to you within 24 hours.
        `;

        // Reset form
        contactForm.reset();

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);

        // In a real application, you would send this data to a server
        console.log('Form Data:', { name, email, phone, subject, message });
    });
}

// ===================================
// Scroll Animations
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
const animateOnScroll = document.querySelectorAll('.feature-card, .product-card, .review-card, .gallery-item');
animateOnScroll.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// Smooth Scroll for Anchor Links
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// Search Bar Focus Effect
// ===================================

const searchBars = document.querySelectorAll('.search-bar');
searchBars.forEach(searchBar => {
    searchBar.addEventListener('focus', function () {
        this.parentElement.style.transform = 'scale(1.05)';
    });

    searchBar.addEventListener('blur', function () {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// ===================================
// Image Lazy Loading Enhancement
// ===================================

if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===================================
// Gallery Image Click - Full View
// ===================================

const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('.gallery-image');
        const title = item.querySelector('.gallery-title');

        // Create modal
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.95);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            cursor: pointer;
            animation: fadeIn 0.3s ease;
        `;

        const modalImg = document.createElement('img');
        modalImg.src = img.src;
        modalImg.style.cssText = `
            max-width: 90%;
            max-height: 80%;
            border-radius: 10px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.5);
        `;

        const modalTitle = document.createElement('h3');
        if (title) {
            modalTitle.textContent = title.textContent;
            modalTitle.style.cssText = `
                color: white;
                margin-top: 1rem;
                font-size: 1.5rem;
            `;
        }

        const closeBtn = document.createElement('div');
        closeBtn.innerHTML = '×';
        closeBtn.style.cssText = `
            position: absolute;
            top: 20px;
            right: 30px;
            color: white;
            font-size: 3rem;
            cursor: pointer;
            transition: 0.3s;
        `;

        modal.appendChild(modalImg);
        if (title) modal.appendChild(modalTitle);
        modal.appendChild(closeBtn);
        document.body.appendChild(modal);

        // Close modal on click
        modal.addEventListener('click', () => {
            modal.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => modal.remove(), 300);
        });
    });
});

// ===================================
// Console Welcome Message
// ===================================

console.log('%c🥖 Welcome to Butter & Bloom! 🥖', 'font-size: 20px; color: #E8B4A0; font-weight: bold;');
console.log('%cHandcrafted with love and JavaScript 💛', 'font-size: 14px; color: #3d2317;');
