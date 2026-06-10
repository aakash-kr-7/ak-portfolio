window.PROJECTS = window.PROJECTS || {};

Object.assign(window.PROJECTS, {
    sol: {
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
            { label: "Screenshot 1", helper: "Drop the chat UI or persona screen here." },
            { label: "Screenshot 2", helper: "Use for relationship state or memory visualization." }
        ],
        architecture: {
            label: "Architecture diagram placeholder",
            helper: "Put the memory stack, persona routing, and message flow here."
        },
        documentation: `
            <p><strong>Documentation idea:</strong> explain how memory persists, how personalities differ, and what makes responses believable.</p>
            <p><strong>Notes:</strong> add examples of user journeys or important edge cases.</p>
        `,
        tech: ["Flutter", "Dart", "LLMs", "Glassmorphic UI"]
    },
    aurora: {
        title: "Aurora",
        status: "Coming soon",
        statusTone: "dim",
        subtitle: "A future project placeholder for work you want to add later.",
        overview: `
            <p>This is a ready-made slot for a future project. Swap in the details once it is real.</p>
        `,
        links: [
            { label: "GitHub", href: "#", external: false }
        ],
        images: [
            { label: "Screenshot 1", helper: "Placeholder for future imagery." },
            { label: "Screenshot 2", helper: "Placeholder for future imagery." }
        ],
        architecture: {
            label: "Architecture diagram placeholder",
            helper: "Placeholder for future system diagrams."
        },
        documentation: `
            <p><strong>Placeholder:</strong> use this later for architecture and implementation notes.</p>
        `,
        tech: ["TBD"]
    }
});
