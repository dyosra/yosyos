const express = require('express')
const Matiere = require('../models/Matiere')

const router = express.Router()

// Route to get all matieres
router.get('/', (req, res, next) => {
  let name = req.query.name;
  let query = {};

  if (name) {
    query = { name: { $regex: '.*' + name + '.*' } }
  }

  Matiere.find(query)
    .then(matieres => {
      res.json(matieres)
    })
    .catch(err => next(err))
})

// Route to add a matiere
router.post('/', (req, res, next) => {
  let { code, coeff, nb_heure, designation } = req.body
  Matiere.create({ code, coeff, nb_heure, designation })
    .then(matiere => {
      res.json({
        success: true,
        matiere,
      })
    })
    .catch(err => next(err))
})

//route to delete a matiere
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  Matiere.findByIdAndDelete(id)
    .then(deletedMatiere => {
      res.json(deletedMatiere)
    })
    .catch(error => {
      next(error)
    })
})

//route to update a matiere
router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const body = req.body.data;

  Matiere.findByIdAndUpdate(id, body)
    .then(updatedMatiere => {
      res.json(updatedMatiere)
    })
    .catch(error => {
      next(error)
    })
})

module.exports = router
