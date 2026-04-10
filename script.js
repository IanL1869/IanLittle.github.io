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
            document.querySelector("header").innerHTML = data;

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
            document.querySelector("footer").innerHTML = data;
        })
        .catch(error => console.error(error));
});
