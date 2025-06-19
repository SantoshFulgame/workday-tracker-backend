Workday Tracker Backend
=======================

A Node.js backend for the Workday Tracker application, designed to manage employee attendance, leave requests, timesheets, and holidays. Built with Express, MongoDB, and Mongoose, it provides a RESTful API for tracking workday activities in an Indian corporate context.

Table of Contents
-----------------

*   [Features](https://grok.com/chat/d683ad38-6f8a-4f34-ae1c-c967af1c7909#features)
    
*   [Tech Stack](https://grok.com/chat/d683ad38-6f8a-4f34-ae1c-c967af1c7909#tech-stack)
    
*   [Prerequisites](https://grok.com/chat/d683ad38-6f8a-4f34-ae1c-c967af1c7909#prerequisites)
    
*   [Installation](https://grok.com/chat/d683ad38-6f8a-4f34-ae1c-c967af1c7909#installation)
    
*   [Environment Variables](https://grok.com/chat/d683ad38-6f8a-4f34-ae1c-c967af1c7909#environment-variables)
    
*   [Running the Application](https://grok.com/chat/d683ad38-6f8a-4f34-ae1c-c967af1c7909#running-the-application)
    
*   [Seeding the Database](https://grok.com/chat/d683ad38-6f8a-4f34-ae1c-c967af1c7909#seeding-the-database)
    
*   [API Testing](https://grok.com/chat/d683ad38-6f8a-4f34-ae1c-c967af1c7909#api-testing)
    
*   [Project Structure](https://grok.com/chat/d683ad38-6f8a-4f34-ae1c-c967af1c7909#project-structure)
    
*   [Deployment](https://grok.com/chat/d683ad38-6f8a-4f34-ae1c-c967af1c7909#deployment)
    
*   [Contributing](https://grok.com/chat/d683ad38-6f8a-4f34-ae1c-c967af1c7909#contributing)
    
*   [License](https://grok.com/chat/d683ad38-6f8a-4f34-ae1c-c967af1c7909#license)
    

Features
--------

*   User authentication and role-based access (Consultant, Manager, Admin).
    
*   Track employee attendance with clock-in/clock-out and total hours.
    
*   Manage leave requests with approval/rejection workflows.
    
*   Submit and review timesheets for weekly tasks.
    
*   Define company holidays (e.g., Republic Day, Diwali).
    
*   Secure APIs with JWT-based authentication.
    
*   Dummy data seeding for development and testing.
    

Tech Stack
----------

*   **Node.js**: JavaScript runtime for server-side logic.
    
*   **Express**: Web framework for building RESTful APIs.
    
*   **MongoDB**: NoSQL database for storing user, attendance, leave, timesheet, and holiday data.
    
*   **Mongoose**: ODM for MongoDB schema management.
    
*   **bcryptjs**: Password hashing for secure authentication.
    
*   **jsonwebtoken**: JWT for API authentication.
    
*   **dotenv**: Environment variable management.
    

Prerequisites
-------------

*   Node.js (v18.x or higher)
    
*   MongoDB Atlas account or local MongoDB instance
    
*   npm (v8.x or higher)
    
*   Postman (for API testing)
    

Installation
------------

1.  git clone https://github.com/your-username/workday-tracker-backend.gitcd workday-tracker-backend
    
2.  npm install
    

Environment Variables
---------------------

Create a .env file in the project root with the following variables:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   MONGO_URI=mongodb+srv://:@cluster0.mongodb.net/workday-tracker?retryWrites=true&w=majority  JWT_SECRET=your_jwt_secret_key  PORT=5000  NODE_ENV=development   `

*   Replace and with your MongoDB Atlas credentials (URL-encode special characters, e.g., @ as @).
    
*   Use a secure JWT\_SECRET (e.g., a 32-character random string).
    

Running the Application
-----------------------

1.  npm run devThe server runs on http://localhost:5000.
    
2.  npm start
    

Seeding the Database
--------------------

Populate the database with dummy data (users, attendance, leaves, timesheets, holidays):

1.  Ensure MongoDB is accessible via MONGO\_URI.
    
2.  npm run seed
    
3.  Connected to MongoDBCleared existing dataInserted 5 users: \[{ email: 'arjun.sharma@techsolutions.in', \_id: ... }, ...\]User IDs mapped: { arjun: ..., priya: ..., vikram: ..., neha: ..., rohit: ... }Inserted 5 attendance recordsInserted 4 leave recordsTimesheet data prepared: \[{ employeeId: ..., weekStart: ..., ... }, ...\]Inserted 3 timesheet recordsHoliday data prepared: \[{ name: 'Republic Day', date: ..., ... }, ...\]Inserted 4 holiday recordsDummy data seeded successfully!MongoDB connection closed
    

The seeding script adds:

*   Users: Arjun Sharma (Consultant), Priya Patel (Manager), Vikram Singh (Admin), Neha Gupta (Consultant), Rohit Verma (Consultant).
    
*   Attendance: Clock-in/out records for June 2025.
    
*   Leaves: Sick, casual, and other leave requests with various statuses.
    
*   Timesheets: Weekly task entries with Pending/Approved/Rejected statuses.
    
*   Holidays: Republic Day, Holi, Diwali, Independence Day.
    

API Testing
-----------

Use Postman to test the APIs:

1.  **Login**:
    
    *   POST http://localhost:5000/api/auth/login
        
    *   { "email": "vikram.singh@techsolutions.in", "password": "password123"}
        
    *   Copy the returned JWT token.
        
2.  **Sample Endpoints**:
    
    *   Get holidays:
        
        *   GET http://localhost:5000/api/holidays
            
        *   Header: Authorization: Bearer
            
    *   Get timesheets:
        
        *   GET http://localhost:5000/api/timesheet
            
        *   Header: Authorization: Bearer
            
3.  Available endpoints:
    
    *   /api/auth/login: Authenticate user.
        
    *   /api/users: Manage users (Admin only).
        
    *   /api/attendance: Track attendance.
        
    *   /api/leaves: Manage leave requests.
        
    *   /api/timesheet: Submit/review timesheets.
        
    *   /api/holidays: View/add holidays (Admin only).
        

Project Structure
-----------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   workday-tracker-backend/  ├── models/  │   ├── User.js  │   ├── Attendance.js  │   ├── Leave.js  │   ├── Timesheet.js  │   ├── Holiday.js  ├── routes/  │   ├── auth.js  │   ├── users.js  │   ├── attendance.js  │   ├── leaves.js  │   ├── timesheet.js  │   ├── holidays.js  ├── seed/  │   ├── seedData.js  ├── .env  ├── server.js  ├── package.json  ├── README.md   `

*   **models/**: Mongoose schemas for data structures.
    
*   **routes/**: Express routes for API endpoints.
    
*   **seed/**: Script for populating dummy data.
    
*   **server.js**: Entry point for the Express server.
    

Deployment
----------

To deploy to a platform like Render or Heroku:

1.  Push the repository to GitHub.
    
2.  Create a new app on Render/Heroku.
    
3.  Set environment variables (MONGO\_URI, JWT\_SECRET, PORT, NODE\_ENV=production).
    
4.  heroku git:remote -a your-app-namegit push heroku main
    
5.  Ensure MongoDB Atlas allows connections from the deployment platform (Network Access → Add IP Address → Allow Access from Anywhere).
    

Contributing
------------

1.  Fork the repository.
    
2.  git checkout -b feature/your-feature
    
3.  git commit -m "Add your feature"
    
4.  git push origin feature/your-feature
    
5.  Open a pull request.
    

License
-------

MIT License. See [LICENSE](https://grok.com/chat/LICENSE) for details.