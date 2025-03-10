# Peddy Pet E-Commerce

Welcome to the Peddy Pet E-Commerce website! This is a fully functional e-commerce website built using React, featuring an interactive UI and multiple functionalities for a great user experience.

## 📦 Live Website Link

You can explore the live version of the project at the following link:

**[Live Website Link](https://all-gaget-product.netlify.app/)**

## 📑 Requirement Document

For more detailed information about the project requirements, you can view the requirement document:

**[Requirement Document Link](https://reactrouter.com/en/main)**

## 🛠️ Technologies Used

- React.js
- React Router
- React Context API
- Tailwind CSS
- React Modal
- React Helmet

## ⚙️ React Fundamental Concepts Used

This project utilizes a variety of React concepts to create a smooth and interactive user experience. The main concepts used are:

1. **JSX:** Used to structure the UI elements of the website.
2. **Functional Components:** All components of the website are built as functional components.
3. **State Management:** `useState` hook for managing the state within components.
4. **Effect Hook:** `useEffect` is used for side effects, like updating the cart state or sorting items.
5. **Context API:** Global state management is handled via the Context API to share cart data across components.
6. **Event Handling:** Functions like `onClick` and `onChange` are used for managing user interactions.
7. **Routing:** `react-router-dom` is used for navigation and managing different views.
8. **Conditional Rendering:** Render UI elements conditionally based on cart status (e.g., empty cart).
9. **Forms and Input Handling:** Simple form handling to interact with the user.
10. **Use of useNavigate:** To handle page redirection programmatically when needed (e.g., after purchase).

## 📦 Data Handling and Management

In this project, data is managed in the following ways:

1. **Context API:** 
   - The `CartContext` is used for global state management. It helps share the cart data and total cost across different components like `Dashboard`, `Cart`, etc.
   - The `WishlistContext` is used to handle the user's wishlist items across pages.
   
2. **Local Storage:**
   - Local storage is used to persist user cart data, so even if the user refreshes the page, the cart items will still be available.
   - This ensures a seamless experience and avoids data loss when the browser is reloaded.

## 🚀 5 Features of the Website

1. **Product Listing and Sorting:**
   - Users can view a list of products and sort them by price in descending order to make shopping easier.

2. **Cart Management:**
   - Users can add products to their cart, view the total price, and proceed to purchase.

3. **Modal Confirmation:**
   - After confirming a purchase, a modal shows up with a success message and resets the cart. 

4. **Dynamic Page Title:**
   - Each page has a dynamic title using `react-helmet` to improve SEO and user experience.

5. **Responsive UI:**
   - The website is fully responsive, and works well on both mobile and desktop devices. Tailwind CSS is used to ensure the site looks great on any screen size.

