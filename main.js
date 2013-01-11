window.addEventListener('load', function() {
  var els = document.getElementsByClassName('scale');
  var el;
  for (var i = 0, len = els.length; i<len; i++) {
    el = els[i];
    var handle = update(el);
    el.addEventListener('mousedown', handle);
    el.addEventListener('mousedown', function(e) {
      window.addEventListener('mousemove', handle);

      window.addEventListener('mouseup', function self(e) {
        window.removeEventListener('mousemove', handle);
        window.removeEventListener('mouseup', self);
      });
    });
  }  

  function update(el) {
    return function(e) {
      if (e.layerY < 0) return;
      el.children[0].style['margin-top'] = e.layerY+'px';
    }
  }
});
