const express = require('express');
const app = express();

// Middleware Analyser les données JSON
app.use(express.json());

// Middleware de validation de l'âge
const validateAge = (req, res, next) => {
    const { age } = req.body;

    if (age !== undefined && age < 0) {
        const error = new Error("L'âge ne peut pas être négatif.");
        error.status = 400; 
        return next(error);
    }
    next();
};

// Middleware de gestion des erreurs
const errorHandler = (err, req, res, next) => {
    const status = err.status || 500; // Par défaut, 500 si aucun statut n'est défini
    res.status(status).send(err.message);
};

// Route 
app.post('/register', validateAge, (req, res) => {
    res.send('Enregistrement réussi!');
});

//Utiliser Middleware gestion des erreurs
app.use(errorHandler);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
