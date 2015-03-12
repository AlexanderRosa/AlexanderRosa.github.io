$(document).ready(function(){
	var my_array = ["1","1","2","2","3","3","4","4","5","5","6","6","7","7","8","8","9","9","10","10"];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
var new_array = shuffle(my_array);	
  for(i in new_array){
    $('#card_holder').append('<div class="card"><p>'+my_array[i]+'</p></div>');
  };
	$('.card').click(function(){
		$(this).find("p").css("opacity", 1);
		$(this).html();
  
	});
  });
