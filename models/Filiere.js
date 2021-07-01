const mongoose = require('mongoose')

const filiereSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: [true, "Le titre est obligatoire!"],
    },
    image: {
        type: String,
    },
    formateur: {
        type: String,
        required: true
    },
    duree: {
        type: Number
    },
    description: {
        type: String
    },
    prix: {
        type: Number
    }
})

const Filiere = mongoose.model('Filiere', filiereSchema)

module.exports = Filiere