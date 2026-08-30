import experience from '../data/experience';
import Reveal from './Reveal';
import Section from './Section';
import Tag from './Tag';

function Role({ job, delay }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="group grid gap-6 border-t border-line py-12 first:border-t-0 first:pt-0 sm:grid-cols-[9.5rem_1fr] sm:gap-10"
    >
      <div className="font-mono text-[13px] text-faint sm:text-xs">
        <p className="transition-colors duration-500 group-hover:text-ink">{job.period}</p>
        <p className="mt-1.5">{job.location}</p>
        {job.current && (
          <p className="mt-3 flex items-center gap-2 text-accent">
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent"
              style={{ animation: 'breathe 2.8s ease-in-out infinite' }}
              aria-hidden="true"
            />
            Current
          </p>
        )}
      </div>

      <div>
        <h3 className="text-2xl font-medium tracking-tight">{job.company}</h3>
        <p className="mt-1 text-[15px] text-muted sm:text-sm">{job.role}</p>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-[15px]">
          {job.summary}
        </p>

        <ul className="mt-6 max-w-2xl space-y-3">
          {job.points.map((point) => (
            <li
              key={point}
              className="relative pl-6 text-base leading-relaxed text-muted before:absolute before:left-0 before:top-[0.72em] before:h-px before:w-3 before:bg-faint sm:text-[15px]"
            >
              {point}
            </li>
          ))}
        </ul>

        <ul className="mt-8 flex flex-wrap gap-1.5">
          {job.stack.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </ul>

        <ul className="mt-2 flex flex-wrap gap-1.5">
          {job.tools.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <div>
        {experience.map((job, index) => (
          <Role key={job.company} job={job} delay={index * 60} />
        ))}
      </div>
    </Section>
  );
}
