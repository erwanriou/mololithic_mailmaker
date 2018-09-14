MAILMAKER - Express/MongoDB/React/Redux

## Table of Contents

* [Create your keys.js](#create-keys.js)
* [Create Accounts](#create-accounts)
* [iniciate the project](#Initiate-the-project)
* [How it Work](#[How-it-Work)
* [Back End](#[Back-end)
* [Middleware](#[Middleware)
* [Front End](#[Front-end)

## Create your keys.js

* clone the repository
* you first need to create a file keys_dev.js that you will put in the config folder
* cd config
* touch keys.js
* then add the folowing content

```

const keys = {
  mongo: {
    user: '<user>',
    password: '<password>',
    url: function() {
      return `mongodb://${this.user}:${this.password}@ds237192.mlab.com:37192/mailmaker`
    },
    options: {
      useNewUrlParser: true,
    },
  },
  cookie: {
    secret: '<secret>',
  },
  google: {
    clientID: '<id>',
    clientSecret: '<secret>',
    callbackURL: '/auth/google/callback',
  },
  facebook: {
    clientID: '<id>',
    clientSecret: '<secret>',
    callbackURL: '/auth/facebook/callback',
  },
  stripe: {
    clientID: '<id>',
    clientSecret: '<secret>',
  },
  sendgrid: {
    apiKey: '<secret>',
  },
  domain: {
    url: 'http://localhost:3000'
  }
}

exports.keys = keys

```
## Create Accounts

* You will have to ensure that you have a mongoDB mlab account.
* You will have to ensure that you have a google API console account.
* You will have to ensure that you have a facebook developer account. 
* You will have to ensure that you have a stripe account.
* You will have to ensure that you have a sendgrid account. 

* On all these specific account you will have to ensure to create the keys, secret, user, id needed all along.

## Initiate the project

* npm install
* npm i --save concurrently
* cd client
* npm install
* Launch both servers with 'npm run dev' on repository root
* You are now running the application

## How it Work

* This project have been realized for learning purpose. Its a marketing email survey creator
* Register your profile and start create survey. But before it you will have to had credit to your account
* Fortunatly the stripe payment system is still on test mode on my master version if you want to try it.
* Use the card 4242 4242 4242 4242 to be able to pay via stripe

## Back End

* The backend of this project have been realized with express and mongoDB. Mongo is a no-sql technologie that is extremly versatile.
* We create this API in order to connect with our react front-end application. Each route have a validator that check if the content is correct before sending it to the database.
* we use several middleware as bodyParser and passport to create private route and manage auth.

## Middleware
* Middleware is managed by Redux. it is taking care of the main property as users, profiles and post. Its ensure each actions made that impact these property are dispatched and updating the cycle. Fetching each element properly from the backend.

## Front End
* The frontend is made with React and component organization. We devide theses component in various categories
* layout component are the ones displayed on start. On most, you can considere them as statical component and they are public
* common component aren't displaying any UI but are helping other component to generate other UI component easelsy.
* Auth component regroup all component that are needed about authentification
* Dashboard component regroup all component about the dashboard profile of each users
