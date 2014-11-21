$(document).ready(function(){
  
  // Add marker to clicked position; alternate X's and O's

  var turn = 1;
  $('td').on("click", function(){
    if (turn % 2 == 0) {
      $(this).text('O');
    }else{
      $(this).text('X');
    }
    turn++; 
    $(this).off("click")
  });
});