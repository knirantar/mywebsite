const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();


const app = express();

//used body-parser before importing routes to parse json data
app.use(bodyParser.json());

//connect to db
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
    useCreateIndex:true
})
.then(()=> console.log('DB connected'))
.catch(err => console.log('DB Connection error',err))

//importing routes
const authRoutes = require('./routes/auth');

//middleware
app.use('/api',authRoutes);

//app middleware
app.use(morgan('dev'));

app.use(cors()); //allows all origins to make request to server



const port = process.env.PORT || 8001
app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
