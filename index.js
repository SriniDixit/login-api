const express =require('express')
const greet=require('./response')
const app=express();
const port =3000;

app.get('/',(req,res)=>{
    res.send(greet())
})


app.listen(port,()=>{
    console.log(`Started Express App on port ${port}`)
});