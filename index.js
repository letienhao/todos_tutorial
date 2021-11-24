const express = require("express");
const app = express();
const env = require('dotenv');
env.config();
const port = process.env.PORT;
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json())
//const { PORT } = require("./config/data");
const connectdb = require("./config/db");
const catchError = require("./middleware/error");
const todoRoutes = require('./routes/todoRoutes');

app.use(express.json())
/* vi dụ về quá trình hoạt động của mdw
// const mdw1 = (req,res,next)=>{
//     next("co loi tu mdw1");
// }
// const mdw2 = (err,req,res,next)=>{
//     console.log(err);
// }
// app.use(mdw1)
// app.use(mdw2)
*/
//connect database
connectdb();
app.use('/api',todoRoutes)
//error middleware
app.use(catchError)
app.listen(port,()=>{
    console.log(`server running on ${port}`);
})

