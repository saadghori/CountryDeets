var searchButton = document.getElementById("search-btn");
var countryInput = document.getElementById("country-input");

searchButton.addEventListener("click", () => {
    var countryName = countryInput.value;
    var finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        result.innerHTML =
         `
        <img src="${data[0].flags.svg}" class="flag">
        <h2>${data[0].name.common}</h2>
            <ul class="details">
                <li class="info"><h4>Capital:</h4>
                <span>${data[0].capital[0]}</span></li>
                <li class="info"><h4>Continent:</h4>
                <span>${data[0].continents[0]}</span></li>
                <li class="info"><h4>Population:</h4>
                <span>${data[0].population.toLocaleString()}</span></li>
                <li class="info"><h4>Currency:</h4>
                <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span></li>
                <li class="info"><h4>Official Languages:</h4>
                <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span></li>
            </ul>
         `;
    })
    .catch(() => {      
        result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
    });
});