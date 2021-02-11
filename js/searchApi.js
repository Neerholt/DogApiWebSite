$("#user-search").keyup(function (){
    idk();
})

function idk(){
    var userInput = $("#user-search").val();
    let userInputToLower = userInput.toLowerCase();
    $.ajax({
        type: "GET",
        url: "https://dog.ceo/api/breed/" + userInputToLower  + "/images/random",
        success: function(result){
            $images = result.message;
            document.getElementById("imagesDog").src= $images;
        }
    });
}



/*Virker ikke som det skal, skal bruge userInput, men kan ikke bruge ham her ned -_-*/
if(userInput){
    $("#delete-text").prop('disabled', true);
    $('#delete-text').css('cursor','not-allowed');
}else {
    $("#delete-text").prop('disabled', false);
    $('#delete-text').css('cursor','pointer');
}
