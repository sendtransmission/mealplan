const groceryList = [
  { name: "50/50 bread", category: "Breakfast" },
  { name: "Chocolate spread", category: "Breakfast" },
  { name: "Weetabix minis", category: "Breakfast" },
  { name: "Cornflakes", category: "Breakfast" }, // Can be in any category
  { name: "Mixed peppers", category: "Lunch" },
  { name: "Sugar snaps", category: "Lunch" },
  { name: "Raspberries", category: "Lunch" },
  { name: "Strawberries", category: "Lunch" },
  { name: "Chicken Satay", category: "Lunch" },
  { name: "Pepperami", category: "Lunch" },
  { name: "Frubes", category: "Lunch" },
  { name: "Smoothies", category: "Lunch" },
  { name: "Doritos", category: "Lunch" },
  { name: "Crisps", category: "Lunch" },
  { name: "Apples", category: "Lunch" },
  { name: "Croissant", category: "Lunch" },
  { name: "Bagels", category: "Lunch" },
  { name: "Brussels Pate", category: "Lunch" },
  { name: "Cat Chicken", category: "Other" },
  { name: "Bin liners", category: "Other" },
  
  // ... Add more items with their categories
];

function populateGroceryList(groceryList) {
  // Loop through each category in the groceryList
  for (const category of groceryList) {
    const listElement = document.getElementById(category.name + '-items'); // Get the target list element

    // Clear existing content (optional)
    listElement.innerHTML = '';

    // Loop through each item in the category
    for (const item of category.items) {
      // Create a new list item element
      const listItem = document.createElement('li');

      // Create a checkbox element
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = category.name + '-' + item; // Set unique ID for checkbox

      // Create a label element and connect it to the checkbox
      const label = document.createElement('label');
      label.textContent = item.name; // Set label text
      label.setAttribute('for', checkbox.id); // Connect label to checkbox

      // Append checkbox and label to the list item
      listItem.appendChild(checkbox);
      listItem.appendChild(label);

      // Add the list item to the unordered list
      listElement.appendChild(listItem);
    }
  }
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
