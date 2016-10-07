console.log('js is linked');
$(function() {

  // global variables
  var flyer = 0;
  var ship = $('.ship');

  // ship1 starts offscreen moves left to right
  function shipFlys() {
    var distance = -270;
    flyer = setInterval(function(){
      ship.css('left', distance + 'px');
      if (distance > $(window).width()) {
      } else {
        distance += 15;
        }
    }, 50);
  };

  // Fires the function for the ship1 to fly on page load.
  $(document).ready(function() {
    shipFlys();
  });

  // when a ship makes it past you lose a life.
    var lifeID = setInterval(function() {
    var shipPos = ship.position().left;
    var windowSize = $(window).width();
    if (shipPos > windowSize) {
      console.log('lose a life');
      $('.lives img').last().remove();
      clearInterval(lifeID)
      }
    }, 10);

  // When the ship is clicked it explodes, disappears,
  // and you will gain 10 pts per ship killed.
  function shipExp(){
    var currentPts = 0;
    console.log('EXPLODE!');
    $('.ship-img').attr('src', 'img/boom.png');
    ship.fadeOut(800);
    ship.delay( 5000, function(){
      ship.remove();
      });
    clearInterval(flyer);
    clearInterval(lifeID);

    var currentVal = parseInt($('.score').text(),10);
    var newVal = currentVal + 10;
    $('.score').text(newVal);
  };

  //  When the ship is click it will fire the funtion to kill it.
  ship.click(shipExp);
})
