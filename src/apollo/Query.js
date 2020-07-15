import { gql } from 'apollo-boost';

const query = {
  QUERY_TEST: gql`
    query getTest1 {
      getTest1 {
        text
        test {
          data
        }
      }
    }
  `,
  GET_DATA_PAGE_BY_ID: gql`
    query getDataPagePreviewById($id: ID!) {
      getDataPagePreviewById(id: $id) {
        desktop
        mobile
        setting {
          domain
          script
          meta_keywords
          meta_description
          custom_domain
          title
          favicon
        }
      }
    }
  `,

  GET_DATA_PAGE_BY_DOMAIN: gql`
    query getDataPagePublishDomain($domain: String!) {
      getDataPagePublishDomain(domain: $domain) {
        desktop
        mobile
        setting {
          domain
          script
          meta_keywords
          meta_description
          custom_domain
          title
          favicon
        }
      }
    }
  `,
  GET_DATA_PAGE_BY_CUSTOM_DOMAIN: gql`
    query getDataPagePublishCustomDomain($custom_domain: String!) {
      getDataPagePublishCustomDomain(custom_domain: $custom_domain) {
        desktop
        mobile
        setting {
          domain
          script
          meta_keywords
          meta_description
          custom_domain
          favicon
        }
      }
    }
  `,
};

export default query;
