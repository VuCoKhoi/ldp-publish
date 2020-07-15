import React from 'react';
import { makeStyles, Input } from '@material-ui/core';

const useStyles = makeStyles({
  root: props => ({
    ...props.style,
  }),
});

function PreviewInput({ style, otherProps }) {
  const classes = useStyles({ style });
  return (
    <Input
      className={classes.root}
      {...otherProps}
      defaultValue={otherProps.defaultValue}
    />
  );
}

export default PreviewInput;
