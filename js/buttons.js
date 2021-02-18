/*Dark mode*/
    let darkMode = localStorage.getItem('darkMode');
    const darkModeToggle = document.querySelector('#dark');

    const enableDarkMode = () => {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        document.getElementById("dark").innerHTML = "Darkmode:Off";
    }

    const disableDarkMode = () => {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
        document.getElementById("dark").innerHTML = "Darkmode:On";
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
    var x = document.getElementById("tableHistory");
    let historyMode = localStorage.getItem('history');
    const historyToggle = document.querySelector('#historyButton');

    const enableHistory = () => {
        x.style.display = "block";
        if(localStorage.getItem('data') != null){
            document.getElementById('tableHistory').innerHTML = JSON.parse(localStorage.getItem('data'));
        }else {
            document.getElementById('tableHistory').innerHTML = "No history";
        }
        localStorage.setItem('history', 'enabled');
        document.getElementById("historyButton").innerHTML = "Hide History";
    }

    const disableHistory = () => {
        x.style.display = "none";
        localStorage.setItem('history', 'disabled');
        document.getElementById("historyButton").innerHTML = "Show History";
    }

    if (historyMode === 'enabled') {
        enableHistory();
    }

    historyToggle.addEventListener('click', () => {
        historyMode = localStorage.getItem('history');
        if (historyMode !== 'enabled') {
            enableHistory();
        } else {
            disableHistory();
        }
    });


/*Delete userinput*/
$("#delete-text").click(function (){
    //implement this function to run again, cuz otherwise i would only run the d code on load
    disableDeleteSearchButton("");//Epic fix :) Linked to SearchApi
    document.getElementById('user-search').value = ''
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
})



/*Delete images*/
$("#clImages").click(function (){
    //implement this function to run again, cuz otherwise i would only run the d code on load
    isThisEmpty();
    document.getElementById("idReslut").innerHTML = "";
    //document.getElementById('user-search').value = ''
    var x = document.getElementById("snackbar2");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
})


//This gets run the first time in the searchAPi onload fucntion
function isThisEmpty(x){
    if(x) {
        $("#clImages").prop('disabled', false);
        $('#clImages').css('cursor','pointer');
        $('#clImages').css("background-color", "#4CAF50");
    }else {
        $("#clImages").prop('disabled', true);
        $('#clImages').css('cursor','not-allowed');
        $('#clImages').css("background-color", "#DD4132");
    }

}


//Disable the use of the enter button to protect the user from hitting it and "crashing" the program
//you can still hit enter if the input has a value in it, but you just get a new images of a random dog and nothing more
$( "#user-search" ).on( "keydown", function( event ) {
    if (event.which == '13') { //my IDE says that the "Comparison event.which == '13' may cause unexpected type coercion" idk man it works as it should
        event.preventDefault();
    }
});



