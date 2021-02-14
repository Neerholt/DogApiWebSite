/*Dark mode*/
function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("darkmode", "true");
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}


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
    document.getElementById('user-search').value = ''
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
})


/*Delete images*/
$("#clImages").click(function (){
    document.getElementById("idReslut").innerHTML = "";
    document.getElementById('user-search').value = ''
    var x = document.getElementById("snackbar2");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
})