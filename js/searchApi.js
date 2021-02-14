/*Call idk() function on keyup*/
$("#user-search").keyup(function (){
    /*This is so that the user input value can be use all over the place, POG code i know :)*/
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
            document.querySelector('.result').appendChild(img);
        }
    });

}



/*if the userinput == nothing disable it and  mouse cursor displays not-allowed*/
if(idk() == ""){
    $("#delete-text").prop('disabled', false);
    $('#delete-text').css('cursor','pointer');
}else {
    $("#delete-text").prop('disabled', true);
    $('#delete-text').css('cursor','not-allowed');
}

/*This is what i call true scuffedware code :)*/
