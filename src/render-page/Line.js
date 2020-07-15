import React from 'react';
import { makeStyles } from '@material-ui/core';
import FlexBox from '../components/FlexBox';

const useStyles = makeStyles({
  root: props => ({
    ...props.style,
  }),
});

function PreviewLine({ style, otherProps }) {
  const classes = useStyles({ style });
  return <FlexBox className={classes.root} {...otherProps} />;
}

export default PreviewLine;
