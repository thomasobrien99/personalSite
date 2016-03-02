var i = 0;

document.getElementById("TPO").addEventListener("click", function(){
  $("#TPO").toggleClass("faded");}, false );

$("#MegaManSwitch").on('click', function(){
  
  $("#MegaManX").animate({
    opacity: "toggle",
    height:"toggle"
  }, 5000);
  
  if ( i++ % 2 === 0)
  {
    $("#MegaManSwitch").text("X, come back!");
  }
  else
  {
    $("#MegaManSwitch").text("Get Outta Here X!");
  }

});

/*
document.getElementById("MegaManX").addEventListener("click", function(){
  $("#MegaManX").animate({
    opacity: "toggle",
    height:"toggle"
  }, 5000);
});
*/