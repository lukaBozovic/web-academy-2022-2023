var cities = [
    {
        name: "Podgorica",
        country : "Crna Gora",
        population : 200000,
        image : "podgorica.jpg"
    },
    {
        name: "Bec",
        country : "Austrija",
        population : 2000000,
        image : "bec.jpg"
    },
    {
        name: "Rim",
        country : "Italija",
        population : 2000000,
        image : "rim.jpg"
    }
]

function displayCitiesInTable(cities){
    let content = ` <thead>
                         <th>Ime</th>
                         <th>Drzava</th>
                         <th>Broj stanovnika</th>
                    </thead>`;

    cities.forEach((city) => {
        content += `<tr> 
                        <td>${city.name}</td>
                        <td>${city.country}</td>
                        <td>${city.population}</td>
                    </tr>
        `  
    });
    document.getElementById('tbody').innerHTML = content;
}

function displayCitiesInCards(){
    let content = "";

    cities.forEach((city) => {
        content += `
             <div class="card col-4">
                <img src="./images/${city.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h3>Ime : ${city.name}</h3>
                  <h4>Drzava : ${city.country}</h4>
                  <h5>Broj stanovnika : ${city.population}</h5>
                </div>
             </div>
            `
    });
    document.getElementById('cards_div').innerHTML = content;
}


function getUserInput(){
    return {
        name: document.getElementById("city_name").value,
        country : document.getElementById("city_country").value,
        population : document.getElementById("population").value,
        image : undefined
    }
}

function addCity(){
    let newCity = getUserInput();
    cities.push(newCity);
    displayCitiesInTable(cities);
    document.getElementById("city_form").reset();
}

displayCitiesInTable(cities);
//displayCitiesInCards();
document.getElementById("city_form").addEventListener("submit", (e) => {
    e.preventDefault();
    addCity();
})

function filterCitiesArray(searchTerm){
    let resArray = [];
    cities.forEach((city) => {
        if (city.name.toLowerCase().includes(searchTerm) || city.country.toLowerCase().includes(searchTerm) || (String)(city.population).toLowerCase().includes(searchTerm))
            resArray.push(city);
    });
    return resArray;

}

function search(){
    let searchTerm = document.getElementById("search").value;
    searchTerm = searchTerm.toLowerCase();
    let filteredArray = filterCitiesArray(searchTerm);
    displayCitiesInTable(filteredArray);
}