import { hero } from '../../data/about.js';
import { contacts } from '../../data/contacts.js';
import SocialLinks from '../ui/SocialLinks.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col">
          <p className="footer__name">{hero.institution}</p>
          <p>{hero.campus}</p>
          <a href={contacts.website.href} target="_blank" rel="noopener noreferrer">{contacts.website.label}</a>
          <a href={contacts.campusWebsite.href} target="_blank" rel="noopener noreferrer">{contacts.campusWebsite.label}</a>
        </div>
        <div className="footer__col">
          <p className="footer__name">Contacts</p>
          <a href={contacts.phone.href}>{contacts.phone.label}</a>
          <a href={contacts.email.href}>{contacts.email.label}</a>
        </div>
        <div className="footer__col">
          <p className="footer__name">Follow us</p>
          <SocialLinks />
        </div>
      </div>
      <p className="container footer__tags">#UnderTheTreeSeries | #ChiniYaMnazi</p>
    </footer>
  );
}
