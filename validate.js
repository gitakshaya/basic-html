function validateForm() {
    var x = document.forms["userForm"]["firstName"].value;
    var y = document.forms["userForm"]["lastName"].value;
    if (x == "" || y == "") {
        var popup = document.getElementById("errorDiv");
        popup.classList.toggle("show");
        return false;
    }
    else{
        var popup = document.getElementById("infoDiv");
        popup.classList.toggle("show");
        return true;
    }
    
}