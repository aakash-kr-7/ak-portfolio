window.PROJECTS = {
    aether: {
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
            { label: "Screenshot 1", helper: "Drop a product screenshot or mobile mockup here." },
            { label: "Screenshot 2", helper: "Use this for a second view, flow, or dashboard state." }
        ],
        architecture: {
            label: "Architecture diagram placeholder",
            helper: "Insert a system diagram, data flow, or component map here."
        },
        documentation: `
            <p><strong>Architecture notes:</strong> explain data ingestion, model calls, storage, and UI flow.</p>
            <p><strong>Build notes:</strong> list tradeoffs, what you tried, and what you would improve next.</p>
        `,
        tech: ["React", "FastAPI", "OpenAI API", "PostgreSQL", "Spotify API"]
    },
    rag: {
        title: "RAG vs Keyword Search",
        status: "Research",
        statusTone: "blue",
        subtitle: "A comparison between semantic retrieval and keyword search, with room for benchmarks and method notes.",
        overview: `
            <p><strong>Use this area</strong> for experiment design, results, and takeaway summary.</p>
            <p>This is where you can explain why RAG works better than keyword matching for the problem you solved.</p>
        `,
        links: [
            { label: "GitHub", href: "#", external: false }
        ],
        images: [
            { label: "Screenshot 1", helper: "Insert the search interface here." },
            { label: "Screenshot 2", helper: "Use for comparison charts or result tables." }
        ],
        architecture: {
            label: "Architecture diagram placeholder",
            helper: "Show embeddings, retrieval, prompt flow, and evaluation steps."
        },
        documentation: `
            <p><strong>Documentation idea:</strong> include dataset details, metrics, and a short benchmark summary.</p>
            <p><strong>Notes:</strong> mention what changed when semantic retrieval replaced keyword search.</p>
        `,
        tech: ["Python", "sentence-transformers", "FAISS", "Streamlit"]
    },
    sol: {
        title: "Sol",
        status: "In development",
        statusTone: "violet",
        subtitle: "An emotionally realistic social AI platform with persistent memory and distinct personalities.",
        overview: `
            <p><strong>Use this area</strong> for personality design notes, memory architecture, and interaction goals.</p>
            <p>It’s a good place to show how the system behaves over time, not just in a single demo.</p>
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
            <p>This is a ready-made slot for a future project. Swap in the details once it’s real.</p>
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
};
