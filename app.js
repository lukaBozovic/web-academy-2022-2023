const apiUrl = 'https://reqres.in/api/users';
var users = undefined;
var singleUser = undefined;

var tableBody = document.getElementById('tableBody');
var singleUserDiv = document.getElementById('singleUserDiv');

function displayData(){
    let bodyHtml = [];
    users.forEach(user => {
        bodyHtml.push(`
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.first_name}</td>
                            <td>${user.last_name}</td>
                            <td>${user.email}</td>
                            <td><button class="btn btn-success" onclick="showSingleUser(${user.id})">Show</button></td>
                        </tr>
                    `);
    });
    tableBody.innerHTML = bodyHtml.join('');
}

async function fetchData(pageNumber = 1){
     //Ovo nekad moze biti necitiljiva sintaksa
    /*fetch(apiUrl + "?page=" + pageNumber).then((response) => {
        return response.json();
    }).then((result) => {
        users = result.data;
        console.log(users);
        displayData();
    }).catch((error) => {
        console.log(error);
    });*/

    let response = await fetch(apiUrl + "?page=" + pageNumber);
    let responseJson = await response.json();
    users = await responseJson.data;
    displayData();
}

function showSingleUser(userId){
    fetch(apiUrl + "/" + userId).then((response) => {
        return response.json();
    }).then((result) => {
        //Pozeljno napraviti funkciju
        singleUser = result.data;
        singleUserDiv.innerHTML = `
                                    <h3>${singleUser.first_name}<h3>
                                    <h3>${singleUser.last_name}<h3>
                                    <img src="${singleUser.avatar}">
                                    `

    }).catch((error) => {
        console.log(error);
    });
}

fetchData()