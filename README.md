Here’s a comprehensive `README.md` file for your repository:

---

# Eatoes Application Backend

This is the backend for the **Eatoes** application, an online food ordering system. It supports both MongoDB and PostgreSQL for database storage. This backend includes all the necessary functionality for managing menu items and order placements.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Setup and Running the Backend Locally](#setup-and-running-the-backend-locally)
3. [Database Design Choice (MongoDB vs PostgreSQL)](#database-design-choice-mongodb-vs-postgresql)
4. [API Endpoints](#api-endpoints)
5. [Deployed Frontend](#deployed-frontend)
6. [Challenges](#challenges)
7. [Assumptions](#assumptions)

---

## Prerequisites

Before setting up the backend locally, ensure you have the following installed:

- **Node.js** (version 16 or later)
- **MongoDB** (if using MongoDB locally)
- **PostgreSQL** (if using PostgreSQL locally)
- **Postman** or another API testing tool for testing endpoints.

---

## Setup and Running the Backend Locally

Follow the instructions below to set up and run the backend locally:

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/eatoes-backend.git
cd eatoes-backend
```

### 2. Install dependencies:

Run the following command to install all necessary packages:

```bash
npm install
```

### 3. Set up environment variables:

Create a `.env` file at the root of your project. Add the following values to it:

```env
MONGO_URI=your-mongodb-connection-url  # MongoDB local connection string
POSTGRES_URL=your-postgres-connection-url   # PostgreSQL database URL
PORT=5000                                   # Port to run the backend server
```

- For **MongoDB**: Make sure MongoDB is installed and running locally on your machine. Alternatively, you can use MongoDB Atlas for a cloud database.
- For **PostgreSQL**: If using PostgreSQL locally, ensure PostgreSQL is installed, and create a database named `eatoes` or change the `POSTGRES_URL` in the `.env` file to your preferred PostgreSQL database URL.

### 4. Set up MongoDB Database :

We are using MongoDB Atlas, which provides a cloud-hosted MongoDB instance.

To set it up:

Create a MongoDB Atlas account:

Go to MongoDB Atlas and create an account if you don't have one.

Create a Cluster:

Once logged in, create a cluster. Choose your preferred cloud provider and region.

Create a Database:

After the cluster is set up, create a new database called eatoes (or change the database name in your .env file if preferred).

Create a Database User:

In the Atlas dashboard, go to Database Access and create a new user with appropriate permissions (read and write access).

Get the Connection URI:

Navigate to Clusters > Connect > Connect your application. Copy the provided connection string and replace the <password> placeholder with your database user's password.

Update the .env file:

Replace the MONGO_URI in your .env file with the connection string you got from Atlas.

```bash
# If MongoDB is running locally, you don't need to do anything other than connect to it via the Mongo URI provided in the `.env` file.
```

### 5. Set up PostgreSQL Database (if using PostgreSQL):

Run the following SQL commands in your PostgreSQL client to create the necessary tables:

```sql
CREATE DATABASE eatoes;
\c eatoes;

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_name VARCHAR(255),
  phone_number VARCHAR(20),
  cart_data JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE menu (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  price NUMERIC,
  image_url TEXT
);
```

### 6. Start the server:

Once the environment is set up and dependencies installed, start the backend server by running:

```bash
npm start
```

Your backend should now be running locally at `http://localhost:5000`.

---

## Database Design Choice (MongoDB vs PostgreSQL)

### MongoDB:

We initially chose MongoDB because it is a NoSQL database, which makes it more flexible for storing and retrieving JSON-like documents (e.g., cart data). MongoDB allows for easy scaling and faster development, especially for applications that require flexibility in data storage.

### PostgreSQL:

Later, we switched to **PostgreSQL** to leverage the benefits of relational data modeling for structured data like orders, menu items, and other features that require strong consistency and relationships. PostgreSQL supports complex queries, transactions, and joins, making it more suitable for complex business logic and analytics in the long term.

### Final Choice:

After considering both options, **PostgreSQL** was chosen as the final database, as it offers more robust features for handling structured data and relationships. MongoDB was initially used to prototype the system, but PostgreSQL fits better with the application’s need for transactional consistency and relational data.

---

## API Endpoints

The backend exposes the following API endpoints:

### **Menu Endpoints** (`/api/menu`)
- `GET /api/menu`: Fetch all menu items.
- `GET /api/menu/:id`: Fetch a specific menu item by ID.
- `POST /api/menu`: Create a new menu item.
- `PUT /api/menu/:id`: Update a menu item by ID.
- `DELETE /api/menu/:id`: Delete a menu item by ID.

### **Order Endpoints** (`/api/order`)
- `GET /api/order`: Fetch all orders.
- `GET /api/order/:id`: Fetch a specific order by ID.
- `POST /api/order`: Place a new order.
- `GET /api/order/phone/:phone_number`: Fetch orders by a specific phone number.

---

## Deployed Frontend

The frontend for **Eatoes** is deployed on **Netlify**. You can view the deployed application here:

[Deployed Frontend](https://coruscating-blini-d79dad.netlify.app)

---

## Challenges

During development and deployment, we encountered the following challenges:

1. **CORS Accessibility**: 
   - We faced CORS-related issues when trying to make API requests from the frontend hosted on Netlify to the backend hosted on Render. 
   - This was resolved by enabling CORS on the backend using the `cors` package and allowing requests from the Netlify domain.

2. **Module Error**: 
   - The backend server was initially throwing errors related to module imports (`import` vs `require`). 
   - This was resolved by setting `"type": "module"` in the `package.json` file and ensuring all files used ES Modules syntax.

3. **PostgreSQL Database Connectivity**: 
   - We initially set up PostgreSQL to run locally. However, when deploying the backend to Render, the connection string had to be updated to use the PostgreSQL database hosted on Render.
   - We also had to configure SSL for the database connection, as Render requires it.

---

## Assumptions

- The application is assumed to be used by users who want to place food orders from a menu. The frontend communicates with the backend through RESTful API calls.
- The menu data is stored in a relational database (PostgreSQL), while the cart data (JSON data) is stored as part of the order in the database.
- The backend is designed to handle only a basic order management system, and complex features such as payments, user authentication, and reviews will require additional implementations.

---
