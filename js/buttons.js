/*Dark mode*/

let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark');

const enableDarkMode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});



/*View History*/
$("#history").click(function(){
    $("#tableHistory").toggle();
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("historyClicked", "true");
    } else {
        document.getElementById("result").innerHTML = "browser does not support Web Storage";
    }
});


/*Delete userinput*/
$("#delete-text").click(function (){
    //implement this function to run again, cuz otherwise i would only run the d code on load
    d("");//Epic fix :) Linked to SearchApi
    document.getElementById('user-search').value = ''
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
})


/*Delete images*/
$("#clImages").click(function (){
    //implement this function to run again, cuz otherwise i would only run the d code on load
    d("");//Epic fix :) Linked to SearchApi
    isThisEmpty();
    document.getElementById("idReslut").innerHTML = "";
    document.getElementById('user-search').value = ''
    var x = document.getElementById("snackbar2");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
})


//This gets run the first time in the searchAPi onload fucntion
function isThisEmpty(x){
    var isEmpty = document.getElementById('idReslut').innerHTML === "";
    console.log(isEmpty);
    console.log(x);
    if(isEmpty == true){
        $("#clImages").prop('disabled', true);
        $('#clImages').css('cursor','not-allowed');
        $('#clImages').css("background-color", "#DD4132");
    }else {
        $("#clImages").prop('disabled', false);
        $('#clImages').css('cursor','pointer');
        $('#clImages').css("background-color", "#4CAF50");
    }
}





