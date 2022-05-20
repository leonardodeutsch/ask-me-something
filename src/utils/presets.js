const presets = [
  {
    presetId: 1,
    presetName: 'Grammar Correction',
    presetIcon: 'icon',
    presetEngine: 'text-davinci-002',
    presetPrompt: 'Correct this to standard English: She no went to the market.'
  },

  {
    presetId: 2,
    presetName: 'Translate from English',
    presetIcon: 'icon',
    presetEngine: 'text-davinci-002',
    presetPrompt: 'Translate this into 1. French, 2. Spanish, 3. Japanese: What rooms do you have available? 1.'
  },

  {
    presetId: 3,
    presetName: 'Classification',
    presetIcon: 'icon',
    presetEngine: 'text-davinci-002',
    presetPrompt: 'The following is a list of companies and the categories they fall into: Apple, Facebook, Fedex; Apple Category:'
  },

  {
    presetId: 4,
    presetName: 'Mood to color',
    presetIcon: 'icon',
    presetEngine: 'text-davinci-002',
    presetPrompt: 'The CSS code for a color like a blue sky at dusk: background-color: #'
  },

  {
    presetId: 5,
    presetName: 'Restaurant review creator',
    presetIcon: 'icon',
    presetEngine: 'text-davinci-002',
    presetPrompt: 'Write a restaurant review based on these notes: Name: The Blue Wharf; Lobster great, noisy, service polite, prices good. Review:'
  }
];

export default presets;