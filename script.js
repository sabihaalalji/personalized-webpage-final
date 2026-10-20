const quotes = [
  "Believe in yourself.",
  "Small steps still move you forward.",
  "You are capable of learning new things.",
  "Keep going, even when it's difficult.",
  "Your future is full of possibilities."
];

function calculateAgeInMonths(age) {
  return age * 12;
}

const savedName = localStorage.getItem("name");
const savedAge = localStorage.getItem("age");

if (savedName !== null && savedAge !== null) {
  const age = Number(savedAge);

  document.getElementById("greeting").textContent = `Welcome to your world, ${savedName}!`;

  if (age < 18) {
    document.getElementById("age-message").textContent = "Your little adventure is just getting started!";
  } else {
    document.getElementById("age-message").textContent = "There's still so much life to explore!";
  }

  document.getElementById("months-message").textContent = "You are " + calculateAgeInMonths(age) + " months old.";

  let quoteText = "";
  for (let quote of quotes) {
    quoteText += quote + " ";
  }

  document.getElementById("quotes").textContent = quoteText;
}

const form = document.getElementById("user-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const age = Number(document.getElementById("age").value);
  const ageInMonths = calculateAgeInMonths(age);

  localStorage.setItem("name", name);
  localStorage.setItem("age", age);

  if (age < 18) {
    document.getElementById("age-message").textContent = "Your little adventure is just getting started!";
  } else {
    document.getElementById("age-message").textContent = "There's still so much life to explore!";
  }

  document.getElementById("greeting").textContent = `Welcome to your world, ${name}!`;
  document.getElementById("months-message").textContent = "You are " + ageInMonths + " months old.";

  let quoteText = "";
  for (let quote of quotes) {
    quoteText += quote + " ";
  }

  document.getElementById("quotes").textContent = quoteText;
});
