import React from 'react';
import path from '../utils/path';

function withAction(Comp) {
  const ActionWrap = props => {
    let handleClick = () => {};
    const action = path(['otherProps', 'action'], props);

    if (['website', 'popup'].includes(action)) {
      if (action === 'website') {
        let href = path(['otherProps', 'website'], props);
        if (href) {
          href = `http://${href
            .replace('http://', '')
            .replace('https://', '')}`;

          handleClick = () => {
            console.log('click');
            window.open(href, '_blank');
          };
        }
      }
      if (action === 'popup') {
        handleClick = () => {
          const popup = document.getElementById(
            path(['otherProps', 'popup_id'], props),
          );
          if (popup) {
            popup.style.display = 'flex';
          }
        };
      }
    }
    return (
      <Comp
        {...props}
        otherProps={{ ...props.otherProps, onClick: handleClick }}
      />
    );
  };

  return ActionWrap;
}

export default withAction;
