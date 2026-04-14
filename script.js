document.addEventListener("DOMContentLoaded", () => {
    // Load the header
    fetch("header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Header not found");
            }
            return response.text();
        })
        .then(data => {
            const headerEl = document.querySelector("header");
            headerEl.innerHTML = data;
            headerEl.classList.add('loaded');

            // Active nav — must run AFTER header HTML is inserted
            const currentPage = location.pathname.split('/').pop() || 'index.html';
            document.querySelectorAll('.nav-links a').forEach(link => {
                const href = link.getAttribute('href');
                if (href === currentPage) {
                    link.classList.add('active');
                }
                if (href === 'professional-profile.html' &&
                    (currentPage === 'cv.html' || currentPage === 'education.html')) {
                    link.classList.add('active');
                }
            });

            // Mobile nav toggle
            initNavToggle();

            // Dark mode toggle
            initThemeToggle();
        })
        .catch(error => console.error(error));

    // Load the footer
    fetch("footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Footer not found");
            }
            return response.text();
        })
        .then(data => {
            const footerEl = document.querySelector("footer");
            footerEl.innerHTML = data;
            footerEl.classList.add('loaded');
        })
        .catch(error => console.error(error));
});

function initNavToggle() {
    const toggle = document.getElementById('nav-toggle');
    const nav = document.querySelector('.nav-links');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        const isOpen = toggle.classList.toggle('open');
        nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen);
    });
}

function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    // Set initial label based on current theme
    const isDarkNow = document.documentElement.getAttribute('data-theme') === 'dark';
    toggle.textContent = isDarkNow ? 'Light Mode' : 'Dark Mode';

    toggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';

        if (newTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            toggle.textContent = 'Light Mode';
        } else {
            document.documentElement.removeAttribute('data-theme');
            toggle.textContent = 'Dark Mode';
        }

        localStorage.setItem('theme', newTheme);
    });
}
