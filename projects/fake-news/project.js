(window.PORTFOLIO_PROJECTS ||= []).push({
  key: 'fake-news',
  title: 'Fake News Detection',
  type: 'Research',
  summary: 'Paraphrase-robust misinformation detection pipeline over 190K+ claims and 33,294 paraphrase sets using lexical-semantic ensembles.',
  longSummary: 'This research project focuses on exposing model failure under linguistically varied misinformation. It compares standalone baselines with a weighted lexical-semantic ensemble and measures F1, prediction consistency, and original-paraphrase agreement.',
  metric: '0.7956 F1, 0.9328 consistency, 0.9375 paraphrase agreement',
  tags: ['NLP', 'Embeddings', 'TF-IDF', 'Ensembles'],
  github: 'https://github.com/aakash-kr-7/fake-news-detection-ML-DL',
  assetsPath: 'projects/fake-news/assets',
  architecture: [
    'Pipeline processes paraphrase sets to test whether models remain stable under rewritten claims.',
    'Lexical and semantic signals are combined through a weighted ensemble.',
    'Baselines include TF-IDF, MiniLM, MPNet, and Logistic Regression configurations.',
    'Evaluation uses F1, prediction consistency, and original-paraphrase agreement.'
  ],
  demoIdeas: [
    'Add a chart comparing baseline models and ensemble performance.',
    'Add examples of original claims and paraphrased variants.',
    'Add a pipeline diagram from claim input to final prediction.',
    'Add result tables from the best model configuration.'
  ],
  mediaSlots: [
    { title: 'Research chart', helper: 'Show F1, consistency, and paraphrase agreement comparisons.' },
    { title: 'Claim examples', helper: 'Add original vs paraphrased misinformation examples.' },
    { title: 'Pipeline diagram', helper: 'Visualize preprocessing, embeddings, ensemble, and scoring.' }
  ]
});
