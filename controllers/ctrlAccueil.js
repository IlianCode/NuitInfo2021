var modelAccueil = require('../models/modelAccueil');
module.exports = {
    afficher_accueil: function (req, res) {
        res.render('./accueil')
    },
}