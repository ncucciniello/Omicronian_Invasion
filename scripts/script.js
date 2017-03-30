// console.log('js is linked');
$(() => {

  function startGame() {

    // variables for actions in startGame
    var distance = -270;
    var rndmNum = Math.floor((Math.random() * 500) + 25);
    var rndmSpeed = Math.floor((Math.random() * 20) + 15);
    var newShip = $('<div />')
                    .attr('class', 'ship')
                    .appendTo('main')
                    .css({
                      'margin-top': rndmNum,
                      'left': distance
                    });


    // adds on click listener to each ship so when it's clicked it will explode and disappear.
    newShip.on('click', function(e) {
      $(e.target).off('click');
      $(e.target).css('background','url(assets/imgs/boom.png)');
      $(e.target).fadeOut(800);
      $(e.target).delay( 800, function(){
        $(e.target).remove();
      });
      clearInterval(spawnShip);

      // adds 10 pts per ship killed.
      var currentVal = parseInt($('.score').text(), 0);
      var newVal = currentVal + 10;
      $('.score').text(newVal);
    });


    // gives ship a random locaion/speed and removes a life if the ship makes it past
    var spawnShip = setInterval(function() {
      newShip.css('left', distance);
        if (distance <= $(window).width()) {
          distance += rndmSpeed;
        } else {
          console.log('lose a life');
          $('.lives img').last().remove();
          clearInterval(spawnShip);
          }
    }, 50);
  };


  // Fires the function for the ship to fly on page load.
  $(document).ready(function() {
    var start = setInterval(function() {
      var counter = 0
      var numOfShips = Math.floor((Math.random() * 3) + 1);
      var lives = $('.life').length;

      // will stop spawning ships if lives run out.
      if (lives < 1) {
        $('.loser').css('display', 'block');
        clearInterval(start);
      } else {
          while (counter < numOfShips) {
            startGame();
            counter++;
          }
        }
    }, 2000);
  });

});
