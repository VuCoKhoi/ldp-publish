import React from 'react';
import { makeStyles } from '@material-ui/core';

import FlexBox from '../components/FlexBox';

const useStyles = makeStyles({
  desktop: props => ({
    ...props.style,
  }),
});

function PreviewSection({ style, otherProps }) {
  const classes = useStyles({ style });

  return <FlexBox className={classes.desktop} {...otherProps} />;
}

export default PreviewSection;
