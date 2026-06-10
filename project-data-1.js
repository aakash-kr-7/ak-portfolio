window.PROJECTS = window.PROJECTS || {};

Object.assign(window.PROJECTS, {
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
    }
});
