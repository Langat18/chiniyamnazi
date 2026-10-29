import { partnership } from '../data/about.js';
import Panel from '../components/ui/Panel.jsx';
import ApplyButton from '../components/ui/ApplyButton.jsx';

export default function Partnership() {
  return (
    <Panel tone="brown" title="Call for Partnership" className="partnership">
      <p>{partnership.intro}</p>
      <p className="slogan">{partnership.slogan}</p>
      <ApplyButton />
    </Panel>
  );
}
