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

document.querySelectorAll('.social-links a').forEach(link => {
    const currentPage = window.location.pathname.split('/').pop();
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
