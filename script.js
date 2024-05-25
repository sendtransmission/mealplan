const groceryList = [
  { name: "Milk", category: "Breakfast" },
  { name: "Bread", category: "Breakfast" },
  { name: "Eggs", category: "Breakfast" },
  { name: "Fruits", category: "All" }, // Can be in any category
  { name: "Vegetables", category: "All" },
  { name: "Chicken", category: "Dinner" },
  { name: "Rice", category: "Dinner" },
  // ... Add more items with their categories
];

function populateGroceryList() {
  const breakfastList = document.getElementById("breakfast-items");
  const lunchList = document.getElementById("lunch-items");
  const dinnerList = document.getElementById("dinner-items");
  const otherList = document.getElementById("other-items");

  groceryList.forEach(item => {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = item.name;
    listItem.textContent = item.name;
    listItem.appendChild(checkbox);

    switch (item.category) {
      case "Breakfast":
        breakfastList.appendChild(listItem);
        break;
      case "Lunch":
        lunchList.appendChild(listItem);
        break;
      case "Dinner":
        dinnerList.appendChild(listItem);
        break;
      default:
        otherList.appendChild(listItem);
    }
  });
}

populateGroceryList();



// Define meals with weights (higher weight = more likely)
const meals = [
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
  { name: "Roast Chicken", weight: 1 },
  { name: "Biryani", weight: 1 },
  { name: "Buddha Bowls", weight: 1 },
  { name: "Tuscan sausage pasta", weight: 1 },
  { name: "Chicken for Thor", weight: 0.2 },
  { name: "Sausage rolls and potato waffles", weight: 1 },
  { name: "Pancakes", weight: 1 },
  { name: "French Toast", weight: 1 },
  { name: "Beans on toast", weight: 1 },
  { name: "Prawn tempura, spring rolls etc.", weight: 1 },
  { name: "Prawns, avocado and corn fritters", weight: 1 },
  { name: "Something with rosemary fries", weight: 1 },
  { name: "Swedish meatballs", weight: 1 },
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
