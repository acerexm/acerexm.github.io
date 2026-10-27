const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".side-nav a");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                navLinks.forEach(link => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `.side-nav a[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    },
    {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0
    }
);

sections.forEach(section => {
    observer.observe(section);
});

// Back to Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
