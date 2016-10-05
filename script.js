console.log('js is linked');
$(function() {
  // ship starts offscreen moves left to right
  // till its offscreen and stops
  function shipFlys() {
    var $ship = $('.ship');
    var distance = 1300;
    setInterval(function(){
      $ship.css('right', distance + 'px');
      if (distance < -270) {
      } else {
        distance -= 10;
        }
    }, 50);

  // // If ship makes it past console logs that you lost a life
  // if ($ship.position().right <= -270) {
  // console.log('lose a life');
  //  };
};
  // When the ship is clicked it explodes and disappears
  function shipExp(){
    console.log('EXPLODE!');
    $('.ship-img').attr('src', 'img/boom.png');
  };

// Fires the function for the ship to fly on page load.
$(document).ready(function() {
  shipFlys();
})

//  When the ship is click it will fire the funtion that kills it.
$('.ship').click(shipExp);

})
