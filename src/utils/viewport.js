// Referenced https://stackoverflow.com/questions/1766861/find-the-exact-height-and-width-of-the-viewport-in-a-cross-browser-way-no-proto
const viewport = () => {
  let e = window;
  let a = 'inner';

  if (!('innerWidth' in window)) {
    a = 'client';
    e = document.documentElement || document.body;
  }
  return { width: e[`${a}Width`], height: e[`${a}Height`] };
};

const chartWidthHeight = () => {
  let $viewport = viewport();
  const bufferHeight = 100;
  const bufferWidth = 100;

  $viewport.height = $viewport.height - bufferHeight;
  $viewport.width = $viewport.width - bufferWidth;
  return $viewport;
};

export {
  chartWidthHeight,
  viewport,
};
