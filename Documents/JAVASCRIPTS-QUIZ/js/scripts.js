$(document).ready(function(){
$("#questions") .submit(function(event){


$('#results');text('');
  var score=0;
  var answer1=($("input[type=radio][name=question1 Answer]:checked")va1: ());
  var answer2=($("input[type=radio][name=question2 Answer]:checked")va1:());
  var answer3=($("input[type=radio][name=question3 Answer]:checked")va1:());
  var answer4=($("input[type=radio][name=question4 Answer]:checked")va1:();

  if(answer1===undefined || answer2===undefined || answer3===undefined){
      $('#questionIncomplete').text('Do not leave black spaces')
  }