async function fetchPhonebook(){
    let response = await fetch("http://localhost/Jedanaesti-cas/backend.php");
    let responseJson = await response.json();

    let html = [];
    responseJson.forEach(element => {
        html.push(`<p>name : ${element.name}, email : ${element.email}, phone : ${element.phoneNumber} </p>`);
    });
    document.getElementById("content").innerHTML = html.join("");
}

fetchPhonebook();