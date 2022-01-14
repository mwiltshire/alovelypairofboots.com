interface ScrollOptions {
  delay?: number;
  behavior?: 'smooth' | 'auto';
}

export function createScrollTo({
  delay = 0,
  behavior = 'smooth'
}: ScrollOptions = {}) {
  return (hash: string) => {
    const viewportHeight = window.innerHeight;
    const section = document.querySelector(hash);

    const sectionCard = section?.firstElementChild;
    const sectionCardHeight = sectionCard?.clientHeight || 0;

    const isCardFillingSection = viewportHeight - sectionCardHeight < 200;

    const offset = isCardFillingSection ? -105 : 0;

    const top = isCardFillingSection
      ? (sectionCard as HTMLElement).offsetTop + offset
      : (section as HTMLElement).offsetTop + offset;

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
}
