export default ({
  selector = 'header',
  duration = 0.3,
  easing = 'ease',
  hiddenHeaderClass = 'js-header-hidden'
} = {}) => {
  let show = true; // initial boolean value
  let prev = window.pageYOffset; // initial window position
  let enabled = true;

  const header = document.querySelector(selector);
  const styles = window.getComputedStyle(header);

  const body = document.body;

  const headerHeight = () => {
    // computes total height of the element
    const widthAndPadding = header.getBoundingClientRect().height;
    const marginTop = parseFloat(styles['margin-top']);
    const marginBot = parseFloat(styles['margin-bottom']);

    return widthAndPadding + marginTop + marginBot;
  };

  const fixedShow = () => {
    // shows the element
    body.classList.remove(hiddenHeaderClass);

    show = true;
  };

  const fixedHide = () => {
    // hides the element
    body.classList.add(hiddenHeaderClass);

    show = false;
  };

  const handleScroll = () => {
    if (!enabled) return;
    // performs logic on each scroll event
    const current = window.pageYOffset;

    current > prev && current >= headerHeight() / 2
      ? show
        ? fixedHide()
        : null
      : show
      ? null
      : fixedShow();

    prev = current;
  };

  let lastCalled = 0;

  // ignore scroll events within 100ms of the previous event
  window.addEventListener('scroll', () => {
    const now = new Date().getTime();
    if (now - lastCalled < 100) return;
    lastCalled = now;
    handleScroll();
  });

  const disable = () => (enabled = false);
  const enable = () => (enabled = true);

  return { disable, enable };
};
