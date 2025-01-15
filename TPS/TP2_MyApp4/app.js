const express = require('express');
const app = express();

// Middleware Analyser les données JSON
app.use(express.json());

// Middleware Valider les champs du produit
const validateProductData = (req, res, next) => {
    const { name, price } = req.body;

    // Valider nom
    if (!name || typeof name !== 'string' || name.trim() === '') {
        const error = new Error("Le champ name doit être présent, non vide, et de type chaîne de caractères.");
        error.status = 400;
        return next(error); 
    }

    // Valider prix
    if (price === undefined || typeof price !== 'number' || price <= 0) {
        const error = new Error("Le champ price doit être présent, non vide, et de type chaîne de caractères.");
        error.status = 400;
        return next(error); 
    }
    next();
};

// Middleware Gérer les erreurs
const errorHandler = (err, req, res, next) => {
    const status = err.status || 400;
    res.status(status).json({
        message: err.message,
        status: status
    });
};

// Route add-product
app.post('/add-product', validateProductData, (req, res) => {
    const { name, price } = req.body;
    // Structure d'un produit
    const product = {
        name: name,
        price: price
    };

    // Réponse de succès
    res.status(201).json({
        message: 'Produit ajouté avec succès!',
        product: product
    });
});

// Utiliser Middleware gestion erreurs
app.use(errorHandler);


const PORT = 6969;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
