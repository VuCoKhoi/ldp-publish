import React from 'react';

import elementTypes from '../models/elementTypes';
import DesktopSection from './DesktopSection';
import DesktopPopup from './DesktopPopup';

function Desktop({ desktop }) {
  return desktop.map(cc => {
    if (elementTypes.SECTION === cc.type) {
      return (
        <DesktopSection {...cc} key={cc.otherProps.id} desktop={desktop} />
      );
    }
    if (elementTypes.POPUP === cc.type) {
      return <DesktopPopup {...cc} key={cc.otherProps.id} desktop={desktop} />;
    }
    return null;
  });
}

export default Desktop;
