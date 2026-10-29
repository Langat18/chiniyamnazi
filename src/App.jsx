import { TABS } from './config/site.js';
import { useHashRoute } from './hooks/useHashRoute.js';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './sections/Hero.jsx';
import Director from './sections/Director.jsx';
import Initiative from './sections/Initiative.jsx';
import Outcomes from './sections/Outcomes.jsx';
import Partnership from './sections/Partnership.jsx';
import WhyGanze from './sections/WhyGanze.jsx';
import CommunityNeeds from './sections/CommunityNeeds.jsx';
import Gallery from './sections/Gallery.jsx';
import Programme from './sections/Programme.jsx';
import Contacts from './sections/Contacts.jsx';

function About() {
  return (<><Hero /><Director /><Initiative /><Outcomes /><Partnership /></>);
}

const VIEWS = {
  about: About,
  'why-ganze': WhyGanze,
  'community-needs': CommunityNeeds,
  gallery: Gallery,
  programme: Programme,
  contacts: Contacts,
};
const IDS = TABS.map((t) => t.id);

export default function App() {
  const active = useHashRoute(IDS, 'about');
  const View = VIEWS[active];
  return (
    <>
      <Header active={active} />
      <main><View /></main>
      <Footer />
    </>
  );
}
