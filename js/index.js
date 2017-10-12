$(function()
  {
    var play_btn=$(".play_btn");
     play_btn.click(function()
        {       
       // interval=setInterval(updateDisplay,1000);
         $(".first_screen").hide();
        $(".game_screen").show();
       // $(".final_container").hide();
      });
  });