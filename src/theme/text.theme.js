import color from './color.theme';

export default {
  default: {
    fontFamily: `'Roboto', sans-serif`,
    fontSize: '1em',
    color: '#34495E',
    whiteSpace: 'pre-wrap',
  },
  ellipsis: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'block',
    maxWidth: '100%',
  },
  title: {
    fontWeight: 500,
  },
  bigTitle: {
    fontWeight: 500,
    fontSize: '1.25em',
  },
  h1: {
    fontSize: '2em',
    fontWeight: 'bold',
  },
  h2: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  h3: {
    fontSize: '1.17em',
    fontWeight: 'bold',
  },
  h4: {
    fontWeight: 'bold',
  },
  h5: {
    fontSize: '0.83em',
    fontWeight: 'bold',
  },
  h6: {
    fontSize: '0.67em',
    fontWeight: 'bold',
  },

  tooltip: {
    fontSize: '12px',
    color: '#FFFFFF',
    background: '#1D243E',
    borderRadius: '4px',
  },
  error: {
    fontSize: '0.67em',
    color: 'red',
  },
  active: {
    backgroundColor: color.active,
    color: 'white',
  },
};
