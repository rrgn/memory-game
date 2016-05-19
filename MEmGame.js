//function for clicking image
var state = "turn1"

function match() {
  var openTiles = $('.show img');
  var first = $(openTiles[0]);
  var second = $(openTiles[1]);
  return first.attr('src') === second.attr('src');
}

$(function() {
  $('.tile').click(function() {
    if ($(this).hasClass('show animated flipInY')) {
      return;
    }
    if (state === "turn1") {
      $(this).addClass('show animated flipInY');
      state = "turn2";
    } else if (state === "turn2") {
      $(this).addClass('show animated flipInY');
      state = "turn1";

    if (match()) {
      $('.show').removeClass('show')
        .addClass('match');
    } else {
      setTimeout(function() {
        $('.tile').removeClass('show');
      }, 1000);
    }

  }
    var matched = $('.match').length;
    var totalCards = $('.tile').length;
    if (matched === totalCards) {
      $('#space').text("You Win!");
    }

  });
});
