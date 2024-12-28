
---

# GeoTracker

## Project Description

**GeoTracker** is a real-time web application that enables users to track and manage their location efficiently. The app allows for user authentication, continuous location tracking, and provides an admin dashboard to view the locations of all users. The frontend is built with React, while the backend is powered by Node.js and Express, with MongoDB as the data storage solution.

### Key Features:

1. **User Registration and Login**  
   Users can create an account and log in to the application. The login is secured with JWT (JSON Web Tokens), and passwords are hashed to ensure security.

2. **Real-time Location Tracking**  
   After logging in, users can grant location access to the application. The app will continuously track their location and send updates to the backend at regular intervals, ensuring real-time location monitoring.

3. **Admin Dashboard**  
   Admin users can view the latest locations of all registered users. Each user is represented by a dedicated card showing their username, latitude, longitude, and the timestamp of the last location update. The dashboard fetches data from the backend and ensures that only the most recent location for each user is displayed.

4. **Responsive Design**  
   The application is designed to be fully responsive, providing a seamless user experience across various devices such as desktops, tablets, and smartphones. Material-UI is used for building the UI, ensuring a modern and intuitive interface.

---

## Technologies Used

### Frontend:
- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: A popular React UI framework that provides pre-designed components for faster and easier development.

### Backend:
- **Node.js**: A JavaScript runtime built on Chrome's V8 engine, used for building scalable network applications.
- **Express**: A web application framework for Node.js, designed for building RESTful APIs and web applications.

#### **Backend Dependencies**  

- **bcryptjs**: Handles password hashing for secure user authentication.  
- **body-parser**: Parses incoming request bodies in a middleware.  
- **cors**: Enables cross-origin requests between the frontend and backend.  
- **express**: A minimal and flexible Node.js framework for building web applications.  
- **jsonwebtoken**: Used for creating and verifying JSON Web Tokens for secure authentication.  
- **mongoose**: Manages MongoDB interactions with a simple and robust Object Data Modeling (ODM) library.  
- **nodemon**: Automatically restarts the server during development when file changes are detected.  
- **pg**: A PostgreSQL client for Node.js, ensuring compatibility with PostgreSQL databases.  
- **pg-hstore**: Handles serialization of JSON data to PostgreSQL hstore format.  
- **redis**: A high-performance in-memory data structure store used for caching and real-time location updates.  
- **socket.io**: Enables real-time, bidirectional communication between the server and client, crucial for live location tracking.  


### Database:
- **MongoDB**: A NoSQL database that stores data in flexible, JSON-like documents, which allows for easy handling of unstructured data.

### Authentication:
- **JSON Web Tokens (JWT)**: A compact and URL-safe means of representing claims to be transferred between two parties. JWT is used for securely handling user authentication.

---

## Installation

### Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js (v14 or higher)**: You can download it from [Node.js official website](https://nodejs.org/).
- **MongoDB**: Set up either a local or cloud MongoDB instance. You can get started with MongoDB Atlas for cloud databases at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

---

### Clone the Repository

1. Clone the repository to your local machine:

```bash
https://github.com/7rajnishsharma/GeoTracker.git
cd GeoTracker
```

### Backend Setup

1. Navigate to the backend directory:

```bash
cd back-end
```

2. Install the required dependencies:

```bash
npm install
```

3. Create a `.env` file in the backend directory and add the following configurations:

```
MONGODB_URI=mongodb://your_mongo_uri
JWT_SECRET=your_jwt_secret
```

- Replace `your_mongo_uri` with the connection string to your MongoDB instance.
- Replace `your_jwt_secret` with a secret key for JWT authentication (you can generate one randomly).

4. Start the backend server:

```bash
npm start
```

This will start the backend server on `http://localhost:5000`.

---

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd ../front-end
```

2. Install the required dependencies:

```bash
npm install
```

3. Start the frontend server:

```bash
npm start
```

This will start the frontend server on `http://localhost:3000`.

---

## Usage

1. **User Registration and Login**:  
   - Visit `http://localhost:3000/register` to create a new account.
   - After registration, log in at `http://localhost:3000/login` using your credentials.
   
2. **Real-Time Location Tracking**:  
   - Once logged in, the app will ask for location permissions. Grant it to start real-time tracking.  
   - The app will periodically update your location to the backend.

3. **Admin Dashboard**:  
   - The admin user can access the dashboard at `http://localhost:3000/admin/admin` to view the latest locations of all registered users.
   - Each user will have one card displaying their username, current latitude, longitude, and timestamp of the last location update.

---

## Screenshots

**Homepage**  

![HomePage](https://github.com/user-attachments/assets/e286333d-5a06-45f3-b1a8-35acc168ba1f)

**Login Page**  

![LoginPage](https://github.com/user-attachments/assets/c9d036ef-aa06-4745-b2ac-e0a0fffb9d70)

**Signup Page**  

![SignUp](https://github.com/user-attachments/assets/e52ca51d-2d1c-4fc0-bfcd-e439a26f91c0)

**Admin Dashboard**  

![Admin](https://github.com/user-attachments/assets/4578c634-6bb6-4aa1-bd43-2be3573735f6)

**MongoDB Database**  

![Database](https://github.com/user-attachments/assets/6e20b466-a2c1-4d6f-915d-0521fdf03a01)

---

## Contributing

Contributions are welcome! To contribute to this project, follow these steps:

1. **Fork the repository** on GitHub.
2. **Clone the repository** to your local machine:

```bash
git clone https://github.com/yourusername/location-tracker.git
```

3. **Create a new branch** for your feature:

```bash
git checkout -b feature/YourFeature
```

4. **Make your changes** and commit them:

```bash
git commit -m 'Add new feature'
```

5. **Push to the branch**:

```bash
git push origin feature/YourFeature
```

6. **Create a pull request** from your branch to the main repository.

---


## Acknowledgments

- **Material-UI**: For providing the UI components that were used to build the frontend.
- **MongoDB**: For being a flexible and scalable database solution.
- **Express**: For simplifying the creation of APIs in the backend.
- **React**: For providing a declarative, component-based architecture to build the UI.

---
