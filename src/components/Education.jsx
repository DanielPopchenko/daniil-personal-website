import Reveal from './Reveal';
import Section from './Section';

const schools = [
  {
    school: 'IU International University of Applied Sciences',
    location: 'Berlin',
    period: 'Jun 2024 - Jun 2027',
    degree: "Bachelor's, Computer Science",
    body: 'Requirements engineering, system design, OOP, UML and code quality standards, applied to group projects rather than just exams. Also cloud-first applications and data-driven system design. Focus on JavaScript, TypeScript, React, Java, Python, MySQL and AWS.',
  },
  {
    school: 'Riga State Technical College',
    location: 'Riga',
    period: 'Sep 2022 - Jun 2024',
    degree: "Associate's, Information Technology",
    body: 'Where the foundations came from: algorithms, databases and design patterns, plus a lot of small applications built in lab projects. Python, Java, C++, JavaScript, React, MySQL, HTML5 and CSS3.',
  },
];

export default function Education() {
  return (
    <Section id="education" index="04" title="Education">
      {schools.map(({ school, location, period, degree, body }, index) => (
        <Reveal
          key={school}
          delay={index * 80}
          className="grid gap-4 border-t border-line py-8 first:border-t-0 first:pt-0 sm:grid-cols-[9.5rem_1fr] sm:gap-10"
        >
          <div className="font-mono text-[0.8125rem] text-faint sm:text-xs">
            <p>{period}</p>
            <p className="mt-1.5">{location}</p>
          </div>
          <div>
            <h3 className="text-xl font-medium tracking-tight sm:text-lg">{school}</h3>
            <p className="mt-1 text-[0.9375rem] text-muted sm:text-sm">{degree}</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-[0.9375rem]">
              {body}
            </p>
          </div>
        </Reveal>
      ))}
    </Section>
  );
}
