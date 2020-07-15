import React from 'react';
import Mobile from './Mobile';
import Desktop from './Desktop';
import useDimensions from '../hooks/useDimensions';
import { BASE_WIDTH_MOBILE } from '../baseSize';

function RenderPage({ desktop, mobile, isMobile }) {
  const [_, { width }] = useDimensions();
  return (
    <>
      {isMobile ? <Mobile mobile={mobile} /> : <Desktop desktop={desktop} />}
      <style>
        {`
        body{
          zoom: ${isMobile ? width / BASE_WIDTH_MOBILE : 1}
        }
        body {
          margin: 0px;
        }

        /* custom scroll bar for all div tag*/
        /* width */
        *::-webkit-scrollbar {
          width: 6px;
        }

        *::-webkit-scrollbar:horizontal {
          height: 6px;
        }

        /* Handle */
        *::-webkit-scrollbar-thumb {
          background: rgba(116, 129, 149, 0.6);
          border-radius: 10px;
          min-height: 10px;
        }


      `}
      </style>
    </>
  );
}

export default RenderPage;
