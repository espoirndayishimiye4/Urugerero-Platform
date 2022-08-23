# This repo is under construction. You may find some parts not working as expected.

### Checkout "main" branch to see which part we are working on right now

### Following feature will be added in this repo

1. Server side caching
2. Server side form validation
3. Test coverage
4. Scalable image upload
5. Wiring up CI/CD

# Urugerero Platform

A simple online Youth Connection System built with MongodDB, Express.js and Node.js and React.jsx . [Click here](https://) to see the application

## Techonologies used in this application

### Back-end

1. MongoDB
2. Express.js
3. Node.js

## Install dependencies

Open git bash or command line tools at application file and run following npm command or if you know what to do, just look at `package.json` file :)

`npm install express mongoose express-session connect-mongo --save`

#### Install dev dependencies if needed

`npm install nodemon`

#### To install missing dependencies if not mentioned above or missing type

`npm i`

### And all dependencies will be installed

## Run the application

- create a `.env` file in app directory
- add `SESSION_SECRET=<your session secret>`, `ADMIN_SECRET=<your admin secret>` and `DB_URL=<your mongodb url>` into that file.
- run `npm run dev`
- App will open at [http://localhost:3000](http://localhost:3000)

## Functionalitites

Whole app is divided into three modules.

- Admin
- User
- Browse posts

### At every SignUp each user must choose between user or admin to have some added or removed functionalities

### Admin module functionalities

- Sign up (This route is hidden. only accessible by typing the route manually and when admin log in)
- Login
- Logout
- Track all users activities
- Add User
- Search Users by sector
- Find users by firstname, lastname and email 
- Delete user acount
- Restrict individual user if violate any terms and conditions
- Send notification to all/individual/filtered user (not ready yet, will be added as soon as I learn socket.io)
- Update admin profile and password
- Add new admin
- Delete currently logged in admin profile

### User module functionalities

- Sign up
- Login
- Logout
- Track own activities
- post an event or an activity
- Update user profile
- Return books
- Browse posts showcase
- Add, edit and delete comment on any post comment section
- Upload/Update profile picture
- Update profile and password
- Delete account

### Browse post module functionalities

This module can be accessed by anyone

- Show all posts
- Find posts on filtered search