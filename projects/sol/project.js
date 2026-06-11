(window.PORTFOLIO_PROJECTS ||= []).push({
  key: 'sol',
  title: 'Sol',
  type: 'Live platform',
  summary: 'Distributed messaging platform with persistent memory architecture, pair-scoped retrieval, async worker orchestration, and a live multi-user backend.',
  longSummary: 'Sol is the heaviest engineering project in the portfolio: a FastAPI and Flutter platform where each user-persona relationship gets isolated memory, ranked retrieval, persistent behavioral state, and real deployment infrastructure at zero operational cost.',
  metric: '19 relational tables, 28 indexed query paths, 132 runtime coefficients',
  tags: ['FastAPI', 'Flutter', 'ChromaDB', 'SQLite', 'FCM'],
  github: 'https://github.com/aakash-kr-7/sol',
  assetsPath: 'projects/sol/assets',
  architecture: [
    'Pair-scoped ChromaDB namespaces isolate each user-persona memory space.',
    'Deterministic 5-factor ranking blends similarity, salience, strength, recency decay, and unresolved-context boost.',
    'Semaphore-controlled workers, pair-level locks, timeouts, and executor-offloaded I/O keep async sessions stable.',
    'Normalized persistence separates high-frequency telemetry from long-term retrieval and behavioral analytics.'
  ],
  demoIdeas: [
    'Add a short video showing a character recalling past context from memory.',
    'Add screenshots of chat, persona selection, and relationship state changes.',
    'Add an architecture diagram showing Flutter, FastAPI, SQLite, ChromaDB, workers, and FCM.',
    'Add a retrieval trace screenshot showing which memories were selected and why.'
  ],
  mediaSlots: [
    { title: 'Video demo', helper: 'Drop a video into projects/sol/assets and link it here.' },
    { title: 'Screenshots', helper: 'Use this slot for chat UI, persona state, or admin/debug views.' },
    { title: 'Architecture', helper: 'Use this slot for the memory + backend orchestration diagram.' }
  ]
});
