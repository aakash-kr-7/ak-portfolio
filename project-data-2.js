window.PROJECTS = window.PROJECTS || {};

Object.assign(window.PROJECTS, {
    sol: {
        title: "Sol",
        status: "In development",
        statusTone: "violet",
        subtitle: "A socially intelligent AI companion with persistent memory, distinct personalities, and relationship-aware conversation.",
        overview: `
            <p><strong>Sol</strong> is an emotionally realistic social AI platform designed to feel coherent over time, not just clever in a single chat.</p>
            <p>It combines long-term memory, persona-specific behavior, and context-aware interaction so each companion can develop a recognizable voice, remember meaningful details, and respond in ways that feel consistent, warm, and human.</p>
            <p>The product is built around the idea that the quality of a relationship comes from continuity: what the system remembers, how it interprets the user, and how it evolves across repeated conversations.</p>
        `,
        links: [
            { label: "GitHub", href: "#", external: false }
        ],
        images: [
            { label: "Screenshot 1", helper: "Drop the chat UI or persona screen here." },
            { label: "Screenshot 2", helper: "Use for relationship state or memory visualization." }
        ],
        architecture: {
            label: "Memory-first companion architecture",
            helper: "Put the memory stack, persona routing, and message flow here."
        },
        documentation: `
            <p><strong>Product focus:</strong> Sol is built to preserve continuity across conversations, making memory and personality feel like first-class product features rather than backend details.</p>
            <p><strong>Core principles:</strong> every companion should feel distinct, the system should remember what matters, and responses should reflect a stable internal model of the relationship over time.</p>
            <p><strong>What makes it different:</strong> the platform is designed around long-horizon behavior, emotional consistency, and believable progression instead of isolated prompt responses.</p>
            <p><strong>Notes:</strong> the best examples to show are moments of recall, personality contrast, relationship state changes, and edge cases where memory meaningfully changes the response.</p>
        `,
        tech: ["Flutter", "Dart", "LLMs", "Persistent memory", "Persona routing", "Glassmorphic UI"]
    }
});