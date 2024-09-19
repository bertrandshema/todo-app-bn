# To-Do List App

A simple To-Do List application built using modern web technologies. This app allows users to create, view, update, and delete tasks, with each task being associated with a user.
this app was used as a learning base for **Apollo Server** and GraphQL

## Features

- **User Registration & Login:** Users can register and log in to manage their tasks.
- **Create Tasks:** Users can add new tasks with a title, description, and completion status.
- **View Tasks:** Users can view their list of tasks.
- **Update Tasks:** Users can mark tasks as completed or update task details.
- **Delete Tasks:** Users can remove tasks from their list.

## Technologies Used

- **Apollo Server:** A GraphQL server to handle requests and interact with the database.
- **TypeScript:** Superset of JavaScript for type safety and enhanced development experience.
- **MongoDB:** NoSQL database for storing user and task data.
- **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Bcryptjs:** Library for hashing passwords securely.
- **jsonwebtoken (JWT):** For user authentication and generating tokens.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (running instance or connection URI)

### Clone the Repository

To clone the repository, use:

```bash
git clone https://github.com/bertrandshema/todo-app-bn.git
cd todo-app-bn
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a .env file in the root directory and add the following, you can use your local mongo db:

```env
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret_key
```

### Install Dependencies

```bash
npm install
```

### Other scripts and their usages

- `npm run lint` is used to format and check for linting errors files
- `npm run format` is used to use Prettier to automatically formats the code to adhere to a consistent style
- `npm run build` is used to build the production ready version of the projects.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
