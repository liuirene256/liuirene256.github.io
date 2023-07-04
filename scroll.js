const slide = () => {
    const icon = document.querySelector(".menuicon");
    const nav = document.querySelector(".navlinks");
    const navLinks = document.querySelectorAll(".navlinks a");

    icon.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5
                    }s `;
            }
        });
        icon.classList.toggle("toggle");
    });
};

slide();