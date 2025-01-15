const express = require('express');
const app = express();

app.use(express.json());

// Middleware verification
const validerRequestBody = (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        
        return res.status(400).send('Erreur: username et password sont requis.');
    }
    
    next();
};

// Route login
app.post('/login', validerRequestBody, (req, res) => {
    res.send('Requête validée avec succès!');
});


const PORT = 6969;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
