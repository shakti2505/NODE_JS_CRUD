// import 
import * as dotenv from 'dotenv'
import  express  from 'express';
import user from './routes/routes.js';
import connectDB from './DB/connectionDB.js';

const app = express();
const PORT = process.env.PORT || 4000;
const DATABASE_URL = process.env.PORT || "mongodb://127.0.0.1:27017/node_crud";

//middleware
app.use(express.urlencoded({extended:false}))

//intigrating the EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Database connections
connectDB(DATABASE_URL)


//Load Router
app.use('',user);

app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`);
});