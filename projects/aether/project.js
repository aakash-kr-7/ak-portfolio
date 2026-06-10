window.PROJECTS = window.PROJECTS || {};

window.PROJECTS.aether = {
    title: "Aether",
    status: "In development",
    statusTone: "teal",
    subtitle: "An AI-powered wellness platform with mood tracking, recommendation logic, and support-oriented context.",
    overview: `
        <p><strong>What to put here:</strong> a short project summary, your role, and the problem it solves.</p>
        <p>This modal is meant for detailed documentation. You can add architecture notes, feature breakdowns, decision logs, and screenshots without crowding the main portfolio.</p>
    `,
    links: [
        { label: "GitHub", href: "#", external: false },
        { label: "Demo", href: "#", external: false }
    ],
    images: [
        { src: "assets/screenshot-1.png", alt: "Aether screenshot 1" },
        { src: "assets/screenshot-2.png", alt: "Aether screenshot 2" }
    ],
    architecture: {
        src: "assets/architecture.png",
        alt: "Aether architecture diagram"
    },
    documentation: `
        <p><strong>Architecture notes:</strong> explain data ingestion, model calls, storage, and UI flow.</p>
        <p><strong>Build notes:</strong> list tradeoffs, what you tried, and what you would improve next.</p>
    `,
    tech: ["React", "FastAPI", "OpenAI API", "PostgreSQL", "Spotify API"]
};
