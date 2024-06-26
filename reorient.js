window.onload = function() {
  const headshot = document.querySelector('.headshot');
  const content_container = document.getElementById('content_container');
  const panel = document.querySelector('.midpanel');

  let resize_timer;

  function switch_layout() {
    clearTimeout(resize_timer);
    resize_timer = setTimeout(function() {
      if (headshot.offsetHeight > content_container.offsetHeight) {
        panel.style.flexDirection = 'row';
      }
      else {
        panel.style.flexDirection = 'column';
      }
    }, 64);
  };

  window.addEventListener('resize', switch_layout);
  switch_layout();
};
