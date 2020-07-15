import React from 'react';
import { makeStyles } from '@material-ui/core';

import FlexBox from '../components/FlexBox';
import RenderElement from './RenderElement';
import path from '../utils/path';
import { BASE_WIDTH_DESKTOP } from '../baseSize';

const useStyles = makeStyles({
  root: props => ({
    ...props.style,
    ...props.sizeResize,
    width: '100%',
    justifyContent: 'center',
  }),
  sectionContainer: {
    width: BASE_WIDTH_DESKTOP,
  },
});

const DesktopSection = ({ desktop, otherProps, style }) => {
  const sectionElement = desktop.filter(
    cc => path(['otherProps', 'parent_id'], cc) === otherProps.id,
  );

  const classes = useStyles({ style });
  return (
    <FlexBox className={classes.root} {...otherProps}>
      <FlexBox className={classes.sectionContainer}>
        {sectionElement.map(cc => (
          <RenderElement {...cc} key={cc.otherProps.id} />
        ))}
      </FlexBox>
    </FlexBox>
  );
};

export default DesktopSection;
