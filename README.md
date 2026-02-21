# Assignment : 06 - Firebase Authentication System

**Name:** Md. Saiful Islam  
**Email:** saiful01741899@gmail.com  
**Live URL:** [https://glistening-raindrop-72194a.netlify.app/](https://glistening-raindrop-72194a.netlify.app/)  

---

## Project Overview
This is a secure and fully functional **User Authentication System** built with **React JS** and **Firebase**.  
It demonstrates complete authentication flows, including **Email/Password registration**, **Social logins (Google & GitHub)**, and **protected routing** using **React Context API**.  

The system ensures a smooth user experience while maintaining strong security standards.

---

## Key Features

- **Email & Password Authentication:** Secure registration and login  
- **Social Login Integration:** One-click login using **Google** and **GitHub**  
- **Persistent Login State:** Users remain logged in after refreshing the page  
- **Profile Management:** User display name saved automatically during registration  
- **Protected Routes:** Private pages accessible only to authenticated users  
- **Public Route Protection:** Logged-in users redirected from Login/Register pages  
- **Custom 404 Page:** User-friendly "Page Not Found" route for invalid URLs  
- **Dynamic Header:** Navbar updates based on authentication status  
- **Error Handling:** Friendly messages for common Firebase errors  
- **Responsive Design:** Built with **Bootstrap 5** and custom CSS

---

## Technologies Used

- **React JS (Vite)** – Frontend framework  
- **Firebase Authentication** – Email/Password, Google, GitHub login  
- **React Router DOM** – Routing and protected routes  
- **React Context API** – Global authentication state management  
- **Bootstrap 5** – Styling and layout  
- **Netlify** – Deployment

---

## Project Structure Highlights

- **AuthProvider.jsx:** Centralized authentication logic using Context API  
- **PrivateRoute.jsx:** Protects private routes and redirects unauthenticated users  
- **PublicRoute.jsx:** Prevents logged-in users from accessing login/register pages  
- **firebase.config.js:** Firebase SDK configuration and initialization  
- **Home.jsx:** Landing page with hero, features, and CTA sections  
- **Header.jsx:** Dynamic navigation bar based on auth state  

---

## Running Locally

1. Clone the repository:

```bash
git clone https://github.com/mdsaifulisl/react-firebase-auth-boilerplate.git
