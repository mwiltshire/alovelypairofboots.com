import smoothscroll from 'smoothscroll-polyfill';

import '@fontsource/amatic-sc';
import '@fontsource/raleway';

export const onClientEntry = () => {
  smoothscroll.polyfill();
};
