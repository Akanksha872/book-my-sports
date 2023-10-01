# Book my sport
Book my sport is a React application that allows users to register sport events.

## 🌍 Environment Details
- **React**: 18.2.0
- **Node**: v18.15.0
- **NPM**: 9.5.0

## 🚀 Setup Guide
1. `npm install`
2. change `REACT_APP_API_URL` in .env to point to backend
2. `npm start`

## Docker Setup
1. Build Image:

`docker build -t book-my-sport-app .`

2. Run Docker Image:

`docker run -p 3000:3000 book-my-sport-app`



## Pages
1. **Sign-In page:**


This page will contain a form that will ask for Name and Email for creating an account. Once account is created successfully, it will redirect to login page.


Route: /signin
![Sign In](./book-my-sport/src/assets/signin.png)


2. **Login page:**


This page will contain a form that will ask for Email, once login is successful, it will redirect to our main page that will list all sports events.


Route: /
![Log In](./book-my-sport/src/assets/login.png)

3. **Events Page:**


This page will contain all the events and events registered by you, there you can register some events and unregistered to registered events also.


Route: /events
![Events](./book-my-sport/src/assets/events.png)

## Backend Code Repo
Link: https://github.com/Akanksha872/book-my-sports-service/