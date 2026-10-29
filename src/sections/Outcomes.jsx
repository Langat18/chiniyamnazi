import { outcomes } from '../data/about.js';
import Panel from '../components/ui/Panel.jsx';
import BulletList from '../components/ui/BulletList.jsx';

export default function Outcomes() {
  return (
    <Panel tone="cream" title="Expected Outcomes">
      <p className="lead"><em>{outcomes.tagline}</em></p>
      <BulletList items={outcomes.items} />
    </Panel>
  );
}
