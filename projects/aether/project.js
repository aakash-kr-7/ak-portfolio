(window.PORTFOLIO_PROJECTS ||= []).push({
  key: 'aether',
  title: 'Aether',
  type: 'Full stack',
  summary: 'Wellness application with Firestore security rules, user-scoped data modeling, journal schemas, and explicit async UI states.',
  longSummary: 'Aether is a full-stack wellness application built around user-owned data. The project focuses on Firestore schema design, secure per-user isolation, future analytics readiness, and careful UI state handling across network-bound flows.',
  metric: 'Top 100 of 2000+ Bennett University projects',
  tags: ['Flutter', 'Firebase', 'Firestore', 'Auth'],
  github: 'https://github.com/aakash-kr-7/Aether',
  assetsPath: 'projects/aether/assets',
  architecture: [
    'Firestore backend uses user-scoped collections around a single ownership model.',
    'Custom security rules enforce per-user data isolation.',
    'Time-series journal schemas are structured for future analytics pipelines.',
    '20+ async UI states handle loading, failure, partial rendering, and network delay.'
  ],
  demoIdeas: [
    'Add screenshots of journal, mood tracking, and profile/account screens.',
    'Add a Firestore schema diagram.',
    'Add a short app walkthrough video.',
    'Add security rules or data isolation notes.'
  ],
  mediaSlots: [
    { title: 'App walkthrough', helper: 'Drop mobile screen recordings or screenshots here.' },
    { title: 'Data model', helper: 'Use this slot for Firestore collection and security diagrams.' },
    { title: 'UI states', helper: 'Show loading, failure, and partial render handling.' }
  ]
});
