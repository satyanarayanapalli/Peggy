$(function()
  {
    var play_btn=$(".play_btn");
    var interval;
    var timeSecond=0;
    var timeMinute=0;

    
    var mnts_cnt1=0, mnts_cnt2=0;
    var seconds1 =0,seconds2=0;
    var total_time=0;

     play_btn.click(function()
        {       
        interval=setInterval(updateDisplay,1000);
         $(".first_screen").hide();
        $(".game_screen").show();
       // $(".final_container").hide();
      });

     function updateTime()
     {
        timeSecond++;
        if(timeSecond==60)
        {
            timeMinute++;
            timeSecond=0;
        }
        $(".timer").text("Time = 0"+timeMinute+":"+timeSecond);

     }


     function updateDisplay(){
  
document.getElementById("go_score").innerText = total_time;
        seconds1++;
        if(seconds1==10)
          {
            $('.seconds2').hide();
          }
        if(seconds1%60==0)
        {
          mnts_cnt1++;
          seconds1=0;
          $('.seconds2').show();

          if(mnts_cnt1==10)
          {
            $('#mnts2').hide();
          }

          if(mnts_cnt1%60==0)
          {
            hour1++;
            mnts_cnt1=0;
            $('#mnts2').show();
            $('#hours1').text(hour1);
          }
          $('#mnts1').text(mnts_cnt1);
        }
        $('.timer').find('.seconds1').text(seconds1);
        
     if ($('#first_screen').css('display') == 'none'  && $('#game_screen').css('display') == 'none' && $('#final_container').css('display') == 'block') {
                 clearInterval(interval);
                 
            }
        total_time="0"+mnts_cnt1+":"+seconds1;

      
      }

    
  });