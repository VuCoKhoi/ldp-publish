import { useMediaQuery } from '@material-ui/core';
import React from 'react';

import Query from '../../src/apollo/Query';
import withApollo from '../../src/apollo/withApollo';
import Header from '../../src/render-page/Header';
import RenderPage from '../../src/render-page';

function Page({ mobile, desktop, setting, isMobile }) {
  const matchMobile = useMediaQuery('(max-width:750px)');
  return (
    <>
      <Header {...setting} />
      <RenderPage
        mobile={mobile}
        desktop={desktop}
        isMobile={isMobile || matchMobile}
      />
    </>
  );
}

Page.getInitialProps = async ({ apolloClient, req, query }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  const isMobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
    ),
  );

  const { data, error } = await apolloClient.query({
    query: Query.GET_DATA_PAGE_BY_ID,
    variables: {
      id: query.idPage,
    },
  });

  return { ...data.getDataPagePreviewById, error, isMobile };
};

export default withApollo({ ssr: true })(Page);
