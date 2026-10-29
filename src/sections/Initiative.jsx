import { initiative } from '../data/about.js';
import Panel from '../components/ui/Panel.jsx';
import BulletList from '../components/ui/BulletList.jsx';
import Picture from '../components/ui/Picture.jsx';

export default function Initiative() {
  return (
    <>
      <Panel tone="olive" title="About the Initiative">
        <h3>Background</h3>
        <p>{initiative.background}</p>
<Picture name="gallery-1" alt="Community members gathered under the trees" className="wide-pic" />      </Panel>
      <Panel tone="brown" title="Objectives">
        <BulletList ordered items={initiative.objectives} />
      </Panel>
      <Panel tone="olive">
        <div className="split">
          <div>
            <h3>Programme Focus</h3>
            <p>{initiative.focus}</p>
          </div>
          <div>
            <h3>The initiative promotes:</h3>
            <BulletList items={initiative.promotes} />
          </div>
        </div>
      </Panel>
    </>
  );
}
