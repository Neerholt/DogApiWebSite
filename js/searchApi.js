/*
When the window loads it loads d and isThisEmpty, the reason for doing so
is because i have to disable Delete search and Clear images from the start of the of
the program.


I used to run the dataFetch function, but I want overload the api with unnecessary functions,
just for my buttons to be disabled
*/
$(window).on("load", function(){
    disableDeleteSearchButton(""); //I give d a empty string cuz it has a parameter
    isThisEmpty();
});



/*Call idk() function on keyup*/
$("#user-search").keyup(function (){
    dataFetch();
})

/*Get the data from the api*/
function dataFetch(){
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
            isThisEmpty($images);
            saveSearch(userInput);
            disableDeleteSearchButton(userInput);
            document.querySelector('#idReslut').appendChild(img);
        }
    });
}


//I made this function so that i can call it specifically in the buttons script without calling the api script
function disableDeleteSearchButton(x){
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



//Function to save what the user has search for
function saveSearch(data){

    /*
    if there is a images which is equal to a result it should save the word
    generated at that same time a images is returned, this is to prevent that is save every letter
    the user has ever typed while using the program.
    */
    if (data){
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
    }
}






