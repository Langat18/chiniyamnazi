import { socials } from '../../data/contacts.js';

export default function SocialLinks() {
  return (
    <ul className="socials">
      {socials.filter((s) => s.href).map((s) => (
        <li key={s.name}>
          <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={'KSG Mombasa on ' + s.name}>
            {s.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
