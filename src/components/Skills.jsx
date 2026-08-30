import Reveal from './Reveal';
import Section from './Section';

const groups = [
  {
    label: 'Stack',
    items: [
      'TypeScript',
      'JavaScript',
      'React',
      'Next.js',
      'React Native',
      'Node.js',
      'Express',
      'Nest.js',
      '.NET',
      'Prisma',
      'PostgreSQL',
      'MySQL',
      'GraphQL',
      'Tailwind',
      'SCSS',
      'CSS3',
      'HTML5',
    ],
  },
  {
    label: 'AI tooling',
    items: ['Claude Code / CLI', 'Cursor', 'GitHub Copilot', 'Codex'],
  },
  {
    label: 'Tools',
    items: [
      'Git',
      'GitHub Actions',
      'REST APIs',
      'Redux Toolkit',
      'TanStack Query',
      'Storybook',
      'Framer Motion',
      'Swagger',
      'Zod',
      'Expo',
      'Webpack',
      'Babel',
      'ESLint',
      'Prettier',
      'CI/CD',
      'Agile / Scrum',
    ],
  },
  {
    label: 'Testing',
    items: ['Cypress', 'Jest', 'Vitest', 'Unit', 'E2E', 'UI testing', 'Manual QA'],
  },
  {
    label: 'Design',
    items: ['Figma', 'Material UI', 'Bootstrap'],
  },
  {
    label: 'Languages',
    items: ['English (B2)', 'Ukrainian (native)', 'Latvian (A2)'],
  },
];

export default function Skills() {
  return (
    <Section id="skills" index="03" title="Skills">
      <dl>
        {groups.map(({ label, items }, index) => (
          <Reveal
            key={label}
            delay={index * 70}
            className="grid gap-3 border-t border-line py-6 first:border-t-0 first:pt-0 sm:grid-cols-[9.5rem_1fr] sm:gap-10"
          >
            <dt className="font-mono text-[0.8125rem] uppercase tracking-[0.16em] text-faint sm:text-xs">
              {label}
            </dt>
            <dd className="flex flex-wrap gap-x-5 gap-y-2 text-base text-muted sm:text-[0.9375rem]">
              {items.map((item) => (
                <span key={item} className="transition-colors duration-300 hover:text-ink">
                  {item}
                </span>
              ))}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
