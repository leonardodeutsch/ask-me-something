const presets = [
  {
    presetId: 1,
    presetName: 'Grammar',
    presetIcon: 'fa-solid fa-spell-check fa-2xl',
    presetColor: '#46c2cd',
    presetEngine: 'text-davinci-002',
    presetPrompt: 'Correct this to standard English: \n\nShe no went to the market.'
  },

  {
    presetId: 2,
    presetName: 'Translate',
    presetIcon: 'fa-solid fa-language fa-2xl',
    presetColor: '#77ddc2',
    presetEngine: 'text-davinci-002',
    presetPrompt: 'Translate this into 1. French, 2. Spanish, 3. Japanese: \n\nWhat rooms do you have available? \n\n1.'
  },

  {
    presetId: 3,
    presetName: 'Classification',
    presetIcon: 'fa-solid fa-tags fa-2xl',
    presetColor: '#e5bf99',
    presetEngine: 'text-davinci-002',
    presetPrompt: 'The following is a list of companies and the categories they fall into: \n\nApple, Facebook, Fedex \n\nApple Category:'
  },

  {
    presetId: 4,
    presetName: 'Mood to Color',
    presetIcon: 'fa-solid fa-face-smile fa-2xl',
    presetColor: '#fda9c9',
    presetEngine: 'text-curie-001',
    presetPrompt: 'The CSS code for a color like a blue sky at dusk: \n\nbackground-color: #'
  },

  {
    presetId: 5,
    presetName: 'Review Creator',
    presetIcon: 'fa-solid fa-comment fa-2xl',
    presetColor: '#91c975',
    presetEngine: 'text-davinci-002',
    presetPrompt: 'Write a restaurant review based on these notes: \n\nName: The Blue Wharf \nLobster great, noisy, service polite, prices good. \n\nReview:'
  }
];

export default presets;