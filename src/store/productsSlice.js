import { createSlice } from '@reduxjs/toolkit';

const initialProducts = [
  { id: 1, name: 'Wireless Headphones', price: 2999, category: 'Electronics', image: '🎧', description: 'Premium wireless headphones with noise cancellation, 30-hour battery life, and deep bass. Perfect for music lovers and remote workers.', rating: 4.5 },
  { id: 2, name: 'Smart Watch', price: 4999, category: 'Electronics', image: '⌚', description: 'Feature-packed smartwatch with heart rate monitor, GPS tracking, sleep analysis, and 7-day battery life.', rating: 4.2 },
  { id: 3, name: 'Laptop Stand', price: 1499, category: 'Home', image: '💻', description: 'Ergonomic aluminum laptop stand with adjustable height. Improves posture and keeps your laptop cool.', rating: 4.7 },
  { id: 4, name: 'Bluetooth Speaker', price: 1999, category: 'Electronics', image: '🔊', description: 'Portable waterproof Bluetooth speaker with 360° surround sound, 12-hour playtime, and party mode.', rating: 4.3 },
  { id: 5, name: 'Running Shoes', price: 3499, category: 'Fashion', image: '👟', description: 'Lightweight running shoes with breathable mesh upper, responsive cushioning, and durable rubber outsole.', rating: 4.6 },
  { id: 6, name: 'Backpack', price: 1299, category: 'Fashion', image: '🎒', description: 'Water-resistant travel backpack with USB charging port, anti-theft design, and padded laptop compartment.', rating: 4.4 },
  { id: 7, name: 'Desk Lamp', price: 899, category: 'Home', image: '💡', description: 'LED desk lamp with 5 brightness levels, 3 color temperatures, and USB charging port. Eye-friendly light.', rating: 4.1 },
  { id: 8, name: 'Sunglasses', price: 799, category: 'Fashion', image: '🕶️', description: 'Polarized UV400 sunglasses with lightweight titanium frame. Stylish design for all-day comfort.', rating: 4.0 },
  { id: 9, name: 'Mechanical Keyboard', price: 3999, category: 'Electronics', image: '⌨️', description: 'RGB mechanical keyboard with hot-swappable switches, PBT keycaps, and programmable macros.', rating: 4.8 },
  { id: 10, name: 'Plant Pot Set', price: 599, category: 'Home', image: '🪴', description: 'Set of 3 ceramic plant pots with drainage holes and bamboo trays. Minimalist Scandinavian design.', rating: 4.3 },
  { id: 11, name: 'Denim Jacket', price: 2499, category: 'Fashion', image: '🧥', description: 'Classic denim jacket with premium wash, brass buttons, and comfortable stretch denim fabric.', rating: 4.5 },
  { id: 12, name: 'Wireless Charger', price: 999, category: 'Electronics', image: '🔋', description: 'Fast wireless charging pad compatible with all Qi devices. Sleek glass surface with LED indicator.', rating: 4.2 },
];

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: initialProducts,
    searchTerm: '',
    category: 'All',
    sortBy: 'default',
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setSearchTerm, setCategory, setSortBy } = productsSlice.actions;

export const selectFilteredProducts = (state) => {
  let products = [...state.products.allProducts];
  const { searchTerm, category, sortBy } = state.products;

  if (searchTerm) {
    products = products.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (category !== 'All') {
    products = products.filter(p => p.category === category);
  }

  switch (sortBy) {
    case 'price-low':
      products.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      products.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      products.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  return products;
};

export const selectAllProducts = (state) => state.products.allProducts;
export const selectProductById = (id) => (state) =>
  state.products.allProducts.find(p => p.id === Number(id));

export default productsSlice.reducer;
