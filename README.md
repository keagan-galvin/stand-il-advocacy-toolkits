# Client
The client was generated with [Vue Cli](https://cli.vuejs.org/) and can be found within the ./client directory. It leverages [VueJs](https://vuejs.org/), [Vuex](https://vuex.vuejs.org/), and [Vuetify](https://vuetifyjs.com/en/).

### Project setup
```
./client npm install
```

### Commands
```
./client npm dev
./client npm build
```

# Server
The client and api are served by [express js](https://expressjs.com/), [sequelize](https://sequelize.org/master/) is an ORM used for db interactions. The following enviroment variables need to be defined:

```
DB_HOST
DB_USERNAME
DB_PASS
DB
PORT
TOKEN_SECRET
ADMIN_USERNAME
ADMIN_PASSWORD
```

### Server Setup
```
npm install
```

### Start Server
```
node index.js
```
