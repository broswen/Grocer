const initialState = {
  categories: new Set(["🥩 Meat", "🥕 Vegetables", "🍎 Fruits", "🧀 Dairy", "🍞 Grains"]),
  products: [
    {id: 0, name: "Ground Beef", category: "🥩 Meat", price: "5.00", quantity: "12", desc: "Ground beef in a plastic tube"},
    {id: 1, name: "T-bone Steak", category: "🥩 Meat", price: "12.00", quantity: "8", desc: "T-bone Steak"},
    {id: 2, name: "2% Milk - Gallon", category: "🧀 Dairy", price: "3.00", quantity: "22", desc: "A gallon of 2% milk"},
    {id: 3, name: "Chocolate Milk", category: "🧀 Dairy", price: "4.00", quantity: "13", desc: "A gallon of chocolate milk"},
    {id: 4, name: "Spinach", category: "🥕 Vegetables", price: "3.00", quantity: "15", desc: "Spinach in a plastic bag"},
    {id: 5, name: "Lettuce", category: "🥕 Vegetables", price: "2.00", quantity: "12", desc: "A head of lettuce"},
    {id: 6, name: "Bananas", category: "🍎 Fruits", price: "3.00", quantity: "5", desc: "A bunch of bananas"},
  ]
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD_PRODUCT":
      action.product.id = state.products.length;
      const newProducts = [...state.products, action.product];
      let newCategories = new Set(state.categories);
      newCategories.add(action.product.category);
      return {...state, products: newProducts, categories: newCategories};

    default:
      return state
  }
}

export default reducer;