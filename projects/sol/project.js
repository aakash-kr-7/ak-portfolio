window.PROJECTS = window.PROJECTS || {};

window.PROJECTS.sol = {
    title: "Sol",
    status: "In development",
    statusTone: "violet",
    subtitle: "An emotionally realistic social AI platform with persistent memory and distinct personalities.",
    overview: `
        <p><strong>Use this area</strong> for personality design notes, memory architecture, and interaction goals.</p>
        <p>It is a good place to show how the system behaves over time, not just in a single demo.</p>
    `,
    links: [
        { label: "GitHub", href: "#", external: false }
    ],
    images: [
        { src: "assets/screenshot-1.png", alt: "Sol chat interface screenshot 1" },
        { src: "assets/screenshot-2.png", alt: "Sol memory visualization screenshot" }
    ],
    architecture: {
        src: "assets/architecture.png",
        alt: "Sol architecture diagram"
    },
    documentation: `
        <p><strong>Documentation idea:</strong> explain how memory persists, how personalities differ, and what makes responses believable.</p>
        <p><strong>Notes:</strong> add examples of user journeys or important edge cases.</p>
    `,
    tech: ["Flutter", "Dart", "LLMs", "Glassmorphic UI"]
};
