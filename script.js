console.log('js is linked');
$(function() {
  // // Will create a new div including the ship and spawn it in a random row
  // // with a random speed.
  // function spawnShip() {
  // }

  // ship starts offscreen moves left to right
  function shipFlys() {
    var ship = $('.ship');
    var distance = -270;
    setInterval(function(){
      ship.css('left', distance + 'px');
      if (distance > $(window).width()) {
      } else {
        distance += 15;
        }
    }, 50);

  // // If ship makes it past console logs that you lost a life
  // var shipPos = $('.ship').position().left;
  // var windowSize = $(window).width();
  // if ( shipPos > windowSize-100) {
  // console.log('lose a life');
  //  }
  };

  // When the ship is clicked it explodes, disappears,
  // and you will gain 10 pts per ship killed.
  function shipExp(){
    var currentPts = 0;
    console.log('EXPLODE!');
    $('.ship-img').attr('src', 'img/boom.png');
    $('.ship').fadeOut(800);
    $('.ship').delay( 5000, function(){
      $('.ship').remove();
      });

    var currentVal = parseInt($('.score').text(),10);
    var newVal = currentVal + 10;
    $('.score').text(newVal);
  };


  // Fires the function for the ship to fly on page load.
  $(document).ready(function() {
    shipFlys();
  })

  //  When the ship is click it will fire the funtion to kill it.
  $('.ship').click(shipExp);
})
