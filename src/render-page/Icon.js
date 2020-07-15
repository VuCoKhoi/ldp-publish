import React from 'react';
import { makeStyles } from '@material-ui/core';

import FlexBox from '../components/FlexBox';
import withAction from './withAction';
import camelCase2Snack from '../utils/camelCase2Snack';

const useStyles = makeStyles({
  root: props => ({
    ...props.style,
  }),
  icon: props => ({
    color: props.style.color,
    fontSize: props.style.width,
  }),
});

function PreviewIcon({ style, otherProps }) {
  const classes = useStyles({ style });

  return (
    <FlexBox className={classes.root} {...otherProps}>
      <i className={` ${classes.icon} material-icons`}>
        {camelCase2Snack(otherProps.icon)}
      </i>
    </FlexBox>
  );
}

export default withAction(PreviewIcon);
