# User Management System

## Application Architecture:

The application follows a typical Node.js and Express architecture with MongoDB as the database. Here's a breakdown of the key components:

1. **Server Entry Point (`index.js`):**
   - The `index.js` file serves as the entry point for the application.
   - It initializes Express, connects to the MongoDB database, and sets up middleware.
   - The API routes for authentication (`authRouter`) and user management (`userRouter`) are defined here.

2. **Middleware:**
   - Middleware functions are used to handle various aspects of the application, such as global error handling (`globalErrorHandling`) and validation of incoming data (`validation`).

3. **Database (`database` folder):**
   - The `database` folder contains the MongoDB connection setup (`dbConnection.js`).
   - Mongoose is used as the ODM (Object Data Modeling) library to interact with the MongoDB database.
   - The User model is defined in `user.model.js`.

4. **Authentication (`auth` module):**
   - The authentication module (`authRouter`, `auth.controller.js`, `auth.validation.js`) handles user registration, login, and token validation.
   - JWT (JSON Web Tokens) are used for user authentication.

5. **User Management (`user` module):**
   - The user module (`userRouter`, `user.controller.js`, `user.validation.js`) provides endpoints for creating, reading, updating, and deleting user accounts.
   - CRUD operations are implemented using Mongoose to interact with the MongoDB database.

6. **Error Handling (`utils` folder):**
   - The `AppError` class is used to create standardized error objects.
   - The `handleAsyncError` function is a middleware that wraps asynchronous functions to catch errors and pass them to the global error handling middleware.

## Technologies Used:

- Node.js
- Express
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcrypt

## How to Run the Application:

1. **Environment Variables:**
   - Create a `.env` file in the root directory with the following content:

     ```plaintext
     PORT=3000
     CONNECTIONURL=mongodb://localhost:27017/user-management
     SALT_ROUNDS=10
     SECRET_KEY_TOKEN=your-secret-key
     ```

2. **Install Dependencies:**
   - Run `npm install` to install the required dependencies.

3. **Start MongoDB:**
   - Ensure that MongoDB is installed and running on your local machine or update the `CONNECTIONURL` in the `.env` file accordingly.

4. **Run the Application:**
   - Execute `npm start` to start the Node.js server.

5. **API Endpoints:**
   - Access the API endpoints at `http://localhost:3000/api/v1/auth` for authentication and `http://localhost:3000/api/v1/user` for user management.

6. **Testing:**
   - You can use tools like Postman or `curl` to test the various API endpoints.
   - Refer to the validation schema in the `auth.validation.js` and `user.validation.js` files for expected request payloads.

## API Endpoints:

- **Authentication:**
  - `POST /api/v1/auth/signUp` - User registration
  - `POST /api/v1/auth/signIn` - User login

- **User Management:**
  - `POST /api/v1/user/addUser` - Create a new user (admin only)
  - `GET /api/v1/user/getAllUsers` - Get all users (admin only)
  - `GET /api/v1/user/getSpecificUser/:id` - Get specific user by ID (admin only)
  - `PUT /api/v1/user/updateUser/:id` - Update user by ID (admin only)
  - `DELETE /api/v1/user/deleteUser/:id` - Delete user by ID (admin only)

## Additional Notes:

- The application assumes that you have Node.js, npm, and MongoDB installed on your machine.
- Make sure to replace `"your-secret-key"` in the `.env` file with a secure secret key for JWT token generation.
- This documentation provides a basic setup; in a production environment, additional security measures and optimizations may be required.

Feel free to customize the documentation based on your specific requirements or add more details as needed.
