//make connection request

var request = new XMLHttpRequest();

//create connection
request.open("GET", 'https://restcountries.eu/rest/v2/all', true);

//send the request
request.send();

//get response
request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var countriesData = JSON.parse(request.responseText);

        console.log(countriesData);

        //Get all the countries from Asia continent / “region” using Filter method

        var countries = countriesData.filter((x) => {
            if (x.region === "Asia") {
                return x;
            }
        })

        console.log('Asian Countries', countries);


        //Get all the countries with population of less than 2 lacs using Filter method 

        var population = countriesData.filter((c) => {

            if (c.population < 200000) {
                return c;
            }
        });

        console.log('Population less than 200000', population);

        //Print the following details name, capital, flag using forEach. 

        countriesData.forEach(element => {
            console.log('Country Name', element.name)
            console.log('Country Capital', element.capital)
            console.log('Country Flag', element.flag)
        });

        //Print the total population of countries using the reduce method.

        var populationCount = countriesData.reduce(function (result, item, index) {
            return result + item.population
        }, 0);

        console.log('Total Population Count', populationCount);

        // Print the country which uses US Dollars as currency.
        var usdCountries = countriesData.filter((country) => {
            if (country.currencies[0].code === "USD")
                return country;
        });

        console.log('Countries that use USD', usdCountries)
    }
}