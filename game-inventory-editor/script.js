let itmDiscription = document.querySelector("#itmDiscription");
let inspectBtn = document.querySelector("#inspectBtn");
let specialBtn = document.querySelector("#specialBtn");
let specialItmDetails = document.querySelector("#specialItmDetails");
let itmSpeciality = document.querySelector("#itmSpeciality");


inspectBtn.addEventListener("click" , () => {

itmDiscription.textContent = "Shadow Sword Its Very PowerFull Demon Sword Kill Any One Only One Attack."


})


itmSpeciality.style.display = "none";

specialBtn.addEventListener("click" , () => {

itmSpeciality.style.display = "block";


})