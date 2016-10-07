console.log('js is linked');
$(function() {

  // global variables
  var flyer = 0;
  var ship = $('.ship');

  // spawn ship
  //// write if statment to keep spawning if lives > 0
  function spawnShip() {
    var newDiv = $('<div />').attr('class', 'ship').appendTo('main');
    var rndmNum = Math.floor((Math.random() * 500) + 25);
    var distance = -270;
    var rndmSpeed = Math.floor((Math.random() * 20) + 15);
    newDiv.css('margin-top', rndmNum);
    var removeLife = setInterval(function(){
      newDiv.css('left', distance + 'px');
        if (distance <= $(window).width()) {
          distance += rndmSpeed;
        } else {
          console.log('lose a life');
          $('.lives img').last().remove();
          clearInterval(removeLife);
        }
      }.bind(newDiv), 50);
  }


  // // ship starts offscreen moves left to right
  // function shipFlys() {
  //   var distance = -270;
  //   var rndmSpeed = Math.floor((Math.random() * 20) + 15);
  //   for (var i = 0; i < ship.length; i++) {
  //     setInterval(function(){
  //       ship.css('left', distance + 'px');
  //       if (distance > $(window).width()) {
  //       } else {
  //         distance += rndmSpeed;
  //         }
  //     }, 50);
  //   }
  // }

  // // when a ship makes it past you lose a life.
  // var lifeID = setInterval(function() {
  //   var shipPos = $('.ship').position().left;
  //   var windowSize = $(window).width();
  //   if (shipPos > windowSize) {
  //     console.log('lose a life');
  //     $('.lives img').last().remove();
  //     lives--;
  //     clearInterval(lifeID)
  //     }
  // }, 10);

  // When the ship is clicked it explodes, disappears, and you will gain 10 pts per ship killed.
  function shipExp(){
    var currentPts = 0;
    console.log('EXPLODE!');
    ship.css('background','url(img/boom.png)');
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

  // Life tracker



  //EVENT CALLERS

  // Fires the function for the ship1 to fly on page load.
  $(document).ready(function() {
    setInterval(function () {
      var counter = 0
      while (counter < 1) {
        spawnShip();
        counter++
      }
     }, 2000);
  //  When the ship is click it will fire the funtion to kill it.
    ship.click(shipExp);
  });
});
