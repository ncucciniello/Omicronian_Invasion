console.log('js is linked');

function shipFlys() {
  var $ship = $('.ship');
  var distance = 1300;
  setInterval(function(){
    $ship.css('right', distance + 'px');
    if (distance < -262) {
    } else {
      distance -= 10;
    }
  }, 40);
};

$(document).ready(function(){
  shipFlys();
})
