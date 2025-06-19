Sure! Here's the **entire README content in a single Markdown block**. You can copy-paste this directly into your `README.md` file:

---

````markdown
# Workday Tracker Backend

A Node.js backend for the **Workday Tracker** application, designed to manage employee attendance, leave requests, timesheets, and holidays.

Built with **Express**, **MongoDB**, and **Mongoose**, it provides a secure, RESTful API for tracking workday activities in an Indian corporate context.

---

## 📑 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Seeding the Database](#seeding-the-database)
- [API Testing](#api-testing)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🚀 Features

- User authentication and role-based access (Consultant, Manager, Admin)
- Track employee attendance with clock-in/clock-out and total hours
- Manage leave requests with approval/rejection workflows
- Submit and review weekly timesheets
- Define company holidays (e.g., Republic Day, Diwali)
- Secure APIs with JWT-based authentication
- Dummy data seeding for development/testing

---

## 🛠 Tech Stack

- **Node.js** – JavaScript runtime for server-side logic  
- **Express** – Web framework for building REST APIs  
- **MongoDB** – NoSQL database  
- **Mongoose** – ODM for MongoDB schema management  
- **bcryptjs** – Password hashing  
- **jsonwebtoken** – JWT for authentication  
- **dotenv** – Environment variable management  

---

## ✅ Prerequisites

- Node.js (v18.x or higher)  
- MongoDB Atlas account or local MongoDB instance  
- npm (v8.x or higher)  
- Postman (for testing APIs)  

---

## 📦 Installation

Clone the repository:
```bash
git clone https://github.com/SantoshFulgame/workday-tracker-backend.git
cd workday-tracker-backend
````

Install dependencies:

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following:

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/workday-tracker?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
PORT=5000
NODE_ENV=development
```

> ⚠️ Replace `<username>` and `<password>` with your MongoDB Atlas credentials. URL encode any special characters (e.g., `@` as `%40`).
> Use a secure, long random string for `JWT_SECRET`.

---

## ▶️ Running the Application

### Development

```bash
npm run dev
```

Server runs at: [http://localhost:5000](http://localhost:5000)

### Production

```bash
npm start
```

---

## 🌱 Seeding the Database

To populate the database with dummy data:

```bash
npm run seed
```

### Example Output

```
Connected to MongoDB  
Cleared existing data  
Inserted 5 users  
Inserted 5 attendance records  
Inserted 4 leave records  
Inserted 3 timesheet records  
Inserted 4 holiday records  
Dummy data seeded successfully!  
MongoDB connection closed  
```

### Dummy Data Includes:

* **Users**: Arjun (Consultant), Priya (Manager), Vikram (Admin), Neha, Rohit
* **Attendance**: Clock-ins/outs for June 2025
* **Leaves**: Sick, casual, and other leave requests
* **Timesheets**: Weekly entries with various statuses
* **Holidays**: Republic Day, Holi, Diwali, Independence Day

---

## 📮 API Testing

Use **Postman** to test the APIs.

### 🔐 Login

**POST** `/api/auth/login`
Request Body (JSON):

```json
{
  "email": "vikram.singh@techsolutions.in",
  "password": "password123"
}
```

Copy the returned JWT token for testing other endpoints.

---

### ✳️ Sample Endpoints

| Method   | Endpoint          | Description                    |
| -------- | ----------------- | ------------------------------ |
| GET      | `/api/holidays`   | View holidays                  |
| GET      | `/api/timesheet`  | View timesheets                |
| POST     | `/api/auth/login` | User login                     |
| GET/POST | `/api/users`      | Manage users (Admin only)      |
| GET/POST | `/api/attendance` | Track attendance               |
| GET/POST | `/api/leaves`     | Manage leave requests          |
| GET/POST | `/api/timesheet`  | Submit/review timesheets       |
| GET/POST | `/api/holidays`   | View/add holidays (Admin only) |

Add header:

```
Authorization: Bearer <your-token>
```

---

## 📁 Project Structure

```
workday-tracker-backend/
├── models/
│   ├── User.js
│   ├── Attendance.js
│   ├── Leave.js
│   ├── Timesheet.js
│   ├── Holiday.js
├── routes/
│   ├── authRoutes.js
│   ├── attendanceRoutes.js
│   ├── leaveRoutes.js
│   ├── timesheetRoutes.js
│   ├── holidayRoutes.js
├── controllers/
│   ├── authController.js
│   ├── attendanceController.js
│   ├── leaveController.js
│   ├── timesheetController.js
│   ├── holidayController.js
├── middleware/
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
├── seed/
│   └── seedData.js
├── .env
├── .gitignore
├── server.js
├── package.json
├── README.md
```

---

## ☁️ Deployment

To deploy on Render or Heroku:

1. Push the repo to GitHub
2. Create a new app on Render/Heroku
3. Set environment variables:

   * `MONGO_URI`
   * `JWT_SECRET`
   * `PORT`
   * `NODE_ENV=production`
4. Deploy via GitHub or CLI

   ```bash
   heroku git:remote -a your-app-name
   git push heroku main
   ```

> ✅ Ensure MongoDB Atlas allows access (IP whitelist: `0.0.0.0/0` or your server IP)

---

## 🤝 Contributing

1. Fork the repo
2. Create a new feature branch

   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes

   ```bash
   git commit -m "Add your feature"
   ```
4. Push your branch

   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request

---

## 📄 License

MIT License – see the [`LICENSE`](LICENSE) file for details.

```

---

Let me know if you want this auto-uploaded via a script or want help generating a `LICENSE` file.
```
