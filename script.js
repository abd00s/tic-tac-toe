$(document).ready(function(){

  pOneSelections = [];
  pTwoSelections = [];

  var turn = 0;
  $('td').on("click", function(){
    if (turn % 2 == 0) {
      var $self = $(this);
      $self.text('X');
      pOneSelections.push(parseInt($self.attr('id')));
      if (pOneSelections.length >= 3){
        var total = 0;
        for (var i = 0; i < pOneSelections.length; i++) {
          total += pOneSelections[i] << 0;
        }
        
        if (pOneSelections.length == 3){
          if (total == 15){
            alert("P1 wins");
          }else{
            $('h2').text("Player Two GO!");
          }
        }else if (pOneSelections.length == 4){
          if (pOneSelections[0] + pOneSelections[1] + pOneSelections[3] == 15) {
            alert("P1 wins");

          }else if (pOneSelections[0] + pOneSelections[2] + pOneSelections[3] == 15) {
            alert("P1 wins");

          }else if (pOneSelections[1] + pOneSelections[2] + pOneSelections[3] == 15) {
            alert("P1 wins");
          }else{
            $('h2').text("Player Two GO!");
          }
        }else{
          if (pOneSelections[0] + pOneSelections[3] + pOneSelections[4] == 15){
            alert("P1 wins");

          }else if(pOneSelections[1] + pOneSelections[3] + pOneSelections[4] == 15){
            alert("P1 wins");

          }else if (pOneSelections[2] + pOneSelections[3] + pOneSelections[4] == 15){
            alert("P1 wins");

          }else if(pOneSelections[0] + pOneSelections[1] + pOneSelections[4] == 15){
            alert("P1 wins");

          }else if(pOneSelections[0] + pOneSelections[2] + pOneSelections[4] == 15){
            alert("P1 wins");
          }else{
            alert("Tie Game!");
          }
        }
      }
    }else{
      //p2 magic
      var $self = $(this)
      $self.text('O');
      pTwoSelections.push(parseInt($self.attr('id')));
      if (pTwoSelections.length >= 3){
        var total = 0;
        for (var i = 0; i < pTwoSelections.length; i++) {
          total += pTwoSelections[i] << 0;
        }
        if (pTwoSelections.length == 3){
          if (total == 15){
            alert("P2 wins");
          }else{
            $('h2').text("Player One GO!");
          }
        }else{
          if (pTwoSelections[0] + pTwoSelections[1] + pTwoSelections[3] == 15) {
            alert("P2 wins");

          }else if (pTwoSelections[0] + pTwoSelections[2] + pTwoSelections[3] == 15) {
            alert("P2 wins");

          }else if (pTwoSelections[1] + pTwoSelections[2] + pTwoSelections[3] == 15) {
            alert("P2 wins");
          }else{
            $('h2').text("Player Two GO!");
          } 
        }
      }
    }
    turn ++;
    $(this).off("click")
  });
});