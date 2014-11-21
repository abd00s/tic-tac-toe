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
    }else{
      var $self = $(this)
      $self.text('O');
      pTwoSelections.push(parseInt($self.attr('id')));
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