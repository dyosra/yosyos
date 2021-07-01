const FiliereService = require('../services/filiere.service')

const getAllFiliere = async (req, res) => {
    try {
        const result = await FiliereService.getAllFiliere()
        res.json({
            totalItems: result.length,
            data: result,
            message: "success",
            page: 1,
            limit: 30
        })
    } catch (error) {
        res.send(error)
    }
}

const createFiliere = async (req, res) => {
    try {
        const result = await FiliereService.createFiliere(req.body.filiere)
        res.json(result)
    } catch (error) {
        res.send(error)
    }
}

module.exports.getAllFiliere = getAllFiliere;
module.exports.createFiliere = createFiliere;