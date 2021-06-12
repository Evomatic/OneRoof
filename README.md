“This was developed during our time as students at Code Chrysalis”

![OneRoof](https://user-images.githubusercontent.com/27636896/121767038-ddb09b00-cb90-11eb-8d68-bd371d89602f.png width=50% height=50%)

# OneRoof - a messaging and organizational app that helps households connect, function, and thrive.

**OneRoof** is a fullstack group project application with a fully functional chat system at its core. The application also includes               modules with independent functionality but an interoperable ecosystem.

    ## Technologies used
* [Vue](https://vuejs.org/) for the UI
* [TypeORM](https://typeorm.io/#/) Query Builder
* [TypeGraphQL](https://typegraphql.com/) Modern framework for GraphQL
* [Postgres](https://www.postgresql.org) Relational Database



# Setup locally

**Install dependencies**
```
npm install
```

**Create .env file in root of the project and set env variables for local connection**
```
CLOUD_SQL_CONNECTION_NAME=LOCAL CONNECTION TO DATABASE
DB_USER=USERNAME
DB_PASS=USER PASSWORD
DB_NAME=DATABASE NAME
```





**run the frontend of the app**
```
npm run serve
```
**compile the server side typescript to javascript**
```
npm run build:server
```
**run the backend of the app**
```
npm run start 
```
**Compiles and minifies the frontend for production**
```
npm run build
```
**Lints and fixes files**
```
npm run lint
```


## Contributing

If you would like to contribute to this project:
* please fork and clone the repo locally
* Create an "issue" to describe what you want to work on
* Submit a pull request.

Thank you very much!

## Authors

* [Evan](https://github.com/Evomatic)
* [Ken](https://github.com/KuroKen91)
* [Pete](https://github.com/griffitp12)
* [Jay](https://github.com/jaysutham)


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
