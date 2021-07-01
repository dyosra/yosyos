const express = require('express')
const router = express.Router()
const FiliereController = require('../controllers/filiere.controller')

router.get("/", FiliereController.getAllFiliere)
router.post("/", FiliereController.createFiliere)

module.exports = router