interface ScrollOptions {
  delay?: number;
  behavior?: 'smooth' | 'auto';
}

export function createScrollTo({
  delay = 0,
  behavior = 'smooth'
}: ScrollOptions = {}) {
  return (hash: string) => {
    let top: number;
    const { matches } = window.matchMedia('(min-width: 768px)');
    const section = document.querySelector(hash);

    if (matches) {
      const viewportHeight = window.innerHeight;

      const sectionCard = section?.firstElementChild;
      const sectionCardHeight = sectionCard?.clientHeight || 0;

      const isCardFillingSection = viewportHeight - sectionCardHeight < 200;

      const offset = isCardFillingSection ? -105 : 0;

      top = isCardFillingSection
        ? (sectionCard as HTMLElement).offsetTop + offset
        : (section as HTMLElement).offsetTop + offset;
    } else {
      top = (section as HTMLElement).offsetTop;
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
}
