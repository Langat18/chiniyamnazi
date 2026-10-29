import { hero } from '../data/about.js';
import { contacts } from '../data/contacts.js';
import Panel from '../components/ui/Panel.jsx';
import SocialLinks from '../components/ui/SocialLinks.jsx';
import ApplyButton from '../components/ui/ApplyButton.jsx';

export default function Contacts() {
  return (
    <Panel tone="brown" title="Contacts">
      <p>Reach the {hero.institution}, {hero.campus}, about the {hero.edition}.</p>
      <dl className="contact-list">
        <div>
          <dt>Phone</dt>
          <dd><a href={contacts.phone.href}>{contacts.phone.label}</a></dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd><a href={contacts.email.href}>{contacts.email.label}</a></dd>
        </div>
        <div>
          <dt>Website</dt>
          <dd><a href={contacts.website.href} target="_blank" rel="noopener noreferrer">{contacts.website.label}</a></dd>
          <dd><a href={contacts.campusWebsite.href} target="_blank" rel="noopener noreferrer">{contacts.campusWebsite.label}</a></dd>
        </div>
        <div>
          <dt>Social media</dt>
          <dd><SocialLinks /></dd>
        </div>
      </dl>
      <ApplyButton />
    </Panel>
  );
}
