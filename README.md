# Assignment : 06 - Firebase Authentication System

**Name:** Md. Saiful Islam  
**Email:** saiful01741899@gmail.com  
**Live URL:** [https://glistening-raindrop-72194a.netlify.app/](https://glistening-raindrop-72194a.netlify.app/)  
**Client Repository:** [আপনার গিটহাব লিংক এখানে বসান]

### Project Description
This is a secure and robust **User Authentication System** built with **React JS** and **Firebase**. The application demonstrates a complete authentication flow, including Email/Password registration, Social logins (Google & GitHub), and protected routing using the **React Context API**.

#### Key Features:
- **Email & Password Authentication:** Users can create a new account and log in securely.
- **Social Login Integration:** One-click login/sign-up using **Google** and **GitHub** providers.
- **Persistent Login State:** Users remain logged in even after refreshing the page (via Firebase `onAuthStateChanged`).
- **Profile Management:** Automatic profile update to save the user's name during registration.
- **Protected Routes:** Unauthorized users are redirected to the login page when trying to access the **Dashboard**.
- **Public Route Protection:** Logged-in users are automatically redirected from Login/Register pages to the Home/Dashboard.
- **Interactive 404 Page:** A custom "Page Not Found" route for handling invalid URLs.
- **Dynamic Header:** Navigation bar changes dynamically based on the user's authentication status (Login/Logout/User Info).
- **Security:** Handled sensitive errors like `auth/email-already-in-use` and `auth/invalid-email` with user-friendly messages.
- **Responsive UI:** Built with **Bootstrap 5** and custom CSS for a seamless experience across all devices.

#### Technologies Used:
- **React JS** (Vite)
- **Firebase Authentication** (Email/Pass, Google, GitHub)
- **React Router Dom** (Routing & Protected Routes)
- **Context API** (Global Authentication State Management)
- **Bootstrap 5** (Styling & Layout)
- **Netlify** (Deployment)

### Project Structure Highlights
* **AuthProvider.jsx:** Centralized authentication logic using React Context.
* **PrivateRoute.jsx:** Higher-Order Component (HOC) to secure private data.
* **PublicRoute.jsx:** Prevents authenticated users from accessing login/register pages.
* **Firebase.config.js:** Secure configuration for Firebase SDK.

### How to Run Locally
1. Clone the repository: `git clone [repository-link]`
2. Install dependencies: `npm install`
3. Create a `.env` file and add your Firebase credentials.
4. Start the development server: `npm run dev`
