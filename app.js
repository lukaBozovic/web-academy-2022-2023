const users = [
    {
        username : "luka",
        password : "1234",
        fullName : "Luka Petrovic"
    },
    {
        username : "marko",
        password : "1234",
        fullName : "Marko Markovic"
    },
    {
        username : "marija",
        password : "1234",
        fullName : "Marija Markovic"
    }
];

function getUserInput(){
    let username = document.getElementById("username-input").value;
    let password = document.getElementById("password-input").value;

    return {
        username : username,
        password : password
    }
}

function login(){
    
    let obj = getUserInput();

    let result = false;

    users.forEach(function(user){
        if(user.username === obj.username && user.password === obj.password)
            result = true;
    })

    let validatedInput = validateInput(obj.username, obj.password);
    if (validatedInput === false){
        document.getElementById("username-input").classList.add("is-invalid");
        document.getElementById("password-input").classList.add("is-invalid");
        return ;
    }


    let alert = document.getElementById("alert-div");
    if (result === true){
        alert.classList.remove("alert-danger")
        /*
        alert.classList.add("alert", "alert-success");
        alert.innerHTML = "<h3>Dobrodosli!</h3>"
        */
       window.location.href = './cities.html';
    }
    else{
        alert.classList.remove("alert-success")
        alert.classList.add("alert", "alert-danger");
        alert.innerHTML = "<h3>Pogrijesili ste kredencijale.</h3>"
    }
        
}

function validateInput(username, password){
    if (username === "" || password === "")
        return false;
    return true;    
}

