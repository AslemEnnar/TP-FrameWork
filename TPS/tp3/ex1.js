const express = require ('express');
const app = express();

//middleware de journalisation 
const loggerMiddleware = (req,res,next)=>{
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    console.log(`[${date}${time}] ${req.method}${req.path}`);
    next();

    
}
//
app.use(loggerMiddleware);

//
app.get ('/',(req , res) =>{
    res.send('Exercice 1!');
});

app.get ('/exercice1',(req,res)=>{
    res.send("une deuxieme api");
});

app.listen(3000,()=>{
    console.log("serveur demare sur le port 3000");
});