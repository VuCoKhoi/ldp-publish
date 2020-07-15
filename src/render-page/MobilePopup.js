import React from 'react';

import { makeStyles } from '@material-ui/core';
import FlexBox from '../components/FlexBox';
import path from '../utils/path';
import RenderElement from './RenderElement';
import { BASE_WIDTH_MOBILE } from '../baseSize';

const useStyles = makeStyles({
  backDrop: props => ({
    ...props.backDropStyle,
    top: 0,
    display: 'none',
  }),
  root: props => ({
    ...props.style,
    width: BASE_WIDTH_MOBILE,
    overflow: 'visible',
  }),
});

function MobilePopup({ mobile, style, backDropStyle, otherProps }) {
  const classes = useStyles({ style, backDropStyle });

  const handleClosePopup = () => {
    const popup = document.getElementById(otherProps.id);
    if (popup) {
      popup.style.display = 'none';
    }
  };

  const popupElement = mobile.filter(
    cc => path(['otherProps', 'parent_id'], cc) === otherProps.id,
  );
  return (
    <FlexBox
      className={classes.backDrop}
      onClick={handleClosePopup}
      id={otherProps.id}
    >
      <FlexBox
        className={classes.root}
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        {popupElement.map(cc => (
          <RenderElement {...cc} key={cc.otherProps.id} />
        ))}
        {/* <ColorPicker
          onFinish={color => {
            console.log('finish', color);
          }}
          defaultColor="#333"
        /> */}
      </FlexBox>
    </FlexBox>
  );
}

export default MobilePopup;
