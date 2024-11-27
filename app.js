let mode = document.querySelector("#mode");
function darkMood() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  //   mode.textContent = "Light mode";
}
darkMood();

const list = document.querySelector("#list");
const search = document.querySelector("#search");

search.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  data.forEach((item) => {
    const isVisible = item.countryName.toLowerCase().includes(value);
    item.element.classList.toggle("hide", !isVisible);
  });
});

async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

getData("https://restcountries.com/v3.1/all")
  .then((data) => {
    data.forEach((item) => {
      console.log(item.currencies);
      const div = document.createElement("div");
      div.classList = "card";
      const countryFlag = document.createElement("img");
      countryFlag.classList = "flag";
      console.log("Name:", item.name.common);
      countryFlag.src = item.flags.png;
      const textContent = document.createElement("div");
      textContent.classList = "text-content";
      const countryName = document.createElement("h3");
      countryName.classList = "name";
      countryName.innerText = item.name.common;
      const population = document.createElement("p");
      population.innerHTML = `<b>Population:</b> ${item.population}`;
      const region = document.createElement("p");
      region.innerHTML = `<b>Region:</b> ${item.region}`;
      const capital = document.createElement("p");
      capital.innerHTML = `<b>Capital:</b> ${item.capital}`;
      div.append(countryFlag, textContent);
      textContent.append(countryName, population, region, capital);
      list.appendChild(div);
      //   const commaSeparatedPopulation = item.population.toLocaleString();

      //   population.innerHTML = `<b>Population:</b> ${commaSeparatedPopulation}`;
      //   region.innerHTML = `<b>Region:</b> ${item.region}`;
      //   capital.innerHTML = `<b>Capital:</b> ${item.capital}`;
    });
  })
  .catch((error) => {});
