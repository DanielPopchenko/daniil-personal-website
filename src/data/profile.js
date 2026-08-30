export const EMAIL = 'daniel.popchenko@gmail.com';

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/daniil-popchenko/' },
  { label: 'GitHub', href: 'https://github.com/DanielPopchenko' },
];

export function openEmail() {
  const subject = encodeURIComponent('Hello Daniil!');
  const body = encodeURIComponent('I would like to connect with you regarding...');

  try {
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  } catch {
    navigator.clipboard?.writeText(EMAIL);
  }
}
