// db.js
import postgres from 'postgres'

//const sql = postgres({ /* options */ }) // will use psql environment variables
//const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
const sql = postgres(process.env.POSTGRES_URL!);



export default sql