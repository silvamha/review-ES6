const listIngredients = ["flour", "sugar", "eggs", "butter"];

export const ingredientsNeeded = () => {
    if (listIngredients.includes("chocolate")) {
  console.log("I am going to make a chocolate cake");
} else {
  console.log("I need to buy chocolate");
}
};


ingredientsNeeded();
