const express = require('express');
const app = express();
const tasks =require('./routes/tasks');
const connectDB = require('./db/connect')
require('dotenv').config()


//middleware
app.use(express.json())
app.use((express.static('./public')))


//routes
app.get('/hello', (req,res)=>{
  res.send(('Task Manager app'))
})


app.use('/api/v1/tasks',tasks)

const port = process.env.PORT ||  3000

const start = async()=> {
  try{
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening to port ${port}...`))
  }
  catch(error){
   console.log(error)
  }
}

start()