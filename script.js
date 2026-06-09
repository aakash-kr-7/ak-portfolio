const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section[id]");
const typed = document.getElementById("typed");
const canvas = document.getElementById("particle-canvas");
const ctx = canvas?.getContext("2d");
const projectsTrack = document.getElementById("projectsTrack");
const projectsProgress = document.getElementById("projectsProgress");
const projectModal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");
const contactModal = document.getElementById("contactModal");
const contactModalClose = document.getElementById("contactModalClose");
const contactBtn = document.getElementById("contactBtn");
const visitorCount = document.getElementById("visitor-count");
const projectCards = document.querySelectorAll(".pcard");
const projectsOuter = document.getElementById("projectsOuter");
let projectsRaf = 0;
let projectsMetrics = { trackWidth: 0, outerStart: 0, outerEnd: 0, maxScroll: 0 };

const phrases = [
    "Building thoughtful technology.",
    "Currently building Aether.",
    "AI, full-stack, and product thinking.",
    "CS student with real shipping energy."
];

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

setTimeout(tick, 800);

function revealOnScroll() {
    const revealEls = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    revealEls.forEach((el) => io.observe(el));
}

revealOnScroll();

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
    });
}, { threshold: 0.45 });
sections.forEach((section) => navObserver.observe(section));

window.addEventListener("scroll", () => {
    nav?.classList.toggle("scrolled", window.scrollY > 40);
}, { passive: true });

function resizeCanvas() {
    if (!canvas || !ctx) return;
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
}

let particles = [];
function seedParticles() {
    if (!canvas) return;
    const count = Math.min(48, Math.max(20, Math.floor(window.innerWidth / 40)));
    particles = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: 0.6 + Math.random() * 1.4,
        vx: -0.12 + Math.random() * 0.24,
        vy: -0.1 + Math.random() * 0.2,
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
        if (p.x < -10) p.x = window.innerWidth + 10;
        if (p.x > window.innerWidth + 10) p.x = -10;
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
    measureProjects();
}, { passive: true });

function lockScroll(lock) {
    document.body.style.overflow = lock ? "hidden" : "";
}

function openModal(modal) {
    if (!modal) return;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    lockScroll(true);
}

function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    lockScroll(false);
}

function buildProjectModal(project) {
    document.getElementById("modalStatus").textContent = project.status;
    document.getElementById("modalStatus").className = `modal-status modal-status--${project.statusTone}`;
    document.getElementById("modalTitle").textContent = project.title;
    document.getElementById("modalSubtitle").textContent = project.subtitle;

    const links = document.getElementById("modalLinks");
    links.innerHTML = "";
    project.links.forEach((link) => {
        const a = document.createElement("a");
        a.href = link.href;
        a.target = link.external ? "_blank" : "_self";
        a.rel = link.external ? "noopener" : "";
        a.className = "btn btn-ghost";
        a.textContent = link.label;
        links.appendChild(a);
    });

    const tabs = document.getElementById("modalTabs");
    tabs.innerHTML = "";
    const sections = [
        { key: "overview", label: "Overview" },
        { key: "screenshots", label: "Screenshots" },
        { key: "architecture", label: "Architecture" },
        { key: "docs", label: "Docs" },
        { key: "stack", label: "Stack" },
    ];

    const body = document.getElementById("modalBody");
    body.querySelectorAll(".modal-section").forEach((s) => s.hidden = true);

    function showTab(key) {
        body.querySelectorAll(".modal-section").forEach((s) => s.hidden = true);
        document.getElementById(`modal${key[0].toUpperCase()}${key.slice(1)}Section`).hidden = false;
        tabs.querySelectorAll(".modal-tab").forEach((t) => t.classList.toggle("active", t.dataset.tab === key));
    }

    sections.forEach((item, index) => {
        const btn = document.createElement("button");
        btn.className = `modal-tab${index === 0 ? " active" : ""}`;
        btn.type = "button";
        btn.dataset.tab = item.key;
        btn.textContent = item.label;
        btn.addEventListener("click", () => showTab(item.key));
        tabs.appendChild(btn);
    });

    document.getElementById("modalOverviewSection").hidden = false;
    document.getElementById("modalOverviewText").innerHTML = project.overview;

    const images = document.getElementById("modalImages");
    images.innerHTML = "";
    project.images.forEach((image) => {
        if (image.src) {
            const wrap = document.createElement("div");
            wrap.className = "modal-img-slot";
            const img = document.createElement("img");
            img.src = image.src;
            img.alt = image.alt;
            wrap.appendChild(img);
            images.appendChild(wrap);
        } else {
            const empty = document.createElement("div");
            empty.className = "modal-img-empty";
            empty.innerHTML = `<strong>${image.label}</strong><span>${image.helper}</span>`;
            images.appendChild(empty);
        }
    });

    const arch = document.getElementById("modalArch");
    arch.innerHTML = "";
    if (project.architecture.src) {
        const img = document.createElement("img");
        img.className = "modal-arch-img";
        img.src = project.architecture.src;
        img.alt = project.architecture.alt;
        arch.appendChild(img);
    } else {
        const empty = document.createElement("div");
        empty.className = "modal-arch-empty";
        empty.innerHTML = `<strong>${project.architecture.label}</strong><span>${project.architecture.helper}</span>`;
        arch.appendChild(empty);
    }

    document.getElementById("modalDocContent").innerHTML = project.documentation;

    const techList = document.getElementById("modalTechList");
    techList.innerHTML = "";
    project.tech.forEach((tech) => {
        const li = document.createElement("li");
        li.textContent = tech;
        techList.appendChild(li);
    });
}

