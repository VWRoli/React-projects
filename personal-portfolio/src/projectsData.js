export const projectsData = [
  {
    id: 1,
    title: 'Memory Card Game',
    img: '/img/memory-card-game.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    codeUrl: 'https://codepen.io/VWRoli/pen/MWjqVpg',
    liveUrl: 'https://codepen.io/VWRoli/pen/MWjqVpg',
    desc: [' Memory card game. Created with only Vanilla JS.'],
  },
  {
    id: 2,
    title: 'Guitar Practice Assistant',
    img: '/img/practice-assistant.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'OOP', 'Parcel'],
    codeUrl: 'https://github.com/VWRoli/guitar-practice-assistant',
    liveUrl: 'https://guitar-practice-assistant.netlify.app',
    desc: [
      'Guitar practice assistant app, with a built in metronome, and fretboard memorizer.',
      'You can add new excercises on the left side, which will be saved for your next visit.',
      'For creating the metronome I used the Tone JS library which is built on top of the Web Audio API.',
      'The fretboard memorizer is a simple guessing game built with Vanilla JS.',
    ],
  },
  {
    id: 3,
    title: 'Crypto Website',
    img: '/img/crypto.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'API', 'SEO'],
    codeUrl: 'https://github.com/VWRoli/kriptosuli',
    liveUrl: 'https://kriptosuli-eu.netlify.app/',
    desc: [
      'Cryptocurrency educational website.',
      'Live cryptocurrency tracker using the Coingecko API.',
      'Fully Responsive Website.',
      'Night mode settings, which are saved with LocalStorage.',
    ],
  },
];
