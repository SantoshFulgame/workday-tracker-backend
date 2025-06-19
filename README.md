Workday Tracker Backend
A Node.js backend for the Workday Tracker application, designed to manage employee attendance, leave requests, timesheets, and holidays. Built with Express, MongoDB, and Mongoose, it provides a RESTful API for tracking workday activities in an Indian corporate context.
Table of Contents

Features
Tech Stack
Prerequisites
Installation
Environment Variables
Running the Application
Seeding the Database
API Testing
Project Structure
Deployment
Contributing
License

Features

User authentication and role-based access (Consultant, Manager, Admin).
Track employee attendance with clock-in/clock-out and total hours.
Manage leave requests with approval/rejection workflows.
Submit and review timesheets for weekly tasks.
Define company holidays (e.g., Republic Day, Diwali).
Secure APIs with JWT-based authentication.
Dummy data seeding for development and testing.

Tech Stack

Node.js: JavaScript runtime for server-side logic.
Express: Web framework for building RESTful APIs.
MongoDB: NoSQL database for storing user, attendance, leave, timesheet, and holiday data.
Mongoose: ODM for MongoDB schema management.
bcryptjs: Password hashing for secure authentication.
jsonwebtoken: JWT for API authentication.
dotenv: Environment variable management.

Prerequisites

Node.js (v18.x or higher)
MongoDB Atlas account or local MongoDB instance
npm (v8.x or higher)
Postman (for API testing)

Installation

Clone the repository:
git clone https://github.com/your-username/workday-tracker-backend.git
cd workday-tracker-backend


Install dependencies:
npm install



Environment Variables
Create a .env file in the project root with the following variables:
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/workday-tracker?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
PORT=5000
NODE_ENV=development


Replace <username> and <password> with your MongoDB Atlas credentials (URL-encode special characters, e.g., @ as %40).
Use a secure JWT_SECRET (e.g., a 32-character random string).

Running the Application

Start the server in development mode:
npm run dev

The server runs on http://localhost:5000.

For production:
npm start



Seeding the Database
Populate the database with dummy data (users, attendance, leaves, timesheets, holidays):

Ensure MongoDB is accessible via MONGO_URI.
Run the seeding script:npm run seed


Expected output:Connected to MongoDB
Cleared existing data
Inserted 5 users: [{ email: 'arjun.sharma@techsolutions.in', _id: ... }, ...]
User IDs mapped: { arjun: ..., priya: ..., vikram: ..., neha: ..., rohit: ... }
Inserted 5 attendance records
Inserted 4 leave records
Timesheet data prepared: [{ employeeId: ..., weekStart: ..., ... }, ...]
Inserted 3 timesheet records
Holiday data prepared: [{ name: 'Republic Day', date: ..., ... }, ...]
Inserted 4 holiday records
Dummy data seeded successfully!
MongoDB connection closed



The seeding script adds:

Users: Arjun Sharma (Consultant), Priya Patel (Manager), Vikram Singh (Admin), Neha Gupta (Consultant), Rohit Verma (Consultant).
Attendance: Clock-in/out records for June 2025.
Leaves: Sick, casual, and other leave requests with various statuses.
Timesheets: Weekly task entries with Pending/Approved/Rejected statuses.
Holidays: Republic Day, Holi, Diwali, Independence Day.

API Testing
Use Postman to test the APIs:

Login:

POST http://localhost:5000/api/auth/login
Body (raw JSON):{
  "email": "vikram.singh@techsolutions.in",
  "password": "password123"
}


Copy the returned JWT token.


Sample Endpoints:

Get holidays:
GET http://localhost:5000/api/holidays
Header: Authorization: Bearer <token>


Get timesheets:
GET http://localhost:5000/api/timesheet
Header: Authorization: Bearer <token>




Available endpoints:

/api/auth/login: Authenticate user.
/api/users: Manage users (Admin only).
/api/attendance: Track attendance.
/api/leaves: Manage leave requests.
/api/timesheet: Submit/review timesheets.
/api/holidays: View/add holidays (Admin only).



Project Structure
workday-tracker-backend/
├── models/
│   ├── User.js
│   ├── Attendance.js
│   ├── Leave.js
│   ├── Timesheet.js
│   ├── Holiday.js
├── routes/
│   ├── auth.js
│   ├── users.js
│   ├── attendance.js
│   ├── leaves.js
│   ├── timesheet.js
│   ├── holidays.js
├── seed/
│   ├── seedData.js
├── .env
├── server.js
├── package.json
├── README.md


models/: Mongoose schemas for data structures.
routes/: Express routes for API endpoints.
seed/: Script for populating dummy data.
server.js: Entry point for the Express server.

Deployment
To deploy to a platform like Render or Heroku:

Push the repository to GitHub.
Create a new app on Render/Heroku.
Set environment variables (MONGO_URI, JWT_SECRET, PORT, NODE_ENV=production).
Deploy via GitHub integration or CLI:heroku git:remote -a your-app-name
git push heroku main


Ensure MongoDB Atlas allows connections from the deployment platform (Network Access → Add IP Address → Allow Access from Anywhere).

Contributing

Fork the repository.
Create a feature branch:git checkout -b feature/your-feature


Commit changes:git commit -m "Add your feature"


Push to the branch:git push origin feature/your-feature


Open a pull request.

License
MIT License. See LICENSE for details.
