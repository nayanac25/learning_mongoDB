const express= require("express");
const app=express();


app.use(express.static('public/')); 

app.use(express.urlencoded({extended:true}))

//importing db connection
const connection=require('./config/db');

//import model userSchema
const userSchema=require('./model/userSchema');

const PORT=3000
const HOST="127.0.0.1"

app.get("/",(req,res)=>{
    res.render('signup.ejs');
});

//Insert data (Create op)
app.post('/saveform',async(req,res)=>{
    console.log(req.body);
    try {
        const result=new userSchema(req.body);
        await result.save();

        res.redirect('/userdata');

    } catch (err) {
        res.send('Internal Server Error');
        console.log('Internal Server Error')
        
    }
});


// Read op
app.get('/userdata',async(req,res)=>{
    try {
        const result=await userSchema.find();
        console.log(result);

        res.render('userdata.ejs',{data:result});
        

    } catch (err) {
        res.send("Internal Server Error");
        console.log("Internal Server Error");
    
    }
})

app.use((req,res)=>{
res.send("404, not found")
});

app.listen(PORT,HOST,(req,res)=>{
    console.log(`Server is up on http://${HOST}:${PORT}`)
});