import React from 'react';
import { makeStyles } from '@material-ui/core';
import FlexBox from '../components/FlexBox';
import withAction from './withAction';

const useStyles = makeStyles({
  root: props => ({
    ...props.style,
  }),
});

function PreviewButton({ style, otherProps }) {
  const classes = useStyles({ style });

  return (
    <FlexBox className={classes.root} {...otherProps}>
      {otherProps.text}
    </FlexBox>
  );
}

export default withAction(PreviewButton);
