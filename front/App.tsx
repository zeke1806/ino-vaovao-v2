import App from './src/App';
import { STORYBOOK } from './src/configs';
import Storybook from './storybook';

export default STORYBOOK ? Storybook : App;
