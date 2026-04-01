# 🍕 Swiggy Clone — Full Stack Food Delivery App

A production-grade clone of **Swiggy**, India's leading food delivery platform. Built with React, Redux Toolkit, Tailwind CSS, and real Swiggy APIs — fully functional with live restaurant data, dynamic menus, cart management, and veg/non-veg filtering.

---

## 🚀 Live Features

| Feature | Description |
|---|---|
| 🏠 **Landing Page** | Hero section with location & search inputs, service cards (Food Delivery, Instamart, Dineout) |
| 🍽️ **Restaurant Listing** | Real-time top restaurant chains fetched from Swiggy's live API |
| 📋 **Restaurant Menu Page** | Dynamic menu with collapsible sections (Top Picks, Recommended, etc.) |
| 🥦 **Veg / Non-Veg Filter** | Toggle buttons to filter menu items by food type |
| 🔍 **Search Dishes** | Search bar to find specific items within a restaurant menu |
| 🛒 **Cart System** | Add/remove items, quantity control (+ / -), live total calculation |
| 📦 **Place Order** | Cart summary with "Place Order" CTA |
| 🌐 **Client-Side Routing** | URL-based navigation (`/restaurant`, `/city/delhi/:id`) |

---

## 🛠️ Tech Stack

```
Frontend       →  React 18 + Vite
Styling        →  Tailwind CSS
State Mgmt     →  Redux Toolkit
Routing        →  React Router DOM v6
Data Source    →  Swiggy Live API (Real data)
CORS Fix       →  cors-anywhere Proxy Server
```

---

## 📸 Screenshots

### 🏠 Home Page
Orange-themed hero with location search + Food Delivery / Instamart / Dineout cards.

### 🍽️ Restaurant Listing (`/restaurant`)
Live restaurant cards with real images, ratings, delivery time, and cuisine tags — fetched directly from Swiggy's API.

### 📋 Menu Page (`/city/delhi/:restaurantId`)
Full menu with collapsible categories, item images, calorie info, and ADD button.

### 🥦 Veg Filter Active
Green "Veg" toggle filters only vegetarian items — e.g., Margherita (₹169, 4.0★).

### 🍗 Non-Veg Filter Active
Red "Non Veg" toggle shows non-vegetarian items — e.g., Chicken Sausage (₹259, 5.0★).

### 🛒 Cart
Full cart with item details, quantity controls, total price (₹438), and "Place Order" button.

---

## ⚙️ Architecture

```
src/
├── components/
│   ├── Header.jsx          # Navbar with Search + Cart
│   ├── RestaurantCard.jsx  # Card component for restaurant listing
│   ├── MenuItem.jsx        # Individual menu item with ADD button
│   └── Cart.jsx            # Cart sidebar/page
├── pages/
│   ├── Home.jsx            # Landing page
│   ├── RestaurantList.jsx  # /restaurant route
│   └── RestaurantMenu.jsx  # /city/:city/:id route
├── store/
│   ├── store.js            # Redux store configuration
│   └── cartSlice.js        # Cart state: add, remove, update quantity
├── utils/
│   └── constants.js        # API URLs, proxy config
└── App.jsx                 # Route definitions
```

---

## 🔌 Live API Integration

This project fetches **real data** directly from Swiggy's internal APIs:

```
Restaurant List  →  https://www.swiggy.com/dapi/restaurants/list/v5
Restaurant Menu  →  https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&restaurantId={id}
```

### CORS Handling
Since Swiggy's API blocks direct browser requests, a **cors-anywhere** proxy server is used to forward requests:

```js
const PROXY = "https://cors-anywhere.herokuapp.com/";
const API_URL = `${PROXY}https://www.swiggy.com/dapi/...`;
```

> This is the same technique used by many production Swiggy clones and food-tech interview projects.

---

## 🧠 Redux State Management

Cart state is managed globally using **Redux Toolkit**:

```js
// cartSlice.js
const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem:    (state, action) => { /* adds item or increments qty */ },
    removeItem: (state, action) => { /* decrements qty or removes */ },
    clearCart:  (state) => { state.items = [] }
  }
});
```

---

## 🧩 Key Implementations

### Veg / Non-Veg Filter
```jsx
const [filter, setFilter] = useState(null); // null | 'veg' | 'nonveg'

const filteredItems = menuItems.filter(item => {
  if (filter === 'veg') return item.isVeg === 1;
  if (filter === 'nonveg') return item.isVeg === 0;
  return true;
});
```

### Collapsible Menu Sections
Each category (Top Picks, Recommended, etc.) has a toggle arrow — sections expand/collapse independently.

### Dynamic Routing
```jsx
<Route path="/city/:city/:restaurantId" element={<RestaurantMenu />} />
// Extracts restaurantId from URL → passes to API call
```

---

## 🏃 Getting Started

```bash
# Clone the repo
git clone https://github.com/yourusername/swiggy-clone.git
cd swiggy-clone

# Install dependencies
npm install

# Start dev server
npm run dev

# Open in browser
http://localhost:5173
```

> **Note:** For the CORS proxy to work, visit [cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo) and click **"Request temporary access"** before using the app.

---

## 📦 Dependencies

```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x",
  "@reduxjs/toolkit": "^2.x",
  "react-redux": "^9.x",
  "tailwindcss": "^3.x",
  "vite": "^5.x"
}
```

---

## 💡 What This Project Demonstrates

- ✅ Real API integration with live production data scraping
- ✅ Global state management with Redux Toolkit (cart persist across pages)
- ✅ Client-side routing with dynamic URL params
- ✅ Conditional rendering & filtering (veg/non-veg)
- ✅ Component-based architecture with reusable UI components
- ✅ Proxy server pattern for CORS-restricted APIs
- ✅ Responsive layout with Tailwind CSS utility classes
- ✅ Modular folder structure following industry conventions

---

## 🙋 Author

Built with ❤️ as a deep-dive React learning project — replicating one of India's most complex food delivery UIs from scratch.

---

*If you found this useful, drop a ⭐ on the repo!*
