export default ({
  selector = 'header',
  debounce = false,
  hiddenHeaderClass = 'js-header-hidden'
} = {}) => {
  let show = true; // Initial boolean value
  let prev = window.pageYOffset; // Initial window position
  let enabled = true;

  const header = document.querySelector(selector);
  const styles = window.getComputedStyle(header);

  const body = document.body;

  const headerHeight = () => {
    // Computes total height of the element
    const widthAndPadding = header.getBoundingClientRect().height;
    const marginTop = parseFloat(styles['margin-top']);
    const marginBot = parseFloat(styles['margin-bottom']);

    return widthAndPadding + marginTop + marginBot;
  };

  const fixedShow = () => {
    // Shows the element
    body.classList.remove(hiddenHeaderClass);

    show = true;
  };

  const fixedHide = () => {
    // Hides the element
    body.classList.add(hiddenHeaderClass);

    show = false;
  };

  const handleScroll = () => {
    if (!enabled) return;
    // Performs logic on each scroll event
    const current = window.pageYOffset;

    if (current > prev && current >= headerHeight() / 2) {
      if (show) fixedHide();
    } else if (!show) fixedShow();

    prev = current;
  };

  const debounceFunc = wait => {
    if (!wait) return handleScroll

    let timeout = null
    return () => {
      if (!timeout) {
        timeout = setTimeout(() => {
          handleScroll()
          timeout = null
        }, wait)
      }
    }
  }

  window.addEventListener('scroll', debounceFunc(debounce));

  const disable = () => (enabled = false);
  const enable = () => (enabled = true);

  return { disable, enable };
};
