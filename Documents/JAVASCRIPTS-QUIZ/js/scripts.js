$(document).ready(function(){
    $(".question").submit(function(event){
         var one = parseInt($("input:radio[name=one]:checked").val());
         var two = parseInt($("input:radio[name=two]:checked").val());
         var three = parseInt($("input:radio[name=three]:checked").val());
         var four = parseInt($("input:radio[name=four]:checked").val());

         var total= one+two+three+four;
        $("#score").text("Your score is " + total);
         event.preventDefault();
     });
  });
 
  