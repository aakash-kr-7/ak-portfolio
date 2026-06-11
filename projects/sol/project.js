export const project = {
  key: 'sol',
  title: 'Sol',
  status: 'In development',
  statusTone: 'violet',
  subtitle: 'Emotionally realistic social AI platform with persistent memory.',
  overview: `<p><strong>Sol</strong> is the project I care most about. It's an AI companion platform built in Flutter where the characters - Atlas, Elio, June, Kaia, Nova - feel genuinely present. Not chatbots. Not assistants. Presences.</p><p>The technical challenge is making relationships feel real over time. That means <strong>persistent memory via ChromaDB</strong>, behavioral parameters that control how each character actually texts (attachment speed, emotional openness, response timing quirks), and relationship arcs that evolve naturally.</p><p>Backend: FastAPI + ChromaDB + SQLite. LLM: Groq/Llama 3.1 70B. Frontend: Flutter with a custom deep-dark design system (Presence Blue, Warm Violet, Human Warmth palette).</p>`,
  links: [{ label: 'GitHub', href: '#', external: false }],
  images: [
    { label: 'Chat Interface', helper: 'Add assets/sol-chat.png' },
    { label: 'Character Select', helper: 'Add assets/sol-chars.png' }
  ],
  architecture: { label: 'Architecture', helper: 'Add assets/sol-arch.png' },
  documentation: `<p><strong>Characters:</strong> Atlas (measured, deep), Elio (warm, playful), June (quiet, poetic), Kaia (direct, ambitious), Nova (curious, expansive).</p><p><strong>Memory system:</strong> semantic search over conversation history using ChromaDB. Each character retrieves relevant past context before responding.</p><p><strong>Design system:</strong> Plus Jakarta Sans + Jost, glassmorphic surfaces, fragment painter animations with touch-triggered ripple effects.</p>`,
  tech: ['Flutter', 'Dart', 'FastAPI', 'ChromaDB', 'SQLite', 'Groq API', 'Llama 3.1 70B', 'sentence-transformers'],
  cardHtml: `
    <div class="project-panel" data-project="sol">
      <div class="panel-visual panel-visual--sol">
        <div class="sol-ui">
          <div class="sol-header">
            <div class="sol-av">A</div>
            <span class="sol-name">Atlas</span>
            <span class="sol-status">online</span>
          </div>
          <div class="sol-msgs">
            <div class="sol-msg sol-msg--ai">
              <span class="sol-msg-name">Atlas</span>
              I remember you mentioned that last Tuesday. How are you feeling about it now?
            </div>
            <div class="sol-msg sol-msg--user">
              Better, actually. I think I needed to hear that.
            </div>
            <div class="sol-msg sol-msg--ai">
              <span class="sol-msg-name">Atlas</span>
              That's real. The pattern I've noticed in you - you process things slow, then suddenly you're through it.
            </div>
          </div>
          <div class="sol-input-row">
            <div class="sol-input-fake">Message Atlas...</div>
            <div class="sol-send">↑</div>
          </div>
          <div class="sol-avatars">
            <div class="sol-mini-av sol-mini-av--a">A</div>
            <div class="sol-mini-av sol-mini-av--e">E</div>
            <div class="sol-mini-av sol-mini-av--j">J</div>
            <div class="sol-mini-av sol-mini-av--k">K</div>
            <div class="sol-mini-av sol-mini-av--n">N</div>
          </div>
        </div>
      </div>
      <div class="panel-info">
        <div class="panel-num">03</div>
        <span class="panel-tag panel-tag--violet">In development</span>
        <h3 class="panel-title">Sol</h3>
        <p class="panel-desc">An emotionally realistic social AI platform built in Flutter. Deeply believable AI personalities with persistent memory, behavioral quirks, and real relationship arcs. Not a productivity tool - a presence.</p>
        <ul class="panel-tech">
          <li>Flutter</li><li>Dart</li><li>FastAPI</li><li>ChromaDB</li><li>Groq / Llama 3.1</li>
        </ul>
        <div class="panel-actions">
          <button class="btn btn-primary open-modal-btn" data-project="sol">View details</button>
        </div>
      </div>
      <button class="project-panel-open-btn open-modal-btn" data-project="sol">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"/><path d="M21 3L9 15"/><path d="M10 3H3v18h18v-7"/></svg>
        Details
      </button>
    </div>`
};
