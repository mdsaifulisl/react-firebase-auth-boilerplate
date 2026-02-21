# Assignment : 06 - Firebase Authentication System

**Name:** Md. Saiful Islam  
**Email:** saiful01741899@gmail.com  
**Live URL:** [https://glistening-raindrop-72194a.netlify.app/](https://glistening-raindrop-72194a.netlify.app/)  
**GitHub Repository:** [https://github.com/mdsaifulisl/react-firebase-auth-boilerplate](https://github.com/mdsaifulisl/react-firebase-auth-boilerplate)

---

## Project Overview
This is a secure and fully functional **User Authentication System** built with **React JS** and **Firebase**.  
The application provides a seamless authentication experience, including **Email/Password registration**, **Social logins (Google & GitHub)**, and **advanced routing** using **React Context API**.  

The system is designed to handle real-world scenarios such as persistent login states, route protection, and dynamic UI updates based on user authentication status.

---

## Key Features

- **Multi-Provider Authentication:** Secure login via Email/Password, Google, and GitHub.
- **Dynamic Profile Management:** Automatically updates user `displayName` upon registration to ensure personalized user data.
- **Smart Routing System:**
    - **Protected Routes:** Private content (Dashboard) is only visible to logged-in users.
    - **Public Route Protection:** Logged-in users are automatically redirected away from Login/Register pages.
- **Persistence:** Uses Firebase's `onAuthStateChanged` to keep users logged in even after refreshing the page.
- **Robust Error Handling:** Custom handling for common issues like `email-already-in-use`, `invalid-email`, and `account-exists-with-different-credential`.
- **404 Custom Error Page:** A dedicated route to handle invalid URLs gracefully.
- **Responsive UI:** Fully optimized for mobile and desktop using **Bootstrap 5** and custom CSS.

---

## Technologies Used

- **React JS (Vite)** – Frontend library for building the UI.
- **Firebase Authentication** – Identity platform for secure login and registration.
- **React Router DOM** – Navigation management and route guarding.
- **React Context API** – Global state management for user authentication data.
- **Bootstrap 5** – Framework for responsive design and components.
- **Netlify** – Cloud hosting for production deployment.

---

## Project Structure Highlights

- **`AuthProvider.jsx`**: Central source for auth state; manages login, logout, and registration logic.
- **`PrivateRoute.jsx`**: A wrapper component that checks for authentication before rendering private pages.
- **`PublicRoute.jsx`**: Prevents authenticated users from returning to Login or Register pages.
- **`firebase.config.js`**: Securely initializes the Firebase app and Auth services.
- **`NotFound.jsx`**: Catch-all component for 404 errors.

---

## Running Locally

Follow these steps to set up the project on your local machine:

**1. Clone the repository:**
```bash
git clone [https://github.com/mdsaifulisl/react-firebase-auth-boilerplate.git](https://github.com/mdsaifulisl/react-firebase-auth-boilerplate.git)

2. cd react-firebase-auth-boilerplate
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
