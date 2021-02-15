$(window).on("load", function(){ idk();  });



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


    var newSearchData = document.getElementById('user-search').value;

    //Save a empty array
    if(localStorage.getItem('data') == null){
        localStorage.setItem('data', '[]');
    }

    //Slap old data on new data
    var oldData = JSON.parse(localStorage.getItem('data'));
    oldData.push(newSearchData)

    // save old and new data
    localStorage.setItem('data', JSON.stringify(oldData));


        d(userInput);
        isThisEmpty(userInput);
}


//I made this function so that i can call it specifically in the buttons script without calling the api script
function d(x){
    /*if the userinput == nothing disable the button and mouse cursor displays not-allowed*/
    if(x != ""){
        $("#delete-text").prop('disabled', false);
        $('#delete-text').css('cursor','pointer');
        $('#delete-text').css("background-color", "#4CAF50");
    }else {
        $("#delete-text").prop('disabled', true);
        $('#delete-text').css('cursor','not-allowed');
        $('#delete-text').css("background-color", "#DD4132");
    }
}





