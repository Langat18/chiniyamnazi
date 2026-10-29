import { director } from '../data/about.js';
import Picture from '../components/ui/Picture.jsx';

export default function Director() {
  return (
    <section className="director">
      <div className="director__banner">
        <Picture name="director" alt={director.name} className="director__photo" />
        <div className="director__head">
          <p>{director.role}</p>
          <h2>{director.name}</h2>
        </div>
      </div>
      <div className="container director__body">
        {director.paragraphs.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
        <p><strong>{director.closing}</strong></p>
      </div>
    </section>
  );
}
