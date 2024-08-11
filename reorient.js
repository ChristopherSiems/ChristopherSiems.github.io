window.onload = function() {
  const panels = document.getElementsByClassName('container');

  let resize_timer;

  function switch_layout() {
    clearTimeout(resize_timer);
    resize_timer = setTimeout(function() {
      Array.from(panels).forEach(function(panel) {
        if (document.documentElement.clientHeight < document.documentElement.clientWidth) {
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
