# loginMEVN
 
This is Test login page project, it is build using Vue, Node.js, Express.js and MongoDB

desing was made by &copy; Magebit

## Setup
to run project in development mode you need build frontend and backend separetly

#### Frontend:

`cd frontend`

`npm install`

`npm run serve`

will be available on localhost:8080

#### Backend: 

open another terminal window

`cd backend`

`npm install`

`npm run dev`

will be available on localhost:3000

#### To build production frontend:

`npm run build` 

(to use built files localy you need to install `npm install -g serve` and run `serve -s dist` in frontend folder)

#### to build production backend:

`npm start`

## Functionality:

test user is `test@test.com / testtest`

Database connection will be open for few days for All IPs and can be viewed in Compass, also json user collection will be attached in email.

There are unused mutations in vuex store, i dont count them as junk code, they can be used in future

Jwt authorization token does not expires

Edit profile form simply override logged user data in database
