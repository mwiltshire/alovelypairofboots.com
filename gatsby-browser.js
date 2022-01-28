import smoothscroll from 'smoothscroll-polyfill';

import './src/style/fonts.css';
import './src/style/tailwind.css';
import './src/style/colors.css';

// import '@fontsource/amatic-sc/400.css';
// import '@fontsource/amatic-sc/700.css';
// import '@fontsource/raleway/400.css';
// import '@fontsource/raleway/700.css';

export const onClientEntry = () => {
  smoothscroll.polyfill();
};
