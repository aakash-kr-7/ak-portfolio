export const project = {
  key: 'aurora',
  title: 'Aurora',
  status: 'Coming soon',
  statusTone: 'dim',
  subtitle: 'Speech, emotion, and real-time understanding.',
  overview: `<p>Something new is taking shape. Aurora sits at the intersection of speech understanding, emotional intelligence, and real-time processing.</p><p>More details when it's ready to show.</p>`,
  links: [],
  images: [{ label: 'Coming soon', helper: 'Details to be revealed' }],
  architecture: { label: 'Coming soon', helper: 'Architecture TBD' },
  documentation: `<p>Details under wraps. Stay tuned.</p>`,
  tech: ['TBD'],
  cardHtml: `
    <div class="project-panel" data-project="aurora">
      <div class="panel-visual panel-visual--aurora">
        <div class="aurora-ui">
          <div class="aurora-orbs">
            <div class="aorb aorb-1"></div>
            <div class="aorb aorb-2"></div>
            <div class="aorb aorb-3"></div>
          </div>
          <div class="aurora-center-text">
            <span class="big-label">Aurora</span>
            <span class="aurora-coming">Coming soon</span>
          </div>
        </div>
      </div>
      <div class="panel-info">
        <div class="panel-num">04</div>
        <span class="panel-tag panel-tag--amber">Coming soon</span>
        <h3 class="panel-title">Aurora</h3>
        <p class="panel-desc">Something new is taking shape. Details under wraps for now - but the direction is ambitious. Speech, emotion, and real-time understanding.</p>
        <ul class="panel-tech">
          <li>TBD</li>
        </ul>
        <div class="panel-actions">
          <button class="btn btn-primary open-modal-btn" data-project="aurora">View details</button>
        </div>
      </div>
      <button class="project-panel-open-btn open-modal-btn" data-project="aurora">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"/><path d="M21 3L9 15"/><path d="M10 3H3v18h18v-7"/></svg>
        Details
      </button>
    </div>`
};
