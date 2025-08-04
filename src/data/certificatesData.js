const certificatesData = [
  {
    id: 'dev-group',
    category: 'Software Development',
    certificates: [
      {
        name: 'React Developer Certification',
        issuer: 'Meta',
        date: 'May 2023',
        link: 'https://example.com/react-cert',
      },
      {
        name: 'Front-End Web Development Bootcamp',
        issuer: 'General Assembly',
        date: 'Dec 2022',
        link: 'https://example.com/frontend-bootcamp',
      },
      {
        name: 'JavaScript Algorithms and Data Structures',
        issuer: 'freeCodeCamp',
        date: 'Sept 2022',
        link: 'https://www.freecodecamp.org/certification/your-username/javascript-algorithms-and-data-structures',
      },
      {
        name: 'Front-End Web Development Bootcamp',
        issuer: 'General Assembly',
        isCourse: true,
        date: 'Dec 2022',
        subCertificates: [
          {
            name: 'Module 1: HTML & CSS',
            date: 'Oct 2022',
            link: 'https://example.com/ga-module1-cert',
          },
          {
            name: 'Module 2: JavaScript Fundamentals',
            date: 'Nov 2022',
            link: 'https://example.com/ga-module2-cert',
          },
          {
            name: 'Final Completion Certificate',
            date: 'Dec 2022',
            link: 'https://example.com/ga-final-cert',
          },
        ],
      },
    ],
  },
  {
    id: 'testing-automation-group',
    category: 'Software Testing and Automation',
    certificates: [
      {
        name: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services',
        date: 'Jan 2024',
        link: 'https://example.com/aws-cert',
      },
      {
        name: 'Docker Fundamentals',
        issuer: 'Udemy',
        date: 'Nov 2023',
        link: 'https://example.com/docker-cert',
      },
    ],
  },
  {
    id: 'design-group',
    category: 'UI/UX Design',
    certificates: [
      {
        name: 'Google UX Design Professional Certificate',
        issuer: 'Google via Coursera',
        date: 'April 2023',
        link: 'https://example.com/google-ux-cert',
      },
      {
        name: 'Figma Basics',
        issuer: 'Design Academy',
        date: 'Feb 2023',
      },
    ],
  },
  {
    id: 'soft-skill-group',
    category: 'Leadership and Project Management',
    certificates: [
      {
        name: 'Google UX Design Professional Certificate',
        issuer: 'Google via Coursera',
        date: 'April 2023',
        link: 'https://example.com/google-ux-cert',
      },
      {
        name: 'Figma Basics',
        issuer: 'Design Academy',
        date: 'Feb 2023',
      },
    ],
  },
];

export default certificatesData;