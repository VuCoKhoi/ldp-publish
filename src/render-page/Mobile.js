import React from 'react';
import elementTypes from '../models/elementTypes';
import MobileSection from './MobileSection';
import MobilePopup from './MobilePopup';

function Desktop({ mobile }) {
  return mobile.map(cc => {
    if (elementTypes.SECTION === cc.type) {
      return <MobileSection {...cc} mobile={mobile} key={cc.otherProps.id} />;
    }
    if (elementTypes.POPUP === cc.type) {
      return <MobilePopup {...cc} key={cc.otherProps.id} mobile={mobile} />;
    }
    return null;
  });
}

export default Desktop;
