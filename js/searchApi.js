$(document).ready(function (){
    idk();
})


/*Call idk() function on keyup*/
$("#user-search").keyup(function (){
    idk();
})

/*Get the data from the api*/
function idk(){
    var userInput = $("#user-search").val();
    let userInputToLower = userInput.toLowerCase();

    //Make the img tag
    var img = document.createElement("img");
    $.ajax({
        type: "GET",
        url: "https://dog.ceo/api/breed/" + userInputToLower  + "/images/random",
        success: function(result){
            //Used to clear the images cuz i have to append the images -_-
            document.getElementById("idReslut").innerHTML = "";
            $images = result.message;
            img.src = $images;
            document.querySelector('#idReslut').appendChild(img);
        }
    });
        d(userInput)
}


//I made this function so that i can call it specifically in the buttons script without calling the api
function d(x){
    /*if the userinput == nothing disable the button and mouse cursor displays not-allowed*/
    if(x != ""){
        $("#delete-text").prop('disabled', false);
        $('#delete-text').css('cursor','pointer');
    }else {
        $("#delete-text").prop('disabled', true);
        $('#delete-text').css('cursor','not-allowed');
    }
}




