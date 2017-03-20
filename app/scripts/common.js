$(function () {
  var svg_path = 'svg/sprite.svg',
    cache_hash = Date.now(),
    host = window.location.href,
    div;

  return $.get(
    host + svg_path + '?' + cache_hash
  )
    .done(function (data) {
      div = document.createElement('div');
      div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
      document.body.insertBefore(div.childNodes[0], document.body.childNodes[0]);
    })


  
});