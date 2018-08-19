var button = document.getElementById("submit") || null;

if(button !== null){
    button.addEventListener("click",function() {
        var username = document.querySelector("#user").value;
        var password = document.querySelector("#pass").value;
        localStorage.setItem(username,password);
        window.location ="file:///Users/abhishekprasad/Desktop/react-apps/JStuts/LocalStorageSignUp/signin.html";
    });
}
var signInButton = document.getElementById("singIn") || null;

if (signInButton !== null) {
    signInButton.addEventListener("click", function () {
        var username = document.querySelector("#userLogin").value;
        var password = document.querySelector("#passLogin").value;
        if(localStorage.getItem(username)=== password){
            alert("Login Successfull");
        }
        else{
            alert("piss off nigga");
        }
    });
}