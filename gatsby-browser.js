import smoothscroll from 'smoothscroll-polyfill';

import '@fontsource/amatic-sc/400.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/700.css';

export const onClientEntry = () => {
  smoothscroll.polyfill();
};
