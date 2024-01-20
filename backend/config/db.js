const mongoose = require('mongoose')

const connectDb = async () => {
  try{
    const con = await mongoose.connect(`mongodb+srv://rwn3developer11:rwn3developer11@cluster0.tr84nrb.mongodb.net/mern-common-task`);
    console.log(`DB connected`);
  } catch(err){
    console.log(`Error in Mongodb ${err}`); 
  } 
}

module.exports = {
    connectDb
}