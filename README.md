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
The client and api are served by [express js](https://expressjs.com/), [sequelize](https://sequelize.org/master/) is an ORM used for db interactions. Before running the server a .env file must be added to the project root with the following configurations:

```
DB_HOST=INSERT_VALUE
DB_USERNAME=INSERT_VALUE
DB_PASS=INSERT_VALUE
DB=INSERT_VALUE
PORT=INSERV_VALUE
TOKEN_SECRET=INSERT_VALUE
ADMIN_USERNAME=INSERT_VALUE
ADMIN_PASSWORD=INSERT_VALUE
```

### Server Setup
```
npm install
```

### Start Server
```
node index.js
```
