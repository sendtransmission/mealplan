// Define meals with weights (higher weight = more likely)
const meals = [
  { name: "Hot dogs", weight: 1 },
  { name: "Carbonara", weight: 1 },
  { name: "Home Pizzas", weight: 1 },
  { name: "Chicken wraps", weight: 1 },
  { name: "Noodles", weight: 1 },
  { name: "Onigiri", weight: 1 },
  { name: "Chicken and rice", weight: 1 },
  { name: "Chorizo and spring onion pasta", weight: 1 },
  { name: "Burgers/hot dogs", weight: 1 }, 
  { name: "prawn and lime linguini", weight: 1 }, 
  { name: "brinner", weight: 1 },
  { name: "macaroni cheese", weight: 1 },
  { name: "lasagne", weight: 1 },
  { name: "spaghetti Bolognese", weight: 1 },
  { name: "baked potatoes", weight: 1 },
  { name: "French dip", weight: 1 },
];


function shuffleAndAssignMeals() {
  // Copy the meals array to avoid modifying the original
  const availableMeals = [...meals];

  // Select seven random meals without repetition
  const chosenMeals = [];
  for (let i = 0; i < 7; i++) {
    const randomIndex = Math.floor(Math.random() * availableMeals.length);
    chosenMeals.push(availableMeals.splice(randomIndex, 1)[0]);
  }

  // Update the content of each day plan element
  const dayPlanElements = document.querySelectorAll(".day-plan");
  dayPlanElements.forEach((dayPlan, index) => {
    dayPlan.textContent = chosenMeals[index];
  });
}

// Call the function on page load (assuming this script is loaded after the HTML)
window.onload = shuffleAndAssignMeals;
