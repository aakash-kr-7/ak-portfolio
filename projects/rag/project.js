window.PROJECTS = window.PROJECTS || {};

window.PROJECTS.rag = {
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
        { src: "assets/screenshot-1.png", alt: "RAG search screenshot 1" },
        { src: "assets/screenshot-2.png", alt: "RAG comparison chart" }
    ],
    architecture: {
        src: "assets/architecture.png",
        alt: "RAG architecture diagram"
    },
    documentation: `
        <p><strong>Documentation idea:</strong> include dataset details, metrics, and a short benchmark summary.</p>
        <p><strong>Notes:</strong> mention what changed when semantic retrieval replaced keyword search.</p>
    `,
    tech: ["Python", "sentence-transformers", "FAISS", "Streamlit"]
};
