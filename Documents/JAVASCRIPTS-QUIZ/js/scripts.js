$(document).ready(function(){
    $(".question").submit(function(event){
         var one = parseInt($("input:radio[name=one]:checked").val());
         var two = parseInt($("input:radio[name=two]:checked").val());
         var three = parseInt($("input:radio[name=three]:checked").val());
         var four = parseInt($("input:radio[name=four]:checked").val());

         var total= one+two+three+four;
        $("#score").text("Your score is " + total);
         event.preventDefault();

         var percentage=(total/80)*100;
         $("#percentage").text("Your have "+ percentage + "%");
         $("#results").show();

         if (percentage >79){
            $("#comments").text("Excellent!");
        }else if(percentage <80 && percentage >39){
            $("#comments").text("Fairly Done.");
        }else{
            $("#comments").text("You have failed redo the test");
        };
     });
     $('#userprofile').submit(function(event){
         var name= $("#Name").val();
         var stream= $("#stream").val();
         var adm= $("#adm").val();
         var date= $("#date").val();
     });

     
  });
 
