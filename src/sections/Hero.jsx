import { hero, heroSlides } from '../data/about.js';
import { useSlideshow } from '../hooks/useSlideshow.js';
import Picture from '../components/ui/Picture.jsx';

export default function Hero() {
  const [active, setActive] = useSlideshow(heroSlides.length);

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
        {heroSlides.map((slide, i) => (
          <Picture
            key={slide.image}
            name={slide.image}
            alt={slide.alt}
            className={'hero__slide' + (i === active ? ' is-active' : '')}
          />
        ))}
        <div className="hero__date"><span>{hero.month}</span><strong>{hero.year}</strong></div>
        <div className="hero__titles container">
          <p className="hero__local">{hero.titleLocal}</p>
          <p className="hero__series">{hero.title}</p>
          <p className="hero__sub">{hero.subtitle}</p>
          <p className="hero__edition">{hero.edition}</p>
        </div>
        <div className="hero__dots">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.image}
              type="button"
              aria-label={'Show slide ' + (i + 1)}
              aria-current={i === active}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}