
import axios from "axios";

const countries = [{ name: 'United States', code: 1 }, { name: 'Canada', code: 2 }, { name: 'United Kingdom', code: 3 }, {
  name: 'France',
  code: 4
}, { name: 'Germany', code: 5 }, { name: 'Morocco', code: 6 }];


const sumOfcon = countries.reduce((ilement, countries) => { return ilement + countries.code; }
  , 0);

console.log("some of countries code is", sumOfcon);


const filtredCountries = countries.filter(Item => Item.code >= 3)
console.log(filtredCountries)

// sort 
const sorrt = countries.sort((a, b) => b.code - a.code)
console.log("sorted", sorrt)
const reversed = sorrt.reverse()
console.log(reversed)


// map
const mapedcountries = countries.map(countries => countries.name)
console.log(mapedcountries)

// filter
const reducedCont = countries.filter(countries => countries.name.startsWith("U"))
  .reduce((acumulator, countries) => { return acumulator + countries.code }, 0)
  ;
console.log(reducedCont)

// push
const newCountry = countries.push({ name: "japane", code: 7 })
console.log(countries)

//pop

const deletedCountries = countries.pop()
console.log(deletedCountries)
console.log(countries)

// splice

const indexToRemove = countries.findIndex(country => country.code === 4);
if (indexToRemove !== -1) {
  countries.splice(indexToRemove, 1);
}

console.log("spliced", countries)

// slice
console.log(countries.slice(0, 3))


// find 
const render2 = countries.find(country => country.code === 3)
console.log("rendered countries with code 2", render2)


//some 
const some = countries.some(country => country.code === 5)
console.log("some verifiying the existence of 5", some)


// evey 
const evey = countries.every(country => country.code === 5)
console.log("some verifiying the existence of 5", evey)

// includes

const objectcont = { name: 'Canada', code: 2 }
const includ = Object.values(objectcont).includes("Canada")
console.log("this object includes", includ)

// trim 

const trimedcont = countries.map(country => ({
  name: country.name.trim(),
}));

console.log("trimmed countries", trimedcont)

// local compare 

const localCompareElement = countries.sort((a, b) => a.name.localeCompare(b.name))
console.log("localcampare", localCompareElement)

// at 

const atindexTwo = countries.at(2);
console.log(atindexTwo)

//for loop 

for (let i = 0; i < countries.length; i++) {
  console.log(countries[i])
}

console.log("befor adding",
  countries)
console.log("after adding", countries.concat({ name: "Australia", code: 8 }, { name: "China", code: 9 }))


// join 

const cuntriesNames = countries.map(country => country.name);
const countriesJoined = cuntriesNames.join(" , ")

console.log("joined countries with coma: ", countriesJoined)

// split 


const countryString = ' italy, Spain , Portugal'

const splitedCoutries = countryString.split(", ");
console.log("splited Country string", splitedCoutries)

const addCountriesTotable = [...countries, ...splitedCoutries.map(name => ({ name }))]
console.log(countries)


// shift 

const ShiftThefirstcont = countries.shift()
console.log(ShiftThefirstcont)
console.log(countries)

// unshift 
const UnshiftNewelement = countries.unshift({ name: "KSA", code: 10 })
console.log(countries);

// sort / filter / map 
const sortedCountries = countries.filter(country => country.code > 5)
  .map(country => country.name).sort((a, b) => b.localeCompare(a));
console.log("last sorted countries", sortedCountries)

// table of coutries


// fetch data with fatch methode 

// fetch("https://restcountries.com/v3.1/all ")
//   .then(response => response.json())
//   .then(data => {
//     const topTenCountries = data.slice(0, 10)
//     const table = document.getElementById('countriesTable');
//     const sortcont = data.sort((a, b) => a.cca3.localeCompare(b.cca3))

//     topTenCountries.forEach(country => {
//       const row = table.insertRow();
//       const cell1 = row.insertCell(0);
//       const cell2 = row.insertCell(1);

//       cell1.textContent = country.name.common;
//       cell2.textContent = country.cca3;
//     });
//   })


// fetch data with axios methode 
axios.get("https://restcountries.com/v3.1/all")
  .then(response => {
    const topTenCountries = response.data.slice(0, 10)
    const table = document.getElementById('countriesTable');

    topTenCountries.forEach(country => {
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);

      cell1.textContent = country.name.common;
      cell2.textContent = country.cca3;
    });

  })



// list of countries ( li list  )  

const inputFileds = [

  document.getElementById("input-contry"),
  document.getElementById("code-contry")

]

let countriesArray = [];
const nameField = document.getElementById("input-contry");
const codeField = document.getElementById("code-contry");
const inputButton = document.getElementById("add-button");
const countryList = document.getElementById("countries-list");

inputButton.addEventListener("click", function () {
  let newCountryName = nameField.value.trim();
  let newCodeAdd = codeField.value.trim();

  if (newCountryName !== "" && newCodeAdd !== "") {
    countriesArray.push({ name: newCountryName, code: newCodeAdd });
    saveCountriesToLocalStorage();
    clearInputFields();
    renderCountries();
  }
});


function saveCountriesToLocalStorage() {
  localStorage.setItem("countriesArray", JSON.stringify(countriesArray));
}

function loadCountriesFromLocalStorage() {
  let storedCountries = localStorage.getItem("countriesArray");
  countriesArray = JSON.parse(storedCountries) || [];
  renderCountries();
  console.log("stored--------------------", countriesArray)
}

function renderCountries() {

  countryList.innerHTML = "";
  for (let i = 0; i < countriesArray.length; i++) {
    let country = countriesArray[i];
    let newElementAdded = `<li>${country.name} (code: ${country.code})</li>`;
    countryList.innerHTML += newElementAdded;
  }
}
loadCountriesFromLocalStorage();

function clearInputFields() {
  nameField.value = "";
  codeField.value = "";
}