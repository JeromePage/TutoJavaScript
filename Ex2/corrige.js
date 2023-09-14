const p = personsOfInterest[i];
const pElement = document.createElement("div");
pElement.classList.add("item");
pElement.innerHTML =
  "<div class='pict'></div><h1>" +
  p.name +
  "</h1><h2>Age: " +
  p.age +
  "</h2><h2>Occupation: " +
  p.occup +
  "</h2>";
list.appendChild(pElement);
