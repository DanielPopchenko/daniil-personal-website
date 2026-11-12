export const EMAIL = 'daniel.popchenko@gmail.com';

export const socials = [
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/daniil-popchenko/' },
  { label: 'GitHub', icon: 'github', href: 'https://github.com/DanielPopchenko' },
];

export function openEmail() {
  const subject = encodeURIComponent('Hello Daniil!');
  const body = encodeURIComponent('Hi Daniil, I found your site and wanted to talk about...');

  try {
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  } catch {
    navigator.clipboard?.writeText(EMAIL);
  }
}
