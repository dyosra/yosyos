const mongoose = require('mongoose')

const matiereSchema = new mongoose.Schema({
  code: {
    type: String,
    required: [true, 'The matiere name is required'],
    minlength: 1,
  },
  coeff: {
    type: Number,
  },
  nb_heure: {
    type: Number,
  },
  designation: {
    type: String,
  },
})

const Matiere = mongoose.model('Matiere', matiereSchema)

module.exports = Matiere
