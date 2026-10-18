const form = document.getElementById("user-form");
form.addEventListener("submit", function(event) {event.preventDefault()
const name= document.getElementById("name").value;
const age= Number(document.getElementById("age").value);
const ageInMonths = (age*12)
document.getElementById("greeting").textContent= "Welcome to your world,"+ name +"!"
document.getElementById("age-message").textContent= "You are " + ageInMonths + " months old."}
);