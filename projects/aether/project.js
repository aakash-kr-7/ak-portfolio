export const project = {
  key: 'aether',
  title: 'Aether',
  status: 'In development',
  statusTone: 'teal',
  subtitle: 'AI-powered mental and physical wellness platform.',
  overview: `<p><strong>Aether</strong> is a wellness platform that actually understands you. It tracks mood over time, identifies emotional patterns, and makes personalized recommendations - music, journaling prompts, community connections - that match your actual state, not a generic template.</p><p>The core insight: most wellness apps are just glorified to-do lists. Aether is built around the idea that the software should adapt to the person, not the other way around.</p><p>Stack spans a <strong>React frontend</strong>, <strong>FastAPI backend</strong>, <strong>OpenAI embeddings</strong> for pattern matching, and <strong>Spotify API</strong> integration for real music recommendations.</p>`,
  links: [{ label: 'GitHub', href: '#', external: false }],
  images: [
    { label: 'Dashboard Screenshot', helper: 'Add assets/aether-1.png' },
    { label: 'Mood Tracker', helper: 'Add assets/aether-2.png' }
  ],
  architecture: { label: 'Architecture Diagram', helper: 'Add assets/aether-arch.png' },
  documentation: `<p><strong>Key modules:</strong> mood ingestion pipeline, pattern analysis engine, recommendation resolver, community feed.</p><p><strong>Current state:</strong> core mood tracking and music recommendation live. Community and journaling features in progress.</p>`,
  tech: ['React', 'TypeScript', 'Python', 'FastAPI', 'OpenAI API', 'PostgreSQL', 'Spotify API', 'Docker'],
  cardHtml: `
    <div class="project-panel" data-project="aether">
      <div class="panel-visual panel-visual--aether">
        <div class="aether-ui">
          <div class="aui-header">
            <div class="aui-icon">🌿</div>
            <span class="aui-name">Aether</span>
            <span class="aui-sub">mood · 09:41</span>
          </div>
          <div class="aui-body">
            <div class="mood-row">
              <span class="mood-label">Today's mood</span>
              <span class="mood-val">Focused 73%</span>
            </div>
            <div class="mood-track"><div class="mood-fill"></div></div>
            <div class="aui-insight">
              Feeling <span>focused today</span>. Recommended: lo-fi study playlist + a short walk before your 3 PM deadline.
            </div>
            <div class="aui-chips">
              <span class="aui-chip">Journaling</span>
              <span class="aui-chip">Insights</span>
              <span class="aui-chip">Community</span>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-info">
        <div class="panel-num">01</div>
        <span class="panel-tag panel-tag--cyan">In development</span>
        <h3 class="panel-title">Aether</h3>
        <p class="panel-desc">An AI-powered mental and physical wellness platform. Tracks mood, analyzes emotional patterns, recommends music matched to your state. It doesn't just log - it listens.</p>
        <ul class="panel-tech">
          <li>React</li><li>Python / FastAPI</li><li>OpenAI API</li><li>PostgreSQL</li><li>Spotify API</li>
        </ul>
        <div class="panel-actions">
          <button class="btn btn-primary open-modal-btn" data-project="aether">View details</button>
        </div>
      </div>
      <button class="project-panel-open-btn open-modal-btn" data-project="aether">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"/><path d="M21 3L9 15"/><path d="M10 3H3v18h18v-7"/></svg>
        Details
      </button>
    </div>`
};
