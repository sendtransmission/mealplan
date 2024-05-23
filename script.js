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
  { name: "Prawn and lime linguini", weight: 1 }, 
  { name: "Brinner", weight: 1 },
  { name: "Macaroni cheese", weight: 1 },
  { name: "Lasagne", weight: 1 },
  { name: "Spaghetti Bolognese", weight: 1 },
  { name: "Baked potatoes", weight: 1 },
  { name: "French dip", weight: 1 },
];

let chosenMeals = []; // Array to track chosen meals for the week

window.onload = function() {
  randomizeMeals(); // Call your randomization function on load
};


function randomizeMeals() {
  const dayPlanElements = document.querySelectorAll(".day-plan"); // Target .day-plan elements
  const totalWeight = meals.reduce((acc, meal) => acc + meal.weight, 0);

  dayPlanElements.forEach((dayPlan, index) => { // Loop through each dayPlan element
    let randomValue = Math.random() * totalWeight;
    let chosenMeal;

    for (const meal of meals.slice()) { // Copy of meals array for each day
      randomValue -= meal.weight;
      if (randomValue <= 0) {
        chosenMeal = meal;
        chosenMeals.push(chosenMeal); // Add chosen meal to tracking array
        break;
      }
    }

    if (chosenMeal) { // Update day plan only if a meal was chosen
      dayPlan.textContent = chosenMeal.name;
    }
  });
}
