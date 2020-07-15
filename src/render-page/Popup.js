import React from 'react';
import { makeStyles } from '@material-ui/core';

import FlexBox from '../components/FlexBox';
import { BASE_WIDTH_MOBILE } from '../baseSize';

const useStyles = makeStyles({
  desktop: props => ({
    ...props.style,
  }),
  mobile: props => ({
    ...props.style,
    width: BASE_WIDTH_MOBILE,
    overflow: 'visible',
  }),
});

function PreviewPopup({ style, otherProps, isMobile }) {
  const classes = useStyles({ style });

  if (!isMobile) {
    return <FlexBox className={classes.desktop} {...otherProps} />;
  }
  return <FlexBox className={classes.mobile} {...otherProps} />;
}

export default PreviewPopup;