projectCards.forEach((card) => {
    const open = () => {
        const project = window.PROJECTS?.[card.dataset.project];
        if (!project) return;
        buildProjectModal(project);
        openModal(projectModal);
    };
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            open();
        }
    });
});

modalClose?.addEventListener("click", () => closeModal(projectModal));
projectModal?.addEventListener("click", (e) => {
    if (e.target === projectModal) closeModal(projectModal);
});

function openContactModal() {
    openModal(contactModal);
}

contactBtn?.addEventListener("click", openContactModal);
contactModalClose?.addEventListener("click", () => closeModal(contactModal));
contactModal?.addEventListener("click", (e) => {
    if (e.target === contactModal) closeModal(contactModal);
});

document.querySelectorAll('a[href="#contact"]').forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.getElementById("contact");
        if (!target) return;
        const top = target.getBoundingClientRect().top + window.scrollY - 84;
        window.scrollTo({ top, behavior: "auto" });
    });
});

if (visitorCount) visitorCount.textContent = "0012";

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal(projectModal);
        closeModal(contactModal);
    }
});

function measureProjects() {
    if (!projectsOuter) return;
    const track = document.getElementById("projectsTrack");
    if (!track) return;
    const viewportWidth = window.innerWidth;
    const trackWidth = track.scrollWidth;
    const stickyHeight = window.innerHeight - parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h"), 10);
    const travel = Math.max(0, trackWidth - viewportWidth);
    projectsMetrics = {
        trackWidth,
        outerStart: 0,
        outerEnd: 0,
        maxScroll: travel
    };
    projectsOuter.style.height = `${travel + stickyHeight}px`;
    projectsOuter.dataset.travel = String(travel);
    updateProjects();
}

function updateProjects() {
    if (!projectsOuter || prefersReducedMotion) return;
    const track = document.getElementById("projectsTrack");
    if (!track) return;

    const rect = projectsOuter.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const stickyHeight = viewportHeight - parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h"), 10);
    const totalTravel = Math.max(0, projectsOuter.offsetHeight - stickyHeight);
    const scrolled = Math.min(Math.max(-rect.top, 0), totalTravel);
    const progress = totalTravel > 0 ? scrolled / totalTravel : 0;
    const tx = -(projectsMetrics.maxScroll * progress);

    track.style.transform = `translate3d(${tx}px, 0, 0)`;

    if (projectsProgress) {
        projectsProgress.style.width = `${progress * 100}%`;
    }
}

function scheduleProjectsUpdate() {
    if (projectsRaf) return;
    projectsRaf = requestAnimationFrame(() => {
        projectsRaf = 0;
        updateProjects();
    });
}

measureProjects();
window.addEventListener("scroll", scheduleProjectsUpdate, { passive: true });
window.addEventListener("resize", measureProjects, { passive: true });

const contactEmail = document.querySelector(".contact-option--gmail");
if (contactEmail) {
    contactEmail.href = "https://mail.google.com/mail/?view=cm&fs=1&to=aakashkumar94303@gmail.com";
    contactEmail.target = "_blank";
    contactEmail.rel = "noopener";
}

const contactWhatsApp = document.querySelector(".contact-option--whatsapp");
if (contactWhatsApp) {
    contactWhatsApp.href = "https://wa.me/917320048899";
    contactWhatsApp.target = "_blank";
    contactWhatsApp.rel = "noopener";
}
