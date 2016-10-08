console.log('js is linked');
$(function() {

  // global variables
  var ship = $('.ship');

  // creates a new ship in a random location with a random speed
  // and puts it into the html. If the ship makes it past the right
  // boarder of the screen you lose a life.
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
  };

  // when the ship is clicked it will explode, disappear, and you will
  // gain 10 pts per ship killed.
  function shipExp(){
    // var currentPts = 0;
    console.log('EXPLODE!');
    // $(this).css('background','url(img/boom.png)');
    // $(this).fadeOut(800);
    // $(this).delay( 5000, function(){
    //   $(this).remove();
    //   });

    var currentVal = parseInt($('.score').text(),10);
    var newVal = currentVal + 10;
    $('.score').text(newVal);
  };

  // Life tracker
  var lives = $('.life').length;
  if (lives === 0) {
    alert('You have lost!');
  };



  //EVENT CALLERS

  // Fires the function for the ship to fly on page load.
  $(document).ready(function() {
    setInterval(function () {
      var counter = 0
      var numOfShips = Math.floor((Math.random() * 3) + 1);
      while (counter < numOfShips) {
        spawnShip();
        counter++
      }
     }, 2000);

  //  When the ship is click it will fire the funtion to kill it.
    $('main').click(shipExp);
  });
});
