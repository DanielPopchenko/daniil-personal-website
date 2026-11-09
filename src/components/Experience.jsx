import { motion } from 'motion/react';
import experience from '../data/experience';
import { fadeUp, sequence, VIEWPORT } from '../lib/motion';
import CountUp from './CountUp';
import Section from './Section';
import Tag from './Tag';

const chapter = sequence(0.08);
const group = sequence(0.06);

function Metric({ metric }) {
  return (
    <motion.div variants={fadeUp} className="border-t border-line pt-4">
      <p className="font-display text-[2.75rem] leading-none tracking-[-0.02em] text-ink sm:text-5xl">
        {metric.value === undefined ? (
          metric.display
        ) : (
          <CountUp to={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
        )}
      </p>
      <p className="mt-3 max-w-[14rem] text-[0.8125rem] leading-snug text-muted sm:text-xs">
        {metric.label}
      </p>
    </motion.div>
  );
}

function Role({ job, index, total }) {
  return (
    <motion.article
      variants={chapter}
      initial="hidden"
      whileInView="shown"
      viewport={VIEWPORT}
      className="sweep group grid gap-6 border-t border-line py-12 first:border-t-0 first:pt-0 sm:grid-cols-[9.5rem_1fr] sm:gap-10"
    >
      <motion.div
        variants={fadeUp}
        className="font-mono text-[0.8125rem] text-faint sm:sticky sm:top-28 sm:self-start sm:text-xs"
      >
        <p className="mb-5 hidden text-faint/60 sm:block">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </p>
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
      </motion.div>

      <div>
        <motion.div variants={fadeUp}>
          <h3 className="text-2xl font-medium tracking-tight">{job.company}</h3>
          <p className="mt-1 text-[0.9375rem] text-muted sm:text-sm">{job.role}</p>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-[0.9375rem]"
        >
          {job.summary}
        </motion.p>

        {job.metrics?.length > 0 && (
          <motion.div
            variants={group}
            className="mt-8 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3"
          >
            {job.metrics.map((metric) => (
              <Metric key={metric.label} metric={metric} />
            ))}
          </motion.div>
        )}

        <motion.ul variants={group} className="mt-8 max-w-2xl space-y-3">
          {job.points.map((point) => (
            <motion.li
              key={point}
              variants={fadeUp}
              className="relative pl-6 text-base leading-relaxed text-muted before:absolute before:left-0 before:top-[0.72em] before:h-px before:w-3 before:bg-faint sm:text-[0.9375rem]"
            >
              {point}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div variants={fadeUp}>
          <ul className="mt-8 flex flex-wrap gap-1.5">
            {job.stack.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </ul>

          <ul className="mt-2 flex flex-wrap gap-1.5">
            {job.tools.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.article>
  );
}

export default function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <div>
        {experience.map((job, index) => (
          <Role key={job.company} job={job} index={index} total={experience.length} />
        ))}
      </div>
    </Section>
  );
}
