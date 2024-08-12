window.onload = function() {
  const panels = document.getElementsByClassName('panel');

  let resize_timer;

  function switch_layout() {
    clearTimeout(resize_timer);
    resize_timer = setTimeout(function() {
      Array.from(panels).forEach(function(panel) {
        if (window.innerWidth > window.innerHeight) {
          panel.style.flexDirection = 'row';
        }
        else {
          panel.style.flexDirection = 'column';
        };
      });
    }, 64);
  };

  window.addEventListener('resize', switch_layout);
  switch_layout();
};
