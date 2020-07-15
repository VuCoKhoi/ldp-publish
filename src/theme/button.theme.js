import color from './color.theme';

export default {
  default: {
    display: 'flex',
    position: 'relative',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 30,
    padding: '5px 10px',
    borderRadius: 5,
    width: 'max-content',
    height: 'max-content',
  },
  active: {
    backgroundColor: color.active,
    color: 'white',
  },
  warning: {
    backgroundColor: color.error,
    color: 'white',
  },
};
