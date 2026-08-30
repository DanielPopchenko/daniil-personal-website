const experience = [
  {
    company: 'Superconnector',
    role: 'Founding Frontend Engineer',
    period: 'Oct 2025 - Current',
    location: 'New York',
    current: true,
    summary:
      'Lead frontend development as the founding Frontend Engineer, owning the application’s frontend architecture, UI/UX, and design system. Operate at the intersection of engineering and product, translating business needs and user feedback into product requirements, technical decisions, and production-ready experiences.',
    points: [
      'Joined as the second frontend engineer and now the only one on the team. Daily active users have gone from 500 to 5,000+ since I started, and it is still climbing.',
      'Own the full lifecycle from idea to production: define the requirements with founders and stakeholders, design the flows, build the frontend, integrate the APIs, deploy the release and keep an eye on it afterwards.',
      'Build with TypeScript, React, Next.js and Tailwind against REST APIs and .NET backend services.',
      'Define data contracts with the backend team and tune how the client talks to them, so features land without surprises.',
      'Use Claude Code and Cursor daily: real context, iterative prompt cycles, then the same code review and testing as anything I wrote by hand.',
      'Startup pace, so I trade speed against quality on purpose and re-cut things as feedback comes in.',
    ],
    stack: ['TypeScript', 'React', 'Next.js', 'Tailwind', 'REST APIs', '.NET'],
    tools: ['Claude Code', 'Cursor', 'Git', 'Code Reviews', 'CI/CD'],
  },
  {
    company: 'Volta',
    role: 'Fullstack Software Engineer',
    period: 'Sep 2024 - Sep 2025',
    location: 'New York',
    summary:
      'A two-sided health platform for universities: a student app on iOS and Android, a web platform for admins, Node services behind both. Frontend was my depth, but I was pulled into backend, mobile and QA whenever it was needed.',
    points: [
      'Helped drive daily active users from 5-10 to 2,000+.',
      'Localized 800+ hard-coded strings with an i18n workflow built on Cursor and Claude, cutting QA and dev effort by 70%.',
      'Built and deployed Storybook component libraries for web and mobile, standardizing the UI and cutting build time by 50%.',
      'Led QA with automated tests (Jest, Vitest, Cypress) plus blackbox and manual testing, reducing runtime errors by 70%.',
      'Designed bug-hunt strategies that boosted defect detection by 200%.',
      'Optimized React rendering and API performance, bringing load times down across devices.',
      'Supported CI/CD with GitHub Actions and worked Agile with international teams: code reviews, pair programming, sprint planning, standups.',
    ],
    stack: [
      'TypeScript',
      'React',
      'React Native',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma',
      'Tailwind',
    ],
    tools: ['Jest', 'Vitest', 'Cypress', 'Storybook', 'GitHub Actions', 'i18n', 'Agile'],
  },
  {
    company: '28software',
    role: 'Frontend Engineer',
    period: 'Nov 2023 - Sep 2024',
    location: 'Tampa',
    summary:
      'Built and shipped features across several web and mobile products for international clients.',
    points: [
      'Delivered end-to-end features and user-centered UI redesigns that made the products easier to use.',
      'Contributed to API development and backend services behind those features.',
      'Led migrations from CSS3 to Tailwind across several projects, which made styling consistent and a lot less painful.',
      'Added unit tests with Jest and Cypress, debugged critical UI and API issues and cut technical debt, improving efficiency by around 50%.',
      'Worked in Agile with product and design teams across time zones.',
    ],
    stack: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'React Native',
      'Node.js',
      'Tailwind',
      'CSS3',
    ],
    tools: ['Jest', 'Cypress', 'Git', 'Agile', 'Code Reviews'],
  },
];

export default experience;
