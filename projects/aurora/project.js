(window.PORTFOLIO_PROJECTS ||= []).push({
  key: 'aurora',
  title: 'Aurora',
  type: 'ML system',
  summary: 'Speech emotion recognition system with a unified training pipeline across RAVDESS, CREMA-D, and TESS using MFCC feature engineering.',
  longSummary: 'Aurora is an end-to-end speech emotion recognition system. It handles feature extraction, normalization, augmentation, dataset harmonization, and model benchmarking across classical and deep learning approaches.',
  metric: '10K+ audio samples, CNN benchmarked at 95%',
  tags: ['Python', 'MFCC', 'CNN', 'BiLSTM', 'SVM'],
  github: 'https://github.com/aakash-kr-7/aurora',
  assetsPath: 'projects/aurora/assets',
  architecture: [
    'Unified data pipeline harmonizes RAVDESS, CREMA-D, and TESS datasets.',
    'MFCC spectrogram features convert speech into model-ready time-frequency representations.',
    'SVM, BiLSTM, and CNN models were benchmarked against the same prepared pipeline.',
    'CNN was selected because it captured 2D MFCC patterns most effectively.'
  ],
  demoIdeas: [
    'Add a confusion matrix screenshot for the CNN model.',
    'Add a short clip showing waveform to MFCC conversion.',
    'Add training curves or model comparison charts.',
    'Add a dataset pipeline diagram.'
  ],
  mediaSlots: [
    { title: 'Model comparison', helper: 'Place SVM, BiLSTM, and CNN benchmark visuals here.' },
    { title: 'MFCC pipeline', helper: 'Show waveform, feature extraction, and spectrogram output.' },
    { title: 'Results', helper: 'Add confusion matrix, accuracy chart, or demo recording.' }
  ]
});
