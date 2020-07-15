import React from 'react';
import { makeStyles } from '@material-ui/core';
import FlexBox from '../components/FlexBox';
import RenderElement from './RenderElement';
import path from '../utils/path';

const useStyles = makeStyles({
  root: props => ({
    ...props.style,
    ...props.sizeResize,
    width: props.style.width || props.sizeResize.width,
  }),
});

const MobileSection = ({ mobile, style, otherProps, sizeResize }) => {
  const sectionElement = mobile.filter(
    cc => path(['otherProps', 'parent_id'], cc) === otherProps.id,
  );

  const classes = useStyles({ style, sizeResize });
  return (
    <FlexBox className={classes.root} {...otherProps}>
      {sectionElement.map(cc => (
        <RenderElement {...cc} key={cc.otherProps.id} />
      ))}
    </FlexBox>
  );
};

export default MobileSection;
