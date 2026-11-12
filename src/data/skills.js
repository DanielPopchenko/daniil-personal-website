import babel from 'devicon/icons/babel/babel-plain.svg';
import bootstrap from 'devicon/icons/bootstrap/bootstrap-original.svg';
import claude from 'devicon/icons/claude/claude-original.svg';
import css3 from 'devicon/icons/css3/css3-original.svg';
import cursor from 'devicon/icons/cursor/cursor-original.svg';
import cypress from 'devicon/icons/cypressio/cypressio-original.svg';
import dotnet from 'devicon/icons/dot-net/dot-net-original.svg';
import eslint from 'devicon/icons/eslint/eslint-original.svg';
import expo from 'devicon/icons/expo/expo-original.svg';
import express from 'devicon/icons/express/express-original.svg';
import figma from 'devicon/icons/figma/figma-original.svg';
import git from 'devicon/icons/git/git-original.svg';
import githubActions from 'devicon/icons/githubactions/githubactions-original.svg';
import copilot from 'devicon/icons/githubcopilot/githubcopilot-plain.svg';
import graphql from 'devicon/icons/graphql/graphql-plain.svg';
import html5 from 'devicon/icons/html5/html5-original.svg';
import javascript from 'devicon/icons/javascript/javascript-original.svg';
import jest from 'devicon/icons/jest/jest-plain.svg';
import materialUi from 'devicon/icons/materialui/materialui-original.svg';
import mysql from 'devicon/icons/mysql/mysql-original.svg';
import nestjs from 'devicon/icons/nestjs/nestjs-original.svg';
import nextjs from 'devicon/icons/nextjs/nextjs-original.svg';
import nodejs from 'devicon/icons/nodejs/nodejs-original.svg';
import postgresql from 'devicon/icons/postgresql/postgresql-original.svg';
import prisma from 'devicon/icons/prisma/prisma-original.svg';
import react from 'devicon/icons/react/react-original.svg';
import redux from 'devicon/icons/redux/redux-original.svg';
import sass from 'devicon/icons/sass/sass-original.svg';
import storybook from 'devicon/icons/storybook/storybook-original.svg';
import swagger from 'devicon/icons/swagger/swagger-original.svg';
import tailwind from 'devicon/icons/tailwindcss/tailwindcss-original.svg';
import typescript from 'devicon/icons/typescript/typescript-original.svg';
import vitest from 'devicon/icons/vitest/vitest-original.svg';
import webpack from 'devicon/icons/webpack/webpack-original.svg';

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'stack', label: 'Stack' },
  { id: 'ai', label: 'AI tooling' },
  { id: 'tools', label: 'Tools' },
  { id: 'testing', label: 'Testing' },
  { id: 'design', label: 'Design' },
];

// `invert` marks logos drawn in black, which would vanish on the dark background.
export const skills = [
  { name: 'TypeScript', icon: typescript, category: 'stack' },
  { name: 'JavaScript', icon: javascript, category: 'stack' },
  { name: 'React', icon: react, category: 'stack' },
  { name: 'Next.js', icon: nextjs, category: 'stack', invert: true },
  { name: 'React Native', icon: react, category: 'stack' },
  { name: 'Node.js', icon: nodejs, category: 'stack' },
  { name: 'Express', icon: express, category: 'stack', invert: true },
  { name: 'Nest.js', icon: nestjs, category: 'stack' },
  { name: 'Prisma', icon: prisma, category: 'stack', invert: true },
  { name: 'PostgreSQL', icon: postgresql, category: 'stack' },
  { name: 'MySQL', icon: mysql, category: 'stack' },
  { name: 'GraphQL', icon: graphql, category: 'stack' },
  { name: '.NET', icon: dotnet, category: 'stack' },
  { name: 'Tailwind', icon: tailwind, category: 'stack' },
  { name: 'SCSS', icon: sass, category: 'stack' },
  { name: 'CSS3', icon: css3, category: 'stack' },
  { name: 'HTML5', icon: html5, category: 'stack' },
  { name: 'Claude Code', icon: claude, category: 'ai' },
  { name: 'Cursor', icon: cursor, category: 'ai', invert: true },
  { name: 'GitHub Copilot', icon: copilot, category: 'ai', invert: true },
  { name: 'Git', icon: git, category: 'tools' },
  { name: 'GitHub Actions', icon: githubActions, category: 'tools' },
  { name: 'Redux Toolkit', icon: redux, category: 'tools' },
  { name: 'Storybook', icon: storybook, category: 'tools' },
  { name: 'Swagger', icon: swagger, category: 'tools' },
  { name: 'Expo', icon: expo, category: 'tools', invert: true },
  { name: 'Webpack', icon: webpack, category: 'tools' },
  { name: 'Babel', icon: babel, category: 'tools', invert: true },
  { name: 'ESLint', icon: eslint, category: 'tools' },
  { name: 'Cypress', icon: cypress, category: 'testing' },
  { name: 'Jest', icon: jest, category: 'testing' },
  { name: 'Vitest', icon: vitest, category: 'testing' },
  { name: 'Figma', icon: figma, category: 'design' },
  { name: 'Material UI', icon: materialUi, category: 'design' },
  { name: 'Bootstrap', icon: bootstrap, category: 'design' },
];

// Things with no logo of their own still belong in the picture.
export const practices = [
  { name: 'Codex', category: 'ai' },
  { name: 'TanStack Query', category: 'tools' },
  { name: 'Framer Motion', category: 'tools' },
  { name: 'Zod', category: 'tools' },
  { name: 'Prettier', category: 'tools' },
  { name: 'REST APIs', category: 'tools' },
  { name: 'CI/CD', category: 'tools' },
  { name: 'Agile / Scrum', category: 'tools' },
  { name: 'Unit', category: 'testing' },
  { name: 'E2E', category: 'testing' },
  { name: 'UI testing', category: 'testing' },
  { name: 'Manual QA', category: 'testing' },
];

export const languages = [
  'Ukrainian (native)',
  'English (professional)',
  'Latvian (A2, still levelling up)',
];
