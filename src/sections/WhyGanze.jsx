import { whyGanze } from '../data/ganze.js';
import { MAP_URL } from '../config/site.js';
import Panel from '../components/ui/Panel.jsx';
import BulletList from '../components/ui/BulletList.jsx';
import Picture from '../components/ui/Picture.jsx';

export default function WhyGanze() {
  return (
    <>
      <a className="map-link" href={MAP_URL} target="_blank" rel="noopener noreferrer" aria-label="Open Ganze Sub-County in Google Maps">
        <Picture name="ganze-map" alt="Satellite map of Ganze Sub-County" className="map-pic" />
        <span className="map-link__cta">Open in Google Maps</span>
      </a>
      <Panel tone="olive" title={whyGanze.heading} />
      <Panel tone="brown"><h2 className="panel__title">{whyGanze.place}</h2></Panel>
      <Panel tone="sand">
        <p>{whyGanze.intro}</p>
        <BulletList items={whyGanze.concerns} />
        <p>{whyGanze.closing}</p>
      </Panel>
    </>
  );
}
