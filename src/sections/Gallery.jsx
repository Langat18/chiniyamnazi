import { gallery } from '../data/gallery.js';
import Panel from '../components/ui/Panel.jsx';
import Picture from '../components/ui/Picture.jsx';

export default function Gallery() {
  return (
    <Panel tone="black" title="Gallery">
      <ul className="gallery">
        {gallery.map((g) => (
          <li key={g.image}>
            <Picture name={g.image} alt={g.caption} />
            <span>{g.caption}</span>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
