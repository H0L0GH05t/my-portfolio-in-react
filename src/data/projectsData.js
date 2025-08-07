const projectsData = [
  {
    id: 'front-end-dev-project',
    type: 'coding',
    title: 'Front End Development Project',
    description: 'This is the final capstone project for the Meta Front End Developer certification course available on Coursera.',
    image: '/images/react_capstone_thumb.png',
    longDescription: 'This React app is a basic version of a restaurant app made for the fictional restaurant Little Lemon. While my course required a booking form feature, I also endeavoured to include basic pages for an About page, a Menu for ordering online, and a very basic cart.',
    githubLink: 'https://github.com/H0L0GH05t/react-capstone',
    liveDemoLink: 'https://react-capstone-three.vercel.app/',
  },
  {
    id: 'ui-ux-design-project',
    type: 'design',
    title: 'UI/UX Design Project',
    description: 'My first official UI/UX Design project was completed as part of the Google UI/UX Design course. This design is for a movie theater snack app that would allow customers to view an updated menu from their device, place orders, and optionally have the order delivered to their seat while watching the movie.',
    image: '/images/ux_project_thumb.png',
    longDescription: 'As part of my Google UX Design class, I designed a mobile app for a (fictional) local movie theater. The idea was to act as if I am working for an actual local theater owner by iterating my way through the design process and applying feedback.',
    // Design-specific links
    lofiFigmaLink: 'https://www.figma.com/proto/Coj3t1pGIdtWJ5fK2uP1NK/Movie-Theater-Snack-App',
    hifiFigmaLink: 'https://www.figma.com/design/Coj3t1pGIdtWJ5fK2uP1NK/Movie-Theater-Snack-App',
    report: {
      overview: {
        title: 'Project Overview',
        content: `Project Alpha was a full-stack web application designed to help users manage their personal finance goals. The goal was to create a simple, intuitive interface that provided a clear visual representation of their spending and saving habits.`,
      },
      sections: [
        {
          heading: 'Technical Stack',
          content: `The front end was built with React, leveraging state management with Redux. The back end used a Node.js server with Express, and data was stored in a PostgreSQL database.`,
        },
        {
          heading: 'Challenges & Solutions',
          content: `One of the main challenges was accurately syncing real-time data from financial APIs. We solved this by implementing a periodic sync mechanism and a caching layer to improve performance and reduce API calls.`,
        },
        {
          heading: 'Design Process',
          content: `The design process began with wireframing and user flow mapping. High-fidelity prototypes were created using Figma, focusing on a minimalist aesthetic to reduce cognitive load for the user.`,
        },
        {
          heading: 'Key Visuals',
          image: {
            src: 'https://via.placeholder.com/800x450?text=Project+Alpha+Dashboard',
            alt: 'Dashboard view of Project Alpha',
          },
        },
      ],
      goingForward: {
        title: 'Going Forward',
        content: `Future improvements for Project Alpha include adding mobile responsiveness and implementing machine learning algorithms to provide personalized financial recommendations.`,
      },
    },
  },
  {
    id: 'self-replicating-coding-project',
    type: 'coding',
    title: 'Software Development Project: Self Replicating Code',
    description: 'This example project is a good showcase for my web app development skills. It uses Python/Django and accesses the Github Auth API.',
    image: '/images/self_replicator_thumb.png',
    longDescription: 'The following project was a take-home coding exam I did as part of an interview. The web app simply replicates itself (as in its own code) into the user\'s Github repository with the click of a button. It\'s built with Python/Django and utilizes Github API endpoints. The app is being hosted on a free server, so when loading it for the first time in a while, it takes quite a bit of time to load. After the first time it responds normally. The page includes its own readable documentation as well that covers how it works and what is required to create it.',
    githubLink: 'https://github.com/H0L0GH05t/selfreplicator',
    liveDemoLink: "https://selfreplicator.onrender.com"
  },
  {
    id: 'product-design-project',
    type: 'design',
    title: 'Product Design Project',
    description: 'While my professional experience is in software, I have a passion for art and design in physical products as well. I like to craft things in my spare time and found a need for a particular product myself. This project walks through each step I took in creating marker tokens for Pokemon TCG to help make it easier for players to remember active effects on the playing field.',
    image: '/images/product_design_thumb.png',
    longDescription: 'One day while playing Pokemon Trading Card Game, I realized I had forgotten one of the effects my card does and lamented not having a way to visually represent it. There are tokens to represent two possible conditions (poison and burn), but none to represent any other effect. I decided to solve this problem myself by creating a set of new tokens to represent more of the common conditions found in Pokemon TCG in a visual way.',
    // reportLink: 'link-to-report',// need to make report
  },
  // {
  //   id: 'design-project-example',
  //   type: 'design',
  //   title: 'Example Design Project',
  //   description: 'An example design project',
  //   image: '/images/example_design_project_thumb.png',
  //   longDescription: 'Full description goes here',
  //   dribbbleLink: 'https://dribbble.com/yourusername/project',
  // },
  // {
  //   id: 'coding-project-example',
  //   type: 'coding',
  //   title: 'Example Coding Project',
  //   description: 'An example coding project.',
  //   image: '/images/example_coding_project_thumb.png',
  //   longDescription: 'Full description goes here',
  //   githubLink: 'https://github.com/yourusername/project',
  // },
];

export default projectsData;