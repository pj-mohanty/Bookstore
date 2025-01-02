# Bookstore App  

## Description  
The **Bookstore App** is a full-stack web application designed to provide users with a seamless experience for browsing and purchasing books. The platform features a user-friendly interface and robust backend functionality, making it easy for users to explore a wide range of book collections, add items to their cart, and securely complete transactions.  

This project uses modern web development technologies like React, Redux, and TailwindCSS on the frontend, while the backend leverages Node.js, Express, and MongoDB for reliable data handling. Firebase Authentication ensures secure user management, while JWT tokens enable safe and authenticated API communication. Whether you're a casual reader or an avid book collector, the Bookstore App is built to deliver a smooth and enjoyable online shopping experience.  

---

## Features  
- **Browse Books**: Explore a collection of books categorized by genres, authors, and popularity.  
- **Search Functionality**: Quickly find books using a powerful search feature.  
- **User Authentication**: Secure login and signup using Firebase Authentication.  
- **Shopping Cart**: Add books to your cart and manage your purchases.  
- **Analytics Dashboard**: Real-time data visualization using Chart.js for admins.  
- **Modern UI**: A sleek and responsive design built with TailwindCSS.  
- **Secure Transactions**: Backend API protected using JWT tokens for secure operations.  

---

## Installation  

### Prerequisites  
1. **Node.js**: Ensure you have Node.js installed.  
2. **MongoDB**: Access to a running MongoDB instance or URI.  
3. **Firebase**: A Firebase project set up for authentication.  

### Steps  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/your-repo/bookstore-app.git  
   ```  

2. Navigate into the project directory:  
   ```bash  
   cd bookstore-app  
   ```  

3. Set up the **frontend** and **backend** environment variables:  
   - Create a `.env` file in both the `frontend` and `backend` folders.  
   - Add the following variables:  

     - **Frontend `.env`**:  
       ```env  
       REACT_APP_FIREBASE_API_KEY=your_firebase_api_key  
       REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain  
       ```  

     - **Backend `.env`**:  
       ```env  
       MONGO_URI=your_mongo_db_uri  
       FIREBASE_ADMIN_SDK_KEY=your_firebase_admin_sdk_key  
       JWT_SECRET=your_jwt_secret_key  
       ```  

4. Install dependencies:  
   - For the frontend:  
     ```bash  
     cd frontend  
     npm install  
     ```  
   - For the backend:  
     ```bash  
     cd backend  
     npm install  
     ```  

5. Start the application:  
   - For the frontend:  
     ```bash  
     npm run dev  
     ```  
   - For the backend:  
     ```bash  
     npm start  
     ```  

---

## Technologies Used  

### Frontend  
- **React**: For building the user interface.  
- **Redux Toolkit**: For state management.  
- **TailwindCSS**: For modern and responsive styling.  
- **Firebase**: For secure user authentication.  
- **Chart.js**: For data visualization.  
- **Axios**: For making HTTP requests to the backend.  

### Backend  
- **Node.js**: Server-side runtime.  
- **Express.js**: Web framework for handling routes and middleware.  
- **MongoDB**: Database for storing book and user data.  
- **Firebase Admin SDK**: For managing authentication.  
- **JWT**: For secure API communication and user authorization.  

---

## Scripts  

### Frontend Scripts  
- `npm run dev`: Starts the development server.  
- `npm run build`: Builds the application for production.  
- `npm run lint`: Runs linting checks.  
- `npm run preview`: Previews the production build.  

---

## Future Plans  
- Add functionality for users to leave reviews and ratings for books.  
- Implement a wishlist feature for users to save their favorite books.  
- Integrate a payment gateway for seamless online transactions.  
- Introduce a recommendation system based on user preferences.  
- Enhance UI accessibility for a more inclusive experience.  

---

