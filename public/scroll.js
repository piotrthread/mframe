$(document).ready(function () {
  $("#osystemiebutton").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: $("#osystemie").offset().top - 200,
      },
      "slow"
    );
  });
  $("#wizualizacjebutton").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: $("#wizualizacje").offset().top - 200,
      },
      "slow"
    );
  });
  $("#mozliwoscibutton").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: $("#mozliwosci").offset().top - 200,
      },
      "slow"
    );
  });
  $("#realizacjebutton").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: $("#realizacje").offset().top - 200,
      },
      "slow"
    );
  });
  $("#onasbutton").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: $("#onas").offset().top - 200,
      },
      "slow"
    );
  });
  $("#kontaktbutton").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: $("#kontakt").offset().top,
      },
      "slow"
    );
  });
  $("#menu7").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: $(".seven").offset().top - 200,
      },
      "slow"
    );
  });
  $("#menu8").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: $(".eight").offset().top - 200,
      },
      "slow"
    );
  });
});
