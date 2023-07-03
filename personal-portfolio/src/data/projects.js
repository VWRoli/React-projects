export const projects = [
  {
    id: 3,
    title: 'Guitar Store',
    reverse: true,
    img: '/img/guitar-store.png',
    tags: ['JavaScript', 'React', 'Redux', 'Sass', 'API'],
    codeUrl: 'https://github.com/VWRoli/guitar-store',
    liveUrl: 'https://guitar-store-site.netlify.app/',
    desc: [
      'Complete frontend for a Guitar E-Commerce website with a compare and cart section. ',
      'Products are paginated and can be filtered, sorted, searched. ',
      'Used JSON Server for creating the Rest API for storing product data. ',
      'Build with React, Sass, React Router, Redux, and different React Hooks.',
    ],
  },
  {
    id: 1,
    title: 'Budgetly',
    img: '/img/budgetly.png',
    tags: [
      'Typescript',
      'NestJS',
      'API',
      'Postman',
      'TypeORM',
      'NodeJs',
      'Jest',
    ],
    codeUrl: 'https://github.com/VWRoli/budgetly-backend',

    desc: [
      'REST API for a budgeting application using NestJS, TypeORM, and MySQL. ',
      'Secure and scalable solution: Ensured robust security measures and scalability for handling increasing user demands. ',
      'Customizable architecture: Modular structure allows for easy customization and future enhancements. ',
      'Added unit and e2e tests with Jest',
    ],
  },
  {
    id: 2,
    title: 'Guitar Practice Assistant',
    img: '/img/practice-assistant.png',
    tags: [
      'Typescript',
      'React',
      'Sass',
      'Redux',
      'MongoDB',
      'NodeJs',
      'ExpressJS',
      'API',
    ],
    codeUrl: 'https://github.com/VWRoli/guitar-practice-assistant',
    liveUrl: 'https://guitar-pa.netlify.app',
    desc: [
      'Guitar practice assistant app, with a built-in metronome. ',
      'The app is built with Typescript with MERN stack and using RESTful API design. ',
      'I used Redux for state management, Node & Express for API, MongoDB as a database. ',
      '***Credentials: (username: demoUser1 password: 123456Aa!)',
    ],
  },

  {
    id: 4,
    title: 'Crypto Portfolio Tracker',
    img: '/img/cryptofolio.png',
    tags: ['Typescript', 'React', 'Redux', 'Sass', 'API'],
    codeUrl: 'https://github.com/VWRoli/Redux-cryptofolio',
    liveUrl: 'https://cryptofolio-app.netlify.app/',
    desc: [
      'Cryptocurrency portfolio tracker application. Select or search the currencies you want to add to your portfolio. ',
      'Track the value of your assets. Take a look at the price change chart. ',
      'Build with React, state management with Redux. For styling I used Sass. ',
      'For getting the currency information I worked with the CoinGecko API.',
    ],
  },

  {
    id: 5,
    title: 'Memory Card Game',
    reverse: true,
    img: '/img/memory-card-game.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    codeUrl: 'https://codepen.io/VWRoli/pen/MWjqVpg',
    liveUrl: 'https://codepen.io/VWRoli/pen/MWjqVpg',
    desc: [' Memory card game. Created with only Vanilla JS.'],
  },
];
