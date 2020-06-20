interface ScrollOptions {
  hash?: string;
  offset?: number;
  delay?: number;
  behavior?: 'smooth' | 'auto';
  duration?: number;
}

export const scrollTo = ({
  hash,
  offset = 0,
  delay = 0,
  behavior = 'smooth'
}: ScrollOptions = {}): void => {
  let top: number;
  if (hash) {
    const element = document.querySelector(hash);
    top = element ? (element as HTMLElement).offsetTop + offset : 0;
  } else {
    top = 0;
  }
  window.setTimeout(
    () =>
      window.scrollTo({
        top,
        left: 0,
        behavior
      }),
    delay
  );
};
