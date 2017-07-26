# EZcrew

This app was developed as a Rowing Team Management System to track attendance, Erg tests and results and monitor rowers progress and assist with team announcements and practice lineups.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for further development. See deployment for notes on how to deploy the project on a live system.


### Installing


Fork and Clone this repo.

Download Dependencies
```
npm install
```
Start the Development Server.
```
npm run dev
```

Crete the Database.
```
createdb ezcrew_db
```

Migrate tables and seeds to the database.
```
npm run knex migrate:latest
npm run knex seed:run
```
Load your Development app at:
```
http://localhost:3000
```

## Deployment

Since the API is shared in this repo, we are not using 'API_BASE_URL'.  If you choose to host your api separately from the app, when hosting to Heroku, uncomment line 4 on the app.module.js and comment out line 5 and you will need to update all $http API calls to be prefaced with base-url.

Follow all additional steps for deploying to Heroku

## Built With

* [AngularJS](https://docs.angularjs.org/api)
* [npm](https://www.npmjs.com) - Dependency Management
* [knex](http://knexjs.org/) - Used for database queries
* [moment.js](https://momentjs.com/) - Used for manipulating dates
* [Psql](https://www.postgresql.org/docs/) - Used for the database



## Authors

[Cheryln Barber](linkedin.com/in/cheryln-barber)
