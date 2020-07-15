import React from 'react';
import { makeStyles } from '@material-ui/core';
import FlexBox from '../components/FlexBox';
import path from '../utils/path';
import RenderElement from './RenderElement';

const useStyles = makeStyles({
  backDrop: props => ({
    ...props.backDropStyle,
    top: 0,
    display: (!props.otherProps.open_onload && 'none') || 'flex',
  }),
  root: props => ({
    ...props.style,
  }),
});

function DesktopPopup({ desktop, style, backDropStyle, otherProps }) {
  const classes = useStyles({ style, backDropStyle, otherProps });

  const handleClosePopup = () => {
    const popup = document.getElementById(otherProps.id);
    if (popup) {
      popup.style.display = 'none';
    }
  };

  const popupElement = desktop.filter(
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
      </FlexBox>
    </FlexBox>
  );
}

export default DesktopPopup;
