import { hero } from '../data/about.js';
import Picture from '../components/ui/Picture.jsx';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__top container">
        <Picture name="logo-ksg" alt={hero.institution} className="hero__logo" />
        <div>
          <h1 className="hero__inst">{hero.institution}</h1>
          <p>{hero.tagline}</p>
          <p className="hero__campus">{hero.campus}</p>
        </div>
        <Picture name="logo-under-the-tree" alt="Under the Tree Series seal" className="hero__seal" />
      </div>
      <div className="hero__stage">
        <Picture name="hero" alt="Coconut palms against the sky" className="hero__bg" />
        <div className="hero__date"><span>{hero.month}</span><strong>{hero.year}</strong></div>
        <div className="hero__titles container">
          <p className="hero__local">{hero.titleLocal}</p>
          <p className="hero__series">{hero.title}</p>
          <p className="hero__sub">{hero.subtitle}</p>
          <p className="hero__edition">{hero.edition}</p>
        </div>
      </div>
    </section>
  );
}
