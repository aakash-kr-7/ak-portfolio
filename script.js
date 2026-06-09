/* ===========================
   TYPING EFFECT
   =========================== */
const phrases = [
    "Building thoughtful technology.",
    "Currently building Aether.",
    "CS student. Problem solver.",
    "AI × human experience.",
];

const el = document.getElementById("typed");
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isPaused = false;

function type() {
    if (!el) return;

    const current = phrases[phraseIndex];

    if (isPaused) {
        isPaused = false;
        setTimeout(type, 1400);
        return;
    }

    if (!isDeleting) {
        el.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            isPaused = true;
            isDeleting = true;
            setTimeout(type, 60);
            return;
        }
    } else {
        el.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
    }

    const speed = isDeleting ? 38 : 62;
    setTimeout(type, speed);
}

// Start typing after a short delay
setTimeout(type, 800);


/* ===========================
   SCROLL REVEAL
   =========================== */
const revealElements = document.querySelectorAll(
    ".section, .project-featured, .project-card, .about-grid, .contact-block"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
);

revealElements.forEach((el) => {
    el.classList.add("reveal");
    revealObserver.observe(el);
});


/* ===========================
   ACTIVE NAV LINK
   =========================== */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const navObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                navLinks.forEach((link) => {
                    link.style.color = "";
                    if (link.getAttribute("href") === `#${id}`) {
                        link.style.color = "var(--text-primary)";
                    }
                });
            }
        });
    },
    { threshold: 0.4 }
);

sections.forEach((s) => navObserver.observe(s));


/* ===========================
   NAV BACKGROUND ON SCROLL
   =========================== */
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        nav.style.borderBottomColor = "rgba(255,255,255,0.1)";
    } else {
        nav.style.borderBottomColor = "";
    }
}, { passive: true });