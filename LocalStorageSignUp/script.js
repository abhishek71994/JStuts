// var button = document.getElementById("submit");

// if(button !== null){
//     button.addEventListener("click",function() {
//         var username = document.querySelector("#user").value;
//         var password = document.querySelector("#pass").value;
//         localStorage.setItem(username,password);
//         window.location ="file:///Users/abhishekprasad/Desktop/react-apps/JStuts/LocalStorageSignUp/signin.html";
//     });
// }

function user(name,food,password){
    this.name = name;
    this.food = password;
    this.password = password;
}
function AddUser(){
    var username = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var food = document.querySelector("#food").value;
    var password = document.querySelector("#pass").value;
    var userObj = JSON.stringify(new user(username,food,password));
    localStorage.setItem(email, userObj);
    console.log("User added");

    document.getElementById("form_id").submit();
}
function FindUser(){
    var email = document.querySelector("#emailLogin").value;
    var password = document.querySelector("#passLogin").value;
    var details = localStorage.getItem(email);
    if(details !== null){
        var userObj = JSON.parse(details);
        if(userObj.password === password){
            alert("Welcome");
        }
        else{
            alert("Wrong credentials");
        }
    }
}


// var signInButton = document.getElementById("singIn") || null;

// if (signInButton !== null) {
//     signInButton.addEventListener("click", function () {
//         var username = document.querySelector("#userLogin").value;
//         var password = document.querySelector("#passLogin").value;
//         if(localStorage.getItem(username)=== password){
//             alert("Login Successfull");
//         }
//         else{
//             alert("piss off nigga");
//         }
//     });
// }