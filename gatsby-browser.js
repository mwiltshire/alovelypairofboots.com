import smoothscroll from 'smoothscroll-polyfill';

import './src/style/fonts.css';
import './src/style/tailwind.css';
import './src/style/colors.css';

export const onClientEntry = () => {
  smoothscroll.polyfill();
};
