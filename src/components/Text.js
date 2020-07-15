import { withStyles } from '@material-ui/core/styles';
import FlexBox from './FlexBox';

const Text = withStyles(theme => ({
  root: {
    ...theme.text.default,
    ...theme.text.ellipsis,
  },
}))(FlexBox);
export default Text;
