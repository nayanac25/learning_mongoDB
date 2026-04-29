const mongoose=require('mongoose');

const connection=mongoose.connect('mongodb+srv://chafekarnayana99:nayana789@cluster0.jgjmzhf.mongodb.net/nodeDB')
.then(()=>{
    console.log("DB Connection Successfully")
}).catch((err)=>{
    console.log("DB Connection Failed",err)
});

module.exports=connection;