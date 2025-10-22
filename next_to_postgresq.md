# pasos a seguir para conectar nextjs a una base de datos postgresql

1. instalar API de postgresql :
```terminal
$ npm install postgres
```
2. crear una instancia de sql con postgresql:
````javascript
// db.js
import postgres from 'postgres'

const sql = postgres({ /* options */ }) // will use psql environment variables

export default sql
```