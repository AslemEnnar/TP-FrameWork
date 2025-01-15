const express = require('express');
const app = express();
// middleware de journalisation
const loggerMiddleware = (req,res, next) =>{
    const now = new Date();
    const date = now.toDateString();
    const time = now.toLocaleTimeString();
    console.log( `[${date} ${time}] ${req.method} ${req.path}`);
    next();
}
// utiliser le middleware dans l'app
app.use(loggerMiddleware);
//routes
app.get('/', (req, res) => {
    console.log('Root route accessed');
    res.send('Bienvenue');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});