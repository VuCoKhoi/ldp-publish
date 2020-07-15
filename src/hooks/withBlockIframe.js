import { useEffect } from 'react';

function withBlockIframe(Comp) {
  useEffect(() => {
    if (window.top !== window.self)
      window.top.location.replace(window.self.location.href);
  }, []);
  return Comp;
}

export default withBlockIframe;
