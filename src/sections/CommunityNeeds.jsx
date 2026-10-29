import { useState } from 'react';
import { priorityNeeds, fromPrioritiesToAction, sites } from '../data/needs.js';
import Panel from '../components/ui/Panel.jsx';
import BulletList from '../components/ui/BulletList.jsx';
import Picture from '../components/ui/Picture.jsx';

function SiteDetail({ site }) {
  return (
    <div className="site">
      <div className="site__pics">
        {site.images.map((name) => <Picture key={name} name={name} alt={site.name} />)}
      </div>
      <h3>{site.name}</h3>
      <p>{site.kind}{site.stat ? ` — ${site.stat}` : ''}</p>
      <div className="split">
        <div><h4>Key Challenges Identified</h4><BulletList items={site.challenges} /></div>
        <div><h4>Priority Intervention Areas</h4><BulletList items={site.interventions} /></div>
      </div>
      {site.appeal && (
        <aside className="appeal"><h4>Fundraising Appeal</h4><p>{site.appeal}</p></aside>
      )}
    </div>
  );
}

export default function CommunityNeeds() {
  const [siteId, setSiteId] = useState(sites[0].id);
  const site = sites.find((s) => s.id === siteId);

  return (
    <>
      <Panel tone="cream" title="Community Priority Needs">
        <p>{priorityNeeds.intro}</p>
        <h3>{priorityNeeds.primary.title}</h3>
        <BulletList items={priorityNeeds.primary.items} />
        {priorityNeeds.groups.map((g) => (
          <div key={g.title}><h3>{g.title}</h3><BulletList items={g.items} /></div>
        ))}
      </Panel>
      <Panel tone="black" title="From Community Priorities to Action">
        <p>{fromPrioritiesToAction}</p>
        <div className="subtabs" role="tablist" aria-label="Sites">
          {sites.map((s) => (
            <button key={s.id} role="tab" aria-selected={s.id === siteId} onClick={() => setSiteId(s.id)}>
              {s.name}
            </button>
          ))}
        </div>
      </Panel>
      <Panel tone="sand"><SiteDetail site={site} /></Panel>
    </>
  );
}
