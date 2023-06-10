const mongoose = require('mongoose')


const connectionString = 
'mongodb+srv://ish:3010@nodeproject.kfvkbgw.mongodb.net/?retryWrites=true&w=majority'

const connectDB=(url)=>{
  return mongoose
  .connect(connectionString,{
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
  })
}

module.exports = connectDB


