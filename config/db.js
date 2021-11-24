const mongoose = require('mongoose');

const connectdb = () =>{ mongoose.connect("mongodb://localhost:27017/mytodo").then(()=>{
    console.log("connect success database");
}).catch(err => console.log('connect fail database') )
}

module.exports = connectdb; 