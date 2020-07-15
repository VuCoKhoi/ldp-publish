import React from 'react';

import elementTypes from '../models/elementTypes';
import Box from './Box';
import Button from './Button';
import Icon from './Icon';
import Image from './Image';
import Input from './Input';
import Line from './Line';
import Text from './Text';
import Video from './Video';
import Popup from './Popup';
import Section from './Section';

function RenderElement(props) {
  switch (props.type) {
    case elementTypes.BOX:
      return <Box {...props} />;
    case elementTypes.BUTTON:
      return <Button {...props} />;
    case elementTypes.ICON:
      return <Icon {...props} />;
    case elementTypes.IMAGE:
      return <Image {...props} />;
    case elementTypes.INPUT:
      return <Input {...props} />;
    case elementTypes.LINE:
      return <Line {...props} />;
    // case elementTypes.SLIDE:
    //   return <Slide  {...props} />;
    case elementTypes.TEXT:
      return <Text {...props} />;
    case elementTypes.VIDEO:
      return <Video {...props} />;
    case elementTypes.POPUP:
      return <Popup {...props} />;
    case elementTypes.SECTION:
      return <Section {...props} />;

    default:
      return null;
  }
}
export default RenderElement;
