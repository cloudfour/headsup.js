export default ({
  selector = 'header',
  duration = 0.3,
  easing = 'ease',
  delay = 0,
  debounce = false,
  stickyBodyClass = 'header-is-stuck'
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
    body.classList.add(stickyBodyClass);

    show = true;
  };

  const fixedHide = () => {
    // hides the element
    body.classList.remove(stickyBodyClass);

    show = false;
  };

  const onScrollFunction = _ => {
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

  const debounceFunc = wait => {
    // debouncing function
    if (!wait) return onScrollFunction;

    let timeout = null;
    return () => {
      if (!timeout) {
        timeout = setTimeout(() => {
          onScrollFunction();
          timeout = null;
        }, wait);
      }
    };
  };

  body.style['margin-top'] = `${headerHeight()}px`; // adjust body margin to make space for header

  body.classList.add(stickyBodyClass);

  window.addEventListener('scroll', debounceFunc(debounce));

  const disable = () => (enabled = false);
  const enable = () => (enabled = true);

  return { disable, enable };
};
