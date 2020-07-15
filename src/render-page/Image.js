import React from 'react';
import { makeStyles } from '@material-ui/core';
import withAction from './withAction';

const useStyles = makeStyles({
  root: props => ({
    ...props.style,
  }),
});

function PreviewImage({ style, otherProps }) {
  const classes = useStyles({ style });
  return (
    <img
      className={classes.root}
      src={otherProps.image_url}
      alt={otherProps.image_url}
      {...otherProps}
    />
  );
}

export default withAction(PreviewImage);
