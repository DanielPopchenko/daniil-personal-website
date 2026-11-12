const experience = [
  {
    company: 'Superconnector',
    role: 'Full-Stack Engineer',
    period: 'Oct 2025 – Oct 2026',
    location: 'New York',
    metrics: [
      { display: '4–5x', label: 'More daily active users after I rebuilt onboarding' },
      { value: 4, label: 'Hats worn: frontend, backend, product and QA' },
    ],
    summary:
      'An early-stage New York startup where I owned features end to end: frontend, backend integration, product decisions and testing. I worked directly with the founders, turned rough ideas into shipped features, and kept the product holding up as usage grew 4–5x.',
    points: [
      'Dug through PostHog recordings to see where people got stuck in onboarding and lead creation. Then I rebuilt those flows. Daily active users went up 4–5x and conversion climbed with them.',
      'Laid the foundations everything else stands on: the frontend architecture, the design system and the shared components.',
      'Built backend endpoints and features alongside the UI, and hashed out API contracts and data flows with the rest of the engineers so things stayed fast and reliable.',
      'Worked on the product side with the founders: scoping features, deciding what to build next and what to cut, then testing it all before release.',
      'Used Claude Code, Codex and Cursor every day to explore, prototype and debug. Every change still had to get past tests, lint and review.',
    ],
    stack: ['TypeScript', 'React', 'Next.js', 'Tailwind', 'REST APIs', '.NET'],
    tools: ['PostHog', 'Claude Code', 'Codex', 'Cursor', 'Git', 'Code Reviews', 'CI/CD'],
  },
  {
    company: 'Volta',
    role: 'Full-Stack Software Engineer',
    period: 'Sep 2024 – Sep 2025',
    location: 'New York',
    metrics: [
      { value: 2000, suffix: '+', label: 'Daily active users. We started with 5–10.' },
      { value: 800, suffix: '+', label: 'Hard-coded strings rescued into i18n' },
      { value: 70, prefix: '−', suffix: '%', label: 'Runtime errors once I took over QA' },
    ],
    summary:
      'A health platform for universities with two sides: an iOS and Android app for students, a web dashboard for admins, and Node services behind both. I worked across all of it, from web and mobile screens to Node and Express endpoints to the testing setup.',
    points: [
      'Dug 800+ hard-coded strings out of the codebase and into a proper i18n setup, with Cursor and Claude doing the grunt work. Localization now takes 70% less QA and dev time.',
      'Built Storybook component libraries for web and mobile, so both apps pull from one box of UI parts. New screens take about half as long to build.',
      'Took over QA: Jest, Vitest and Cypress on the automated side, plus good old manual and blackbox testing for everything automation missed. That’s where the 70% drop in runtime errors came from.',
      'Turned bug hunting into a team game. Our bug hunts caught 3x more defects than before.',
      'Cut wasted React renders and API calls, so pages load faster on every device.',
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
    period: 'Nov 2023 – Sep 2024',
    location: 'Tampa',
    summary:
      'A software studio building web and mobile products for clients around the world. This is where I cut my teeth, hopping between projects, mostly on the frontend.',
    points: [
      'Rebuilt clunky screens and shipped new features end to end, from the UI down to the API and services behind it.',
      'Led the switch from plain CSS to Tailwind across several projects. Styling got consistent, and a lot less painful.',
      'Wrote Jest and Cypress tests, squashed critical UI and API bugs and paid down tech debt. The team got about 50% more efficient for it.',
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
