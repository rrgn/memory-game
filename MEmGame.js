//function for clicking image
var firstMon = "";
var secondMon = "";
var state = "turn1"


$(function() {
  $('.tile').click(function() {
    $(this).addClass('show');
  });

  $('.tile').click(function() {
    if (state === "turn1") {
      state = "turn2";
    } else {
      state = "turn1";
    }
    if (state === "turn2") {
      secondMon = $(this).find('.monster').attr('src');
    }
    else if (state === "turn1") {
      firstMon = $(this).find('.monster').attr('src');
    }

    if (state === "turn1" && firstMon === secondMon) {
      $('.tile.show').addClass('match');
      $('.tile.show').addClass('match');
    } else if (state === "turn1") {
      setTimeout(function() {
        $('.tile').removeClass('show')}, 1000);
    }
    var matched = $('.matched').length;
    var totalCards = $('.tile').length;
    if (matched === totalCards) {
      $('#space').text("You Win!");
    }
  });
});

/*
var matched = $('.matched').length;
var totalCards = $('.tile').length;
if (matched === totalCards) {
  $('#messages').text("You Win!");
} */
