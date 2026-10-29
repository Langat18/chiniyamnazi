import { useEffect, useState } from 'react';

export function useHashRoute(validIds, fallback) {
  const read = () => {
    const id = window.location.hash.replace('#', '');
    return validIds.includes(id) ? id : fallback;
  };
  const [route, setRoute] = useState(read);

  useEffect(() => {
    const onChange = () => {
      setRoute(read());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  });

  return route;
}
