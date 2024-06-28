# welocme air_way

## project SetUp

 -clone the project on your local
 -execute the `npm install` on the same path as of your root directory of 
 -create `.env` file in root directory and add the following environment variable
    -`PORT = 3000`
 -Inside `src/config` folder to create `config.json` file and inside this file to add following details

```
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_air_way",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute

```
## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City 

```
