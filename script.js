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

window.onload = function() {
  randomizeMeals(); // Call your randomization function on load
};


function randomizeMeals() {
  const dayPlanElements = document.querySelectorAll(".day-plan");  // Target .day-plan elements
  const totalWeight = meals.reduce((acc, meal) => acc + meal.weight, 0);

  dayPlanElements.forEach((dayPlan, index) => {  // Loop through each dayPlan element
    let randomValue = Math.random() * totalWeight;
    let chosenMeal;

    for (const meal of meals) {
      randomValue -= meal.weight;
      if (randomValue <= 0) {
        chosenMeal = meal;
        break;
      }
    }

    dayPlan.textContent = chosenMeal.name;  // Update content of .day-plan
  });
}
