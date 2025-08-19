const projectsData = [
  // React project
  {
    id: 'front-end-dev-project',
    type: 'coding',
    title: 'Front End Development Project: React Restaurant App',
    description: 'This is the final capstone project for the Meta Front End Developer certification course available on Coursera.',
    image: '/images/react_capstone_thumb.png',
    longDescription: 'This React app is a basic version of a restaurant app made for the fictional restaurant Little Lemon. While my course required a booking form feature, I also endeavoured to include basic pages for an About page, a Menu for ordering online, and a very basic cart.',
    startdate: 'Jul 2025',
    enddate: 'Aug 2025',
    githubLink: 'https://github.com/H0L0GH05t/react-capstone',
    liveDemoLink: 'https://react-capstone-three.vercel.app/',
    report: {
      overview: {
        content: `This is the final capstone project for the Meta Front End Developer certification course available on Coursera.`,
      },
      sections: [
        {
          heading: 'Project Overview',
          columns: [
            {
              body: [
                {
                  subheading: 'The Problem:',
                  type: 'text',
                  value: `The (fictitious) Little Lemon restaurant has a basic app that they are not entirely happy with. They would like a booking feature to allow users to reserve a table at the restaurant.`
                },
              ]
            },
            {
              body: [
                {
                  subheading: 'The Goal:',
                  type: 'text',
                  value: `Create a React app for the Little Lemon restaurant that includes a booking page for reserving a table.`
                },
              ]
            }
          ],
        },
        {
          heading: 'User Research',
          image: {
            src: '/images/react_ux_persona.png',
            alt: 'User Persona for Dima',
          },
          columns: [
            {
              body: [
                {
                  type: 'text',
                  value: `I created a user persona based on the given problem: The restaurant Little Lemon needs an updated app that includes the ability to book a table.`,
                },
                {
                  subheading: 'Problem Statement:',
                  type: 'text',
                  value: 'Dima frequently dines out at restaurants with her friends and sister, but needs a reliable way to book a table ahead of time that would not take too much time out of her busy day.'
                },
              ]
            },
          ],
        },
        {
          heading: 'User Journey Map',
          columns: [
            {
              body: [
                {
                  type: 'image',
                  src: '/images/react_ux_journey_map.png',
                  alt: 'User Journey map for the persona Dima',
                }
              ]
            },
          ],
        },
        {
          heading: 'Starting the Design',
          columns: [
            {
              body: [
                {
                  type: 'text',
                  value: 'I was given the style guide below, and a (rather small) thumbnail of what the homepage of the app looks like. From these starting points, my task was to create the booking page that the "Reserve a table" button would lead to.',
                },
                {
                  type: 'image',
                  src: '/images/little_lemon_stylesheet.jpg',
                  alt: 'Style Sheet provided for Little Lemon Restaurant',
                },
              ]
            },
          ],
        },
        {
          heading: 'Designing the Booking Page',
          columns: [
            {
              body: [
                {
                  subheading: 'Digital Wireframe',
                  type: 'image',
                  src: '/images/wireframe_react.png',
                  alt: 'Digital wireframe for Little Lemon app',
                },
                {
                  type: 'text',
                  value: 'I started with a basic design, keeping the feel of the homepage design in mind. I added the homepage thumbnail to my Figma wireframe as a starting point.',
                }
              ],
            },
          ],
        },
        {
          heading: 'Initial High-fidelity Prototype',
          image: {
            src: '/images/hifi_react_prototype.png',
            alt: 'High Fidelity Prototype for Little Lemon app',
          },
        },
        {
          heading: 'Peer Review',
          columns: [
            {
              body: [
                {
                  type: 'text',
                  value: 'With the prototype ready for initial testing, we were required to submit for peer review. As a result of the review, I made the few changes listed below before proceeding to coding the app.',
                },
              ]
            }
          ]
        },
        {
          columns: [
            {
              body: [
                {
                  subheading: 'Add Contact Method',
                  type: 'text',
                  value: 'It was mentioned that there is no way to contact the person making the reservation. I decided to add a field to the form that switches between either an email address or a phone number.',
                },
              ],
            },
            {
              body: [
                {
                  subheading: 'Additional Form Field: Occasion',
                  type: 'text',
                  value: 'As an additional requirement for the project, I needed to add an optional field for "Occasion" so the user can indicate that they are celebrating.',
                },
              ]
            },
            {
              body: [
                {
                  subheading: 'Additional Form Field: Special Notes',
                  type: 'text',
                  value: 'Because I needed to add a field for "Occasion" I felt it would also be a good idea to include an optional text field for adding special notes, instead of the radio buttons for requesting booster chairs or selecting outdoor seating. That way people can also have a place to  mention allergies or other special requests that might be helpful for the restaurant to know.',
                },
              ],
            }
          ],
        },
        {
          heading: 'The Final Design',
          image: {
            src: '/images/homepage_desktop.png',
            alt: 'Final homepage design for Little Lemon app',
          },
        },
        {
          columns: [
            {
              body: [
                {
                  type: 'text',
                  value: 'With feedback in mind, it was now time to start coding. I added the components I needed, then filled them out with necessary functions and data.',
                },
                {
                  type: 'text',
                  value: 'I made sure that the app was responsive and would look good both on a wide desktop screen as well as a smaller tablet or mobile screen.',
                },
                {
                  type: 'image',
                  src: '/images/booking-page_smaller_screen.png',
                  alt: 'Final booking page design for Little Lemon app',
                },
              ]
            },
            {
              body: [
                {
                  type: 'image',
                  src: '/images/booking-confirmation-page_smaller_screen.png',
                  alt: 'Final booking confirmation page design for Little Lemon app',
                },
              ]
            },
          ]
        },
      ],
      figmaEmbed: {
        title: 'Embedded Interactive High Fidelity Prototype',
        subheading: '*(Figma account required)',
        url: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F19nin28p71AtyC5OXX7h8m/Little-Lemon%2F',
      },
      goingForward: {
        title: 'Going Forward',
        body: [
          {
            columns: [
              {
                body: [
                  {
                    subheading: 'What I Learned:',
                    type: 'text',
                    value: `Considering this is my first full React project, I have come to really appreciate the simplicity of components in React, and how easy it is to make an app that looks great because of React's built-in features. I also learned that debugging in React is a bit different than Python, and has different tips and tricks for finding the source of a problem.`,
                  },
                ],
              },
            ],
          },
          {
            listHeader: 'Next Steps:',
            listItems: [
              'To improve this app, I could work more on the cart functionality to increase usability.',
              'This app would be more complete with a working API for booking tables that uses real-world data for available times.',
              'As a "nice to have" feature, it might be good to add a reservation lookup where users can enter their email or phone number into a search bar to find open reservations they have made in order to confirm or make changes to it.',
            ],
          },
        ],
      },
    },
  },

  // UI/UX Movie Theater App
  {
    id: 'ui-ux-design-project',
    type: 'design',
    title: 'UI/UX Design Project: Movie Theater Snack App',
    description: 'My first official UI/UX Design project was completed as part of the Google UI/UX Design course. This design is for a movie theater snack app that would allow customers to view an updated menu from their device, place orders, and optionally have the order delivered to their seat while watching the movie.',
    image: '/images/ux_project_thumb.png',
    longDescription: 'As part of my Google UX Design class, I designed a mobile app for a (fictional) local movie theater. The idea was to act as if I am working for an actual local theater owner by iterating my way through the design process and applying feedback.',
    startdate: 'May 2024',
    enddate: 'Dec 2024',
    // Design-specific links
    lofiFigmaLink: 'https://www.figma.com/proto/Coj3t1pGIdtWJ5fK2uP1NK/Movie-Theater-Snack-App',
    hifiFigmaLink: 'https://www.figma.com/design/Coj3t1pGIdtWJ5fK2uP1NK/Movie-Theater-Snack-App',
    report: {
      sections: [
        {
          heading: 'Project Overview',
          columns: [
            {
              body: [
                {
                  subheading: 'The Problem:',
                  type: 'text',
                  value: `The line for the concession stand at the local theater has a tendency to get backed up, especially when there is a premiere night event. It makes it difficult for people to get snacks before their movie starts, and for mobility-impaired people it is difficult to navigate and stressful.`
                },
              ]
            },
            {
              body: [
                {
                  subheading: 'The Goal:',
                  type: 'text',
                  value: `Create a simple mobile app that customers of the theater can use to order concession snacks to avoid long lines forming at the concession stand.`
                },
              ]
            }
          ],
        },
        {
          heading: 'User Research',
          columns: [
            {
              body: [
                {
                  type: 'text',
                  value: 'I conducted user interviews, which I then turned into empathy maps to better understand the users and their needs. I discovered that the concession stand often has a long line that causes frustration for the users that would like snacks but don’t want to have to plan for if the concession stand has a long line. When a popular movie is released, it is especially difficult to navigate to and from the concession stand, as well as plan for how early to arrive in order to get snacks and find seats before the movie starts. The chaotic atmosphere is quite stressful, distracting from the enjoyment of visiting the movie theater.'
                },
              ],
            },
          ],
        },
        {
          heading: 'Pain Points',
          columns: [
            {
              body: [
                {
                  subheading: 'Long Concession Stand Lines',
                  type: 'text',
                  value: 'The theater concession stand often has long lines, which results in crowding at the front of the theater and frustrating wait times.',
                },
              ]
            },
            {
              body: [
                {
                  subheading: 'Difficult to read menu',
                  type: 'text',
                  value: 'Due to limited space, the menu for the concession stand uses smaller print that is difficult to read, especially when the line is long.',
                },
              ]
            },
            {
              body: [
                {
                  subheading: 'Visibility of deals',
                  type: 'text',
                  value: 'Customers often miss the new deals and combos offered due since there is no room for larger announcement boards.',
                },
              ]
            },
          ],
        },
        {
          heading: 'Persona: Evie',
          columns: [
            {
              body: [
                {
                  subheading: 'Problem Statement:',
                  type: 'text',
                  value: 'Evie is a frequent movie-goer who needs a more convenient way to order snacks at the theater she frequents because she has mobility limitations that make standing in line difficult for her.',
                },
                {
                  type: 'image',
                  src: '/images/ux_case_study_persona.png',
                  alt: 'User Journey map for the persona Evie',
                }
              ]
            },
          ],
        },
        {
          heading: 'User Journey Map',
          columns: [
            {
              body: [
                {
                  type: 'text',
                  value: 'I created a user journey map of Evie’s experience using the app to help identify possible pain points and improvement opportunities.',
                },
                {
                  type: 'image',
                  src: '/images/ux_journey_map_evie.png',
                  alt: 'User Journey map for the persona Evie',
                }
              ]
            },
          ],
        },
        {
          heading: 'Starting the Design',
          columns: [
            {
              body: [
                {
                  subheading: 'Sitemap',
                  type: 'text',
                  value: 'My goal here was to make strategic information architecture decisions that would lend to a simple and easy to navigate app.',
                },
                {
                  type: 'image',
                  src: '/images/ux_case_study_sitemap.png',
                  alt: 'Sitemap for movie theater snack app',
                },
                {
                  subheading: 'Paper Wireframes',
                  type: 'text',
                  value: 'Next, I sketched out paper wireframes for each screen in my app, keeping in mind how the organization of buttons affects the ability to find items, as well as ease-of-use.',
                },
                {
                  subheading: 'Layout Choices',
                  type: 'image',
                  src: '/images/home_v1_paper_wireframe_choices.jpg',
                  alt: 'Paper Wireframe options for home page',
                },
                {
                  type: 'text',
                  value: 'I created 5 different layouts for the homepage which would show the featured deals and chose the elements that would appear in the final design.',
                },
                {
                  subheading: 'First Sketches of Each Important Page',
                  type: 'image',
                  src: '/images/first_sketches.png',
                  alt: 'Paper Wireframe for other important pages',
                },
                {
                  type: 'text',
                  value: 'Repeating the same proceses, I created scetches of each important page for the app.',
                },
                {
                  subheading: 'Selected Design',
                  type: 'image',
                  src: '/images/selected_homepage.png',
                  alt: 'Selected paper wireframe design for the homepage',
                },
                {
                  type: 'text',
                  value: 'With elements chosen, I put them together to form the first version of the Home page, showing that the navigation screen will open when tapping the hamburger menu on the top left.',
                },
                {
                  subheading: 'Paper Wireframe Screen Size Variation',
                  type: 'text',
                  value: `Because theater customers don’t always have access to mobile devices, I started to work on designs for a desktop version to make sure the site would be fully responsive when customers want to purchase snacks in advance to pick up when they arrive.`,
                },
                {
                  type: 'image',
                  src: '/images/paper_wireframe_screen_size_variation.png',
                  alt: 'Paper wireframe for larger screen size',
                },
                {
                  subheading: 'Digital Wireframes',
                  type: 'text',
                  value: `Moving from paper to digital wireframes made it easier to understand how the redesign could help address user pain points and improve the user experience.`,
                },
                {
                  subheading: 'Digital Wireframe First Draft',
                  type: 'image',
                  src: '/images/digital_wireframe_v1.png',
                  alt: 'Digital wireframe version 1',
                },
                {
                  type: 'text',
                  value: 'Categories are easy to find by tapping the hamburger menu icon. Included option to have order delivered to seat or pick-up at the concession stand available at checkout.',
                },
                {
                  subheading: 'Digital Wireframe Screen Size Variation',
                  type: 'image',
                  src: '/images/digital_wireframe_screen_size.png',
                  alt: 'Digital wireframes for larger screen size',
                },
              ]
            },
          ],
        },
        {
          heading: 'Prototyping',
          columns: [
            {
              body: [
                {
                  subheading: 'Low-fidelity Prototype',
                  type: 'text',
                  value: 'To create a low-fidelity prototype, I connected all of the screens involved in the primary user flow of adding an item to the cart and checking out.',
                },
                // {
                //   type: 'link',
                //   url: 'lofiFigmaLink',
                //   text: 'View the low-fidelity prototype',
                // },
                {
                  subheading: 'Lofi Prototype',
                  type: 'image',
                  src: '/images/lofi_prototype_screenshot.png',
                  alt: 'Lofi prototype for movie theater snack app',
                },
                {
                  subheading: 'Lofi Prototype Connections',
                  type: 'image',
                  src: '/images/lofi_prototype_connections.png',
                  alt: 'Lofi prototype screenshot showing connections for movie theater snack app',
                },
                {
                  type: 'text',
                  value: 'Above you can see the connections for the user flow made in Figma. I connected each screen together logically and applied basic transition animations.',
                }
              ],
            },
          ],
        },
        {
          columns: [
            {
              body: [
                {
                  listHeader: 'Usability Study',
                  listItems: [
                    'Study Type: Unmoderated usability study',
                    'Location: United States, Remote',
                    'Participants: 5 participants',
                    'Length: 10-20 minutes',
                  ],
                },
              ]
            },
            {
              body: [
                {
                  type: 'text',
                  value: 'The overall impression of the app was positive, although there were a few key insights that were common.',
                },
              ]
            }
          ]
        },
        {
          columns: [
            {
              body: [
                {
                  subheading: 'Account',
                  type: 'text',
                  value: `During the checkout process, there wasn’t a way for users to log in so they could pre-fill with previously used billing info`,
                },
              ]
            },
            {
              body: [
                {
                  subheading: 'Delivery Tip',
                  type: 'text',
                  value: `During the checkout process, there wasn’t a way for users to log in so they could pre-fill with previously used billing info`,
                },
              ]
            },
            {
              body: [
                {
                  subheading: 'Navigation',
                  type: 'text',
                  value: 'Most users were able to navigate to the cart, but a few users had a difficult time trying to browse for specific items',
                },
              ]
            }
          ]
        },
        {
          heading: 'Refining the Design',
          columns: [
            {
              body: [
                {
                  subheading: 'Mockups',
                  type: 'text',
                  value: `Based on insights from the usability study, I made changes to improve the app’s checkout flow. One of the changes I made was adding a “Profile and Settings” page to store payment information to a user’s account for faster checkout.`,
                },
                {
                  type: 'image',
                  src: '/images/mockup_changes.png',
                  alt: 'Changes made to cart icon area based on usability study for mockup'
                },
                {
                  type: 'text',
                  value: `As per the suggestion of several users in my usability study, I also added the option to add a tip when choosing delivery while checking out.`,
                },
                {
                  type: 'image',
                  src: '/images/mockup_changes2.png',
                  alt: 'Changes made to check out based on usability study for mockup'
                },
              ],
            }
          ],
        },
        {
          heading: 'The Final Design',
          columns: [
            {
              body: [
                {
                  subheading: 'Original Screen Size Mockup',
                  type: 'image',
                  src: '/images/mockup_original_screensize.png',
                  alt: 'Final mockup for smaller screen size',
                },
                {
                  type: 'text',
                  value: 'With feedback in mind, it was now time to start coding. I added the components I needed, then filled them out with necessary functions and data.',
                },
              ]
            },
            {
              body: [
                {
                  subheading: 'Screen Size Variation Mockup',
                  type: 'text',
                  value: 'I included considerations for tablet or desktop sized screens as well in my mockups based on my earlier wireframes. This way, users have an option to use a larger device, or they can order ahead of time from home if they don’t have a smart device.',
                },
                {
                  type: 'image',
                  src: '/images/mockup_screen_size_larger.png',
                  alt: 'Final design mockup for larger screen size',
                },
              ]
            },
            {
              body: [
                {
                  subheading: 'High-fidelity prototype',
                  type: 'text',
                  value: 'My hi-fi prototype followed the same user flow as the lo-fi prototype, and included to design changes made after the usability study, as well as a few updates for enhanced contrast and readability.',
                },
                {
                  type: 'image',
                  src: '/images/hifi_prototype_connections.png',
                  alt: 'Final design mockup for larger screen size',
                },
                // {
                //   type: 'link',
                //   url: 'hifiFigmaLink',
                //   text: 'View the high-fidelity prototype',
                // },
              ]
            },
          ]
        },
        {
          heading: 'Accessibility Considerations',
          columns: [
            {
              body: [
                {
                  type: 'text',
                  value: 'I used headings with different sized text for clear visual hierarchy',
                },
              ]
            },
            {
              body: [
                {
                  type: 'text',
                  value: 'I designed the app with alt text available on each page for smooth screen reader access.',
                },
              ]
            },
            {
              body: [
                {
                  type: 'text',
                  value: 'I adjusted my color choices by testing them against the types of colorblindness using davidmathlogic.com to ensure proper contrast.',
                },
              ]
            },
          ]
        },
      ],
      figmaEmbed: {
        title: 'Embedded Interactive High Fidelity Prototype',
        subheading: '*(Figma account required)',
        url: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FCoj3t1pGIdtWJ5fK2uP1NK/Movie-Theater-Snack-App?node-id=214-812&p=f&scaling=contain&content-scaling=fixed&page-id=182%3A705%2F',
      },
      goingForward: {
      title: 'Going Forward',
      body: [
        {
          columns: [
            {
              body: [
                {
                  subheading: 'Impact:',
                  type: 'text',
                  value: `Out target users shared that the design was intuitive to navigate through, and helped save time at the theater. Users especially appreciated the added delivery option.`,
                },
              ],
            },
            {
              body: [
                {
                  subheading: 'What I Learned:',
                  type: 'text',
                  value: `I learned that nothing can replace actual feedback from a wide variety of users. I was amazed at how differently people of different ages and backgrounds interacted with the app, and enjoyed being able to tweak the design with each piece of feedback.`,
                },
              ],
            },
          ],
        },
        {
          listHeader: 'Next Steps:',
          listItems: [
            'Conduct follow-up usability testing on the new website',
            'Identify any additional areas of need and ideate on new features',
          ],
        },
      ],
    },
    },
  },

  // Self-replicating code project
  {
    id: 'self-replicating-coding-project',
    type: 'coding',
    title: 'Software Development Project: Self Replicating Code',
    description: 'This example project is a good showcase for my web app development skills. It uses Python/Django and accesses the Github Auth API.',
    image: '/images/self_replicator_thumb.png',
    githubLink: 'https://github.com/H0L0GH05t/selfreplicator',
    liveDemoLink: 'https://selfreplicator.onrender.com',
    report: {
      overview: {
        content: 'The following project was a take-home coding exam I did as part of an interview. The web app simply replicates itself (as in its own code) into the user\'s Github repository with the click of a button. It\'s built with Python/Django and utilizes Github API endpoints. The app is being hosted on a free server, so when loading it for the first time in a while, it takes quite a bit of time to load. After the first time it responds normally. The page includes its own readable documentation as well that covers how it works and what is required to create it.',
      },
      sections: [
        {
          columns: [
            {
              body: [
                {
                  type: 'image',
                  src: '/images/self_replicator_github.png',
                  alt: 'Screenshot of Self Replicator on GitHub',
                }
              ]
            },
          ],
        },
      ],
    }
  },
  // PKMN Coin project
  {
    id: 'product-design-project',
    type: 'design',
    title: 'Product Design Project',
    description: 'While my professional experience is in software, I have a passion for art and design in physical products as well. I like to craft things in my spare time and found a need for a particular product myself. This project walks through each step I took in creating marker tokens for Pokemon TCG to help make it easier for players to remember active effects on the playing field.',
    image: '/images/product_design_thumb.png',
    longDescription: 'One day while playing Pokemon Trading Card Game, I realized I had forgotten one of the effects my card does and lamented not having a way to visually represent it. There are tokens to represent two possible conditions (poison and burn), but none to represent any other effect. I decided to solve this problem myself by creating a set of new tokens to represent more of the common conditions found in Pokemon TCG in a visual way.',
    // reportLink: 'link-to-report',// need to make report
    report: {
      overview: {
        content: `This is the final capstone project for the Meta Front End Developer certification course available on Coursera.`,
      },
      sections: [
        {
          heading: 'Project Overview',
          columns: [
            {
              body: [
                {
                  subheading: 'The Problem:',
                  type: 'text',
                  value: `The (fictitious) Little Lemon restaurant has a basic app that they are not entirely happy with. They would like a booking feature to allow users to reserve a table at the restaurant.`
                },
              ]
            },
            {
              body: [
                {
                  subheading: 'The Goal:',
                  type: 'text',
                  value: `Create a React app for the Little Lemon restaurant that includes a booking page for reserving a table.`
                },
              ]
            }
          ],
        },
        {
          heading: 'User Research',
          image: {
            src: '/images/react_ux_persona.png',
            alt: 'User Persona for Dima',
          },
          columns: [
            {
              body: [
                {
                  type: 'text',
                  value: `I created a user persona based on the given problem: The restaurant Little Lemon needs an updated app that includes the ability to book a table.`,
                },
                {
                  subheading: 'Problem Statement:',
                  type: 'text',
                  value: 'Dima frequently dines out at restaurants with her friends and sister, but needs a reliable way to book a table ahead of time that would not take too much time out of her busy day.'
                },
              ]
            },
          ],
        },
        {
          heading: 'User Journey Map',
          columns: [
            {
              body: [
                {
                  type: 'image',
                  src: '/images/react_ux_journey_map.png',
                  alt: 'User Journey map for the persona Dima',
                }
              ]
            },
          ],
        },
        {
          heading: 'Starting the Design',
          columns: [
            {
              body: [
                {
                  type: 'text',
                  value: 'I was given the style guide below, and a (rather small) thumbnail of what the homepage of the app looks like. From these starting points, my task was to create the booking page that the "Reserve a table" button would lead to.',
                },
                {
                  type: 'image',
                  src: '/images/little_lemon_stylesheet.jpg',
                  alt: 'Style Sheet provided for Little Lemon Restaurant',
                },
              ]
            },
          ],
        },
        {
          heading: 'Designing the Booking Page',
          columns: [
            {
              body: [
                {
                  subheading: 'Digital Wireframe',
                  type: 'image',
                  src: '/images/wireframe_react.png',
                  alt: 'Digital wireframe for Little Lemon app',
                },
                {
                  type: 'text',
                  value: 'I started with a basic design, keeping the feel of the homepage design in mind. I added the homepage thumbnail to my Figma wireframe as a starting point.',
                }
              ],
            },
          ],
        },
        {
          heading: 'Initial High-fidelity Prototype',
          image: {
            src: '/images/hifi_react_prototype.png',
            alt: 'High Fidelity Prototype for Little Lemon app',
          },
        },
        {
          heading: 'Peer Review',
          columns: [
            {
              body: [
                {
                  type: 'text',
                  value: 'With the prototype ready for initial testing, we were required to submit for peer review. As a result of the review, I made the few changes listed below before proceeding to coding the app.',
                },
              ]
            }
          ]
        },
        {
          columns: [
            {
              body: [
                {
                  subheading: 'Add Contact Method',
                  type: 'text',
                  value: 'It was mentioned that there is no way to contact the person making the reservation. I decided to add a field to the form that switches between either an email address or a phone number.',
                },
              ],
            },
            {
              body: [
                {
                  subheading: 'Additional Form Field: Occasion',
                  type: 'text',
                  value: 'As an additional requirement for the project, I needed to add an optional field for "Occasion" so the user can indicate that they are celebrating.',
                },
              ]
            },
            {
              body: [
                {
                  subheading: 'Additional Form Field: Special Notes',
                  type: 'text',
                  value: 'Because I needed to add a field for "Occasion" I felt it would also be a good idea to include an optional text field for adding special notes, instead of the radio buttons for requesting booster chairs or selecting outdoor seating. That way people can also have a place to  mention allergies or other special requests that might be helpful for the restaurant to know.',
                },
              ],
            }
          ],
        },
        {
          heading: 'Refining the Design',
          image: {
            src: '/images/ghostgear_screen_variation.png',
            alt: 'Final homepage design for Little Lemon app',
          },
        },
        {
          columns: [
            {
              body: [
                {
                  type: 'text',
                  value: 'My hi-fi prototype followed the same user flow as the lo-fi prototype, and included to design changes made after the usability study, as well as a few updates for enhanced contrast, readability, and better flow.',
                },
                {
                  type: 'image',
                  src: '/images/hifi_prototype_ghostgear.png',
                  alt: 'High-fidelity prototype in Figma showing connections',
                },
              ]
            },
          ]
        },
        {
          heading: "Accessibility Considerations",
          columns: [
            {
              body: [
                {
                  type: 'text',
                  value: 'Token sizing not too small for adults to handle but not too large for children',
                },
              ],
            },
            {
              body: [
                {
                  type: 'text',
                  value: 'All colors are distinct from each other with a clear symbol to be easily identifiable, even by colorblind and vision-impaired users',
                },
              ]
            },
            {
              body: [
                {
                  type: 'text',
                  value: 'Dark mode is available for both mobile and desktop designs',
                },
              ],
            }
          ],
        },
      ],
      figmaEmbed: {
        title: 'Embedded Interactive High Fidelity Prototype',
        subheading: '*(Figma account required)',
        url: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIOBro7nB0Z8jGhBNgYhVzn/Ghost-Gear-Website%2F',
      },
      goingForward: {
        title: 'Going Forward',
        body: [
          {
            columns: [
              {
                body: [
                  {
                    subheading: 'Impact:',
                    type: 'text',
                    value: `The target users shared that the tokens were an excellent addition that made it easier to play, especially when learning a new game or deck. Additionally, the website to buy them is intuitive and stylized in a nostalgic way.`,
                  },
                ],
              },
              {
                body: [
                  {
                    subheading: 'What I Learned:',
                    type: 'text',
                    value: `I learned that I can apply the design process to physical products just as much as digital ones. There’s quite a bit of fun and joy to have watching people handle a new product and form opinions, and finally nailing the design leaves a great sense of accomplishment.`,
                  },
                ],
              },
            ],
          },
          {
            listHeader: 'Next Steps:',
            listItems: [
              'Code the website and app to bring it to life',
              'Conduct follow-up usability testing on the updated website and app designs',
              'Identify any additional areas of need and ideate on new features',
            ],
          },
        ],
      },
    },
  },
];

export default projectsData;