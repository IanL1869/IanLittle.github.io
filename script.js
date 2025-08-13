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

// Add active class to current page link
const currentPage = location.pathname.split('/').pop();
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
