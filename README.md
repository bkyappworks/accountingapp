# GPA System
The GPA System is a simple accounting system that helps users keep track of their finances by allowing them to create accounts and perform transactions. This system is built with a username/password login UI and is designed to be easy to use.

## Features
### Account Management
Users can create and manage their accounts
Each account has an ID, account number, current balance, and user ID
Account number is a unique 16 digit number
Users can hold multiple accounts
### Transaction Management
Users can create transactions that update the current balance of the account
Each transaction has an ID, date, transaction type, note, amount, and account ID
Transaction types include CREDIT (adds to the balance) and DEBIT (subtracts from the balance)
### Balance Tracking
Users can get their balance for a certain date
### User Interface
A simple login interface allows users to securely access their accounts
Users can view their account details, transaction history, and current balance
### Technology Stack
The frontend of the application is built with React and Material-UI (mui.com)
The backend of the application is built with Django and Postgres, and the APIs are mapped out in REST or GraphQL.
## Getting Started
To get started with the GPA System, please follow the steps below:

1. Clone the repository to your local machine
2. Navigate to the frontend directory and run npm install to install the required dependencies
3. Run npm start to start the frontend server
4. Navigate to the backend directory and run pip install -r requirements.txt to install the required dependencies
5. Run python manage.py runserver to start the backend server
Once the frontend and backend servers are running, you can access the GPA System by navigating to http://localhost:3000 in your web browser.

## Conclusion
With the GPA System, you can easily manage your finances by creating accounts and performing transactions. This application is simple to use and provides a secure way to track your finances.