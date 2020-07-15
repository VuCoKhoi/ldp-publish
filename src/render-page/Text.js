import React from 'react';
import { makeStyles } from '@material-ui/core';
import Text from '../components/Text';
import withAction from './withAction';

const useStyles = makeStyles({
  root: props => ({
    ...props.style,
  }),
});

function PreviewText({ style, otherProps }) {
  const classes = useStyles({ style });
  return (
    <Text className={classes.root} {...otherProps}>
      {otherProps.text}
    </Text>
  );
}

export default withAction(PreviewText);
