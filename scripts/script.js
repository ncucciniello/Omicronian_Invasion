// console.log('js is linked');
$(() => {

  // global variables
  var ship = $('.ship');

//   function startGame() {

//     var newShip = $('<div />').attr('class', 'ship').appendTo('main');
//     var distance = -270;
//     var rndmNum = 200;
//     var rndmSpeed = 20
//     // var rndmNum = Math.floor((Math.random() * 500) + 25);
//     // var rndmSpeed = Math.floor((Math.random() * 20) + 15);

//     // creates a new ship in a random location
//     newShip.css('margin-top', rndmNum);

//     // gives ship random speed to fly at and removes a life if the ship escapes
//     var spawnShip = setInterval(function() {
//       newShip.css('left', distance + 'px');
//         if (distance <= $(window).width()) {
//           distance += rndmSpeed;
//     } else {
//         console.log('lose a life');
//         $('.lives img').last().remove();
//         $('main').find('div').first().remove();
//         clearInterval(spawnShip);
//       }
//     }, 50);

//     // when the ship is clicked it will explode and disappear
//     $(".ship").click(function() {
//     var clickedShip = $(this).next();
//       clickedShip.css('background','url(assets/imgs/boom.png)')
//       clickedShip.fadeOut(800)
//       .delay(800, () => {
//         $(this).remove();
//       // });
//       console.log('EXPLODE!');
//       // .clearInterval(spawnShip);


//       // // gain 10 pts per ship killed.
//       // var currentVal = parseInt($('.score').text(), 0);
//       // var newVal = currentVal + 10;
//       // console.log(newVal);
//       // $('.score').text(newVal);
//     });

//     // Life tracker
//     // var lives = $('.life').length;
//     // if (lives === 0) {
//     //   $('.loser').css('display', 'block');
//     // };
//   };




//  $(document).ready(function() {
//     var start = setInterval(function () {
//       startGame();
//     }, 2000);
//   });
// });


//-------------------------------------------------------------------------------------

  function spawnShip() {

    // variables for actions in spawnShip
    var newDiv = $('<div />').attr('class', 'ship').appendTo('main');
    var rndmNum = Math.floor((Math.random() * 500) + 25);
    var distance = -270;
    var rndmSpeed = Math.floor((Math.random() * 20) + 15);

    // creates a new ship in a random location
    newDiv.css('margin-top', rndmNum);

    // gives ship random speed and removes a life if the ship makes it past
    var removeLife = setInterval(function() {
      newDiv.css('left', distance + 'px');
        if (distance <= $(window).width()) {
          distance += rndmSpeed;
        } else {
          console.log('lose a life');
          $('.lives img').last().remove();
          clearInterval(removeLife);
          }
    }.bind(newDiv), 50);

    // when the ship is clicked it will explode and disappear
    $('main').click(function(e) {
      var currentPts = 0;
      console.log('EXPLODE!');
      $(e.target).css('background','url(assets/imgs/boom.png)');
      $(e.target).fadeOut(800);
      $(e.target).delay( 800, function(){
        $(e.target).remove();
        });
      clearInterval(removeLife);


      // gain 10 pts per ship killed.
      var currentVal = parseInt($('.score').text(), 0);
      var newVal = currentVal + 10;
      $('.score').text(newVal);
    });

    // Life tracker
    var lives = $('.life').length;
    if (lives === 0) {
      $('.loser').css('display', 'block');
    };
  };

  // Fires the function for the ship to fly on page load.
  $(document).ready(function() {
    var start = setInterval(function () {
      var counter = 0
      var numOfShips = Math.floor((Math.random() * 3) + 1);
      while (counter < numOfShips) {
        spawnShip();
        counter++
      }
    }, 2000);
  });
});
