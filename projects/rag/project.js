export const project = {
  key: 'rag',
  title: 'RAG vs Keyword Search',
  status: 'Internship deliverable',
  statusTone: 'blue',
  subtitle: 'Comparative analysis of semantic vs keyword-based retrieval.',
  overview: `<p>A focused research tool that makes the difference between <strong>semantic retrieval</strong> and keyword-based search viscerally obvious. Built as an internship deliverable, it lets you run the same query against both systems and watch the gap.</p><p>The key insight: keyword search finds documents that <em>contain your words</em>. RAG finds documents that <em>mean what you meant</em>. That distinction matters enormously in real applications.</p><p>Uses <strong>sentence-transformers</strong> for embedding (substituted for OpenAI embeddings per available constraints), <strong>FAISS</strong> for vector search, and a Streamlit UI for real-time comparison.</p>`,
  links: [{ label: 'GitHub', href: '#', external: false }],
  images: [{ label: 'Comparison UI', helper: 'Add assets/rag-1.png' }],
  architecture: { label: 'System Diagram', helper: 'Add assets/rag-arch.png' },
  documentation: `<p><strong>Spec deviation note:</strong> substituted sentence-transformers for OpenAI embeddings due to API cost constraints. Performance characteristics documented in README.</p><p><strong>Results:</strong> semantic retrieval consistently outperforms keyword search on intent-based queries by 40-60% on the test corpus.</p>`,
  tech: ['Python', 'sentence-transformers', 'FAISS', 'Streamlit', 'cosine similarity', 'NumPy'],
  cardHtml: `
    <div class="project-panel" data-project="rag">
      <div class="panel-visual panel-visual--rag">
        <div class="rag-ui">
          <div class="rag-card">
            <div class="rag-card-title">Semantic vs Keyword retrieval</div>
            <div class="rag-compare-row">
              <span class="rag-method rag-method--sem">RAG</span>
              <div class="rag-bar-track"><div class="rag-bar-fill rag-bar-fill--sem"></div></div>
              <span class="rag-pct rag-pct--sem">91%</span>
            </div>
            <div class="rag-compare-row">
              <span class="rag-method rag-method--kwd">KWD</span>
              <div class="rag-bar-track"><div class="rag-bar-fill rag-bar-fill--kwd"></div></div>
              <span class="rag-pct rag-pct--kwd">43%</span>
            </div>
            <div class="rag-query">
              <span class="rag-q-label">Query</span>
              <span class="rag-q-text">"things that calm anxiety"</span>
              <div class="rag-result">→ meditation techniques, breathing exercises</div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-info">
        <div class="panel-num">02</div>
        <span class="panel-tag panel-tag--indigo">Internship deliverable</span>
        <h3 class="panel-title">RAG vs Keyword Search</h3>
        <p class="panel-desc">A comparative system demonstrating semantic retrieval versus traditional keyword-based search. Explores how embedding-based retrieval fundamentally changes what "finding something" means.</p>
        <ul class="panel-tech">
          <li>Python</li><li>sentence-transformers</li><li>FAISS</li><li>Streamlit</li>
        </ul>
        <div class="panel-actions">
          <button class="btn btn-primary open-modal-btn" data-project="rag">View details</button>
        </div>
      </div>
      <button class="project-panel-open-btn open-modal-btn" data-project="rag">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"/><path d="M21 3L9 15"/><path d="M10 3H3v18h18v-7"/></svg>
        Details
      </button>
    </div>`
};
