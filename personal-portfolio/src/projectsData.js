export const projectsData = [
  {
    id: 1,
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
    id: 2,
    title: 'Countries',
    img: '/img/countries.png',
    tags: ['CSS', 'React', 'NPM', 'API'],
    codeUrl: 'https://github.com/VWRoli/React-projects/tree/main/countries',
    liveUrl: 'https://countries-2b0dc2.netlify.app/',
    desc: [
      'App that lists all the countries and shows some data about them.',
      'The list is paginated and searchable, and can be filtered by regions.',
      'I used the REST Countries API to get the countries data.',
      'For displaying the countries on the map I used the Leaflet library, with the help of React Leaflet.',
    ],
  },

  {
    id: 3,
    title: 'Memory Card Game',
    img: '/img/memory-card-game.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    codeUrl: 'https://codepen.io/VWRoli/pen/MWjqVpg',
    liveUrl: 'https://codepen.io/VWRoli/pen/MWjqVpg',
    desc: [' Memory card game. Created with only Vanilla JS.'],
  },
  {
    id: 4,
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
