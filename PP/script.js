// Save animal to localStorage
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("animalForm");
    const msg = document.getElementById("msg");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const name = document.getElementById("name").value;
        const breed = document.getElementById("breed").value;
        const dob = document.getElementById("dob").value;
  
        const animal = { name, breed, dob };
        let animals = JSON.parse(localStorage.getItem("animals")) || [];
        animals.push(animal);
        localStorage.setItem("animals", JSON.stringify(animals));
  
        msg.innerText = "Animal added successfully!";
        form.reset();
      });
    }
  
    // Display animals
    const animalList = document.getElementById("animalList");
    if (animalList) {
      const animals = JSON.parse(localStorage.getItem("animals")) || [];
      animals.forEach((animal) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${animal.name}</td><td>${animal.breed}</td><td>${animal.dob}</td>`;
        animalList.appendChild(row);
      });
    }
  });
  