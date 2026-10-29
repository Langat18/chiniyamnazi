import { TABS } from '../../config/site.js';
import ApplyButton from '../ui/ApplyButton.jsx';
import Picture from '../ui/Picture.jsx';

export default function Header({ active }) {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#about" aria-label="Chini ya Mnazi home">
          <Picture name="logo-ksg" alt="Kenya School of Government" className="brand__logo" />
          <span>Chini ya Mnazi</span>
        </a>
        <nav aria-label="Main">
          <ul className="nav">
            {TABS.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} aria-current={active === t.id ? 'page' : undefined}>{t.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <ApplyButton />
      </div>
    </header>
  );
}
