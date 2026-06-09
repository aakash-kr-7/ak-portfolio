/* =========================================================
   AAKASH KUMAR — Portfolio Script
   ========================================================= */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ─── Typewriter ─── */
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
            setTimeout(tick, 1400);
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
    setTimeout(tick, deleting ? 32 : 50);
}
setTimeout(tick, 1200);


/* ─── Cursor glow ─── */
const cursorGlow = document.querySelector(".cursor-glow");
if (cursorGlow && !prefersReducedMotion) {
    let cursorX = window.innerWidth / 2;
    let cursorY = window.innerHeight / 2;
    let glowX = cursorX;
    let glowY = cursorY;

    window.addEventListener("mousemove", (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;
    }, { passive: true });

    function animateCursor() {
        // Smooth lag for the glow
        glowX += (cursorX - glowX) * 0.08;
        glowY += (cursorY - glowY) * 0.08;
        cursorGlow.style.left = glowX + "px";
        cursorGlow.style.top  = glowY + "px";
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
}


/* ─── Reveal on scroll ─── */
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

revealEls.forEach((el) => revealObserver.observe(el));


/* ─── Nav scroll state + active link ─── */
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
}, { passive: true });

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${id}`;
            link.classList.toggle("active", isActive);
        });
    });
}, { threshold: 0.4 });

sections.forEach((s) => navObserver.observe(s));


/* ─── Particle canvas ─── */
const canvas = document.getElementById("particle-canvas");
const ctx = canvas?.getContext("2d");
let particles = [];

function resizeCanvas() {
    if (!canvas || !ctx) return;
    canvas.width  = window.innerWidth  * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    canvas.style.width  = window.innerWidth  + "px";
    canvas.style.height = window.innerHeight + "px";
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
}

function seedParticles() {
    if (!canvas) return;
    const count = Math.min(48, Math.max(20, Math.floor(window.innerWidth / 40)));
    particles = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: 0.6 + Math.random() * 1.4,
        vx: -0.12 + Math.random() * 0.24,
        vy: -0.1  + Math.random() * 0.2,
        a: 0.06 + Math.random() * 0.22,
        pulse: Math.random() * Math.PI * 2,
    }));
}

function drawParticles() {
    if (!ctx || prefersReducedMotion) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const t = performance.now() / 1000;
    particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = window.innerWidth  + 10;
        if (p.x > window.innerWidth  + 10) p.x = -10;
        if (p.y < -10) p.y = window.innerHeight + 10;
        if (p.y > window.innerHeight + 10) p.y = -10;

        const alpha = p.a * (0.6 + 0.4 * Math.sin(t * 0.8 + p.pulse));
        ctx.beginPath();
        ctx.fillStyle = `rgba(137, 167, 255, ${alpha})`;
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


/* =========================================================
   HORIZONTAL SCROLL — Projects
   =========================================================
   The outer div is tall (JS sets height = track scrollWidth).
   The inner is sticky (100vh). As you scroll down the page,
   we read the outer's scroll progress and drive translateX
   on the track. Feels like sideways scrolling.
   ========================================================= */

const projectsOuter   = document.getElementById("projectsOuter");
const projectsTrack   = document.getElementById("projectsTrack");
const progressBar     = document.getElementById("projectsProgress");

let trackScrollWidth = 0;
let outerHeight      = 0;

function measureProjects() {
    if (!projectsOuter || !projectsTrack) return;

    // Track total scrollable width (all cards + gaps)
    // We subtract the viewport width because at the end
    // the last card should be visible, not offscreen
    trackScrollWidth = projectsTrack.scrollWidth - window.innerWidth;

    // Make the outer tall enough to give us scroll distance == trackScrollWidth
    // Plus some breathing room at each end
    const totalScrollHeight = trackScrollWidth + window.innerHeight;
    projectsOuter.style.height = totalScrollHeight + "px";
}

function updateProjectsScroll() {
    if (!projectsOuter || !projectsTrack || prefersReducedMotion) return;

    const outerRect = projectsOuter.getBoundingClientRect();

    // How far we've scrolled INTO the sticky zone
    // outerRect.top goes from 0 (just entered) to negative (scrolled past)
    const scrolled = -outerRect.top + window.innerHeight * 0; // start when top hits viewport top

    // Clamp between 0 and total scrollable distance
    const maxScroll = projectsOuter.offsetHeight - window.innerHeight;
    const clamped   = Math.max(0, Math.min(scrolled, maxScroll));

    // Progress 0 → 1
    const progress = maxScroll > 0 ? clamped / maxScroll : 0;

    // Translate the track
    const tx = -(progress * trackScrollWidth);
    projectsTrack.style.transform = `translateX(${tx}px)`;

    // Progress bar
    if (progressBar) {
        progressBar.style.width = (progress * 100) + "%";
    }

    // Add subtle parallax tilt to each card based on how centered it is
    const cards = projectsTrack.querySelectorAll(".pcard");
    const vw = window.innerWidth;
    cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const distFromCenter = (cardCenterX - vw / 2) / (vw / 2); // -1 to 1
        const rotate = distFromCenter * 1.5; // degrees
        const scale  = 1 - Math.abs(distFromCenter) * 0.02;
        card.style.transform = `rotateY(${rotate}deg) scale(${scale}) translateY(${card.matches(":hover") ? "-4px" : "0"})`;
    });
}

// Run measure on load + resize
measureProjects();
window.addEventListener("resize", measureProjects, { passive: true });

// Hook into scroll
window.addEventListener("scroll", updateProjectsScroll, { passive: true });
updateProjectsScroll(); // initial call


/* ─── Card entrance: stagger cards as track comes into view ─── */
const pcards = document.querySelectorAll(".pcard");

// Initially hide all cards (will animate in as they scroll into horizontal view)
if (!prefersReducedMotion) {
    pcards.forEach((card, i) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px) scale(0.97)";
        card.style.transition = "opacity 600ms ease, transform 600ms cubic-bezier(0.22, 1, 0.36, 1)";
    });
}

// Observe projectsOuter to trigger card entrance
const projectsEntranceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            pcards.forEach((card, i) => {
                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "";
                }, i * 100);
            });
            projectsEntranceObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

if (projectsOuter) projectsEntranceObserver.observe(projectsOuter);


/* ─── Magnetic buttons ─── */
if (!prefersReducedMotion) {
    document.querySelectorAll(".btn").forEach((btn) => {
        btn.addEventListener("mousemove", (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width  / 2;
            const y = e.clientY - rect.top  - rect.height / 2;
            btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "";
        });
    });
}


/* ─── Skill chip hover sparkle ─── */
document.querySelectorAll(".skill-chip").forEach((chip) => {
    chip.addEventListener("mouseenter", () => {
        chip.style.transition = "color 200ms, border-color 200ms, background 200ms, transform 200ms";
        chip.style.transform = "translateY(-2px)";
    });
    chip.addEventListener("mouseleave", () => {
        chip.style.transform = "";
    });
});