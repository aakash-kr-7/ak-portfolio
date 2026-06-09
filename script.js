const phrases = [
    "Building thoughtful technology.",
    "Currently building Aether.",
    "AI, full-stack, and product thinking.",
    "CS student with real shipping energy."
];

const typed = document.getElementById("typed");
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function tick() {
    if (!typed) return;

    const phrase = phrases[phraseIndex];

    if (!deleting) {
        charIndex += 1;
        typed.textContent = phrase.slice(0, charIndex);
        if (charIndex === phrase.length) {
            deleting = true;
            setTimeout(tick, 1200);
            return;
        }
    } else {
        charIndex -= 1;
        typed.textContent = phrase.slice(0, charIndex);
        if (charIndex === 0) {
            deleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
    }

    setTimeout(tick, deleting ? 34 : 52);
}

setTimeout(tick, 650);

const revealTargets = document.querySelectorAll(
    ".hero-shell, .about-grid, .building-strip, .project-featured, .project-card, .graph-layout, .analytics-banner, .contact-block"
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

revealTargets.forEach((node) => {
    node.classList.add("reveal");
    revealObserver.observe(node);
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach((link) => {
            link.style.color = link.getAttribute("href") === `#${id}` ? "var(--text)" : "";
        });
    });
}, { threshold: 0.35 });

sections.forEach((section) => navObserver.observe(section));

const canvas = document.getElementById("particle-canvas");
const ctx = canvas?.getContext("2d");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let particles = [];

function resizeCanvas() {
    if (!canvas || !ctx) return;
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
}

function seedParticles() {
    if (!canvas) return;
    const count = Math.min(36, Math.max(18, Math.floor(window.innerWidth / 52)));
    particles = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: 1 + Math.random() * 1.8,
        vx: -0.15 + Math.random() * 0.3,
        vy: -0.12 + Math.random() * 0.24,
        a: 0.12 + Math.random() * 0.25
    }));
}

function drawParticles() {
    if (!ctx || prefersReducedMotion) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = window.innerWidth + 10;
        if (p.x > window.innerWidth + 10) p.x = -10;
        if (p.y < -10) p.y = window.innerHeight + 10;
        if (p.y > window.innerHeight + 10) p.y = -10;

        ctx.beginPath();
        ctx.fillStyle = `rgba(137, 167, 255, ${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
    });
    requestAnimationFrame(drawParticles);
}

resizeCanvas();
seedParticles();
drawParticles();

window.addEventListener("resize", () => {
    resizeCanvas();
    seedParticles();
}, { passive: true });
