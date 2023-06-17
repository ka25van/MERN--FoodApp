const mongoose = require('mongoose');
const mongoURI=""
const mongoDB = async() => {
    await mongoose.connect(mongoURI, {useNewUrlPraser: true}, async(err,result)=>{
        if(err) console.log("---",err)
        else{
          console.log("Connected");
          const fetched_data=await mongoose.connection.db.collection("Food_itemdata");
          fetched_data.find({}).toArray(function(err,data){
            if(err) console.log(err);
            else console.log(data);
          })

        }
    });
      
  };
module.exports = mongoDB;