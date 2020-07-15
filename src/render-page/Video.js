import React from 'react';
import { makeStyles } from '@material-ui/core';
import FlexBox from '../components/FlexBox';

const useStyles = makeStyles({
  root: props => ({
    ...props.style,
  }),
  iframe: {
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  },
});

function PreviewVideo({ style, otherProps }) {
  const video = `https://www.youtube.com/embed/${otherProps.video_id}`;

  const classes = useStyles({
    style,
  });

  return (
    <FlexBox className={classes.root}>
      <iframe
        className={classes.iframe}
        width="420"
        height="315"
        src={video}
        title="youtube video"
      />
    </FlexBox>
  );
}

export default PreviewVideo;
