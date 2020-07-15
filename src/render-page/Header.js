/* eslint-disable react/no-danger */
/* eslint-disable camelcase */
import React from 'react';
import Head from 'next/head';

function Header({ script, meta_keywords, meta_description, title, favicon }) {
  return (
    <>
      <Head>
        <title>{title || 'landingpage'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={meta_description} />
        <meta name="keywords" content={meta_keywords} />
        {favicon && <link rel="shortcut icon" type="image/*" href={favicon} />}
      </Head>
      <script dangerouslySetInnerHTML={{ __html: script }} />
    </>
  );
}

export default Header;
