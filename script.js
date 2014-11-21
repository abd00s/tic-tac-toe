$(document).ready(function(){

  // Add marker to clicked position; alternate X's and O's

  pOneSelections = [];
  pTwoSelections = [];
  var turn = 0;
  $('td').on("click", function(){
    if (turn % 2 == 0) {
      var $self = $(this)
      $self.text('X');
      pOneSelections.push(parseInt($self.attr('id')));
      if (pOneSelections.length >= 3){
        
        // Winning through first 3 selections

        if (pOneSelections.length == 3){
          var total = 0;
          for (var i = 0; i < pOneSelections.length; i++) {
            total += pOneSelections[i] << 0;
            if (total == 15){
              alert("P1 wins");
            }else{
              $('h2').text("Player Two GO!");
            }
          }
        
        // Winning on fourth selection  
        
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
        }


      }else{
        $('h2').text("Player Two GO!");
      }
    }else{
      var $self = $(this)
      $self.text('O');
      pTwoSelections.push(parseInt($self.attr('id')));
      $('h2').text("Player One GO!");
    }
    turn++; 
    $(this).off("click")

    // Toggle Player [One/Two] GO

    // $('h2').toggleClass('turn');
    // $(document).on('click', 'td', function(){
    //   $('.turn').text('Player Two GO!')
    //   });

    // Capture which cell is clicked

    

  });
});