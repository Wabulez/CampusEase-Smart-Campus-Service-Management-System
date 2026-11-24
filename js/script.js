document.addEventListener('DOMContentLoaded', () => {
    
    // --- Elements ---
    const themeToggle = document.getElementById('theme-toggle');
    const burgerBtn = document.getElementById('burger-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    // --- Automatic Active Sidebar Link Highlighting ---
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        const parentLi = link.parentElement;
        if (linkPage === currentPage) {
            parentLi.classList.add('active');
        } else {
            parentLi.classList.remove('active');
        }
    });

    // --- Login and Signup page logic ---
    if (signUpButton && container) {
        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });
    }
    if (signInButton && container) {
        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    }
    
    // --- Theme Persistence Logic ---
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        if (themeToggle) themeToggle.checked = true;
    }

    if (themeToggle) {
        themeToggle.addEventListener('change', function() {
            if (this.checked) {
                document.body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // --- Sidebar Toggle Logic ---
    if (burgerBtn && sidebar && overlay) {
        burgerBtn.addEventListener('click', () => {
            if (window.innerWidth <= 900) {
                sidebar.classList.toggle('mobile-open');
                overlay.classList.toggle('active');
            } else {
                sidebar.classList.toggle('collapsed');
            }
        });
    }

    if (overlay && sidebar) {
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('mobile-open');
            overlay.classList.remove('active');
        });
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) {
            if (sidebar) sidebar.classList.remove('mobile-open');
            if (overlay) overlay.classList.remove('active');
        } else {
            if (sidebar) sidebar.classList.remove('collapsed');
        }
    });

    // --- Star Rating HCI Feedback Logic ---
    const stars = document.querySelectorAll('.star-rating i');
    if (stars.length > 0) {
        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                const parentBox = star.parentElement;
                const siblings = parentBox.querySelectorAll('i');
                siblings.forEach((s, i) => {
                    if (i <= index) {
                        s.classList.remove('fa-regular');
                        s.classList.add('fa-solid', 'active');
                    } else {
                        s.classList.remove('fa-solid', 'active');
                        s.classList.add('fa-regular');
                    }
                });
            });
        });
    }
});

function openTermsModal() {
        document.getElementById('terms-modal').style.display = 'flex';
    }

    function closeTermsModal() {
        document.getElementById('terms-modal').style.display = 'none';
    }

    function acceptTermsAndClose() {
        const checkbox = document.getElementById('terms-checkbox');
        if (checkbox) {
            checkbox.checked = true;
        }
        closeTermsModal();
    }

    function handleSignUp() {
        const checkbox = document.getElementById('terms-checkbox');
        if (checkbox && checkbox.checked) {
            window.location.href = 'index.html';
        } else {
            alert('Please accept the Terms and Conditions to proceed.');
        }
    }

    // Auto-check if returning from standalone terms page
    window.addEventListener('DOMContentLoaded', () => {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('acceptTerms') === 'true') {
            const checkbox = document.getElementById('terms-checkbox');
            if (checkbox) checkbox.checked = true;
            // Activate sign-up panel view if needed
            const container = document.getElementById('container');
            if (container) container.classList.add('right-panel-active');
        }
    });