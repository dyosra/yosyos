const MatiereService = require('../services/matiere.service')

const getAllMatiere = async (req, res) => {
    try {
        const result = await MatiereService.getAllMatiere()
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

const createMatiere = async (req, res) => {
    try {
        const result = await MatiereService.createMatiere(req.body.matiere)
        res.json(result)
    } catch (error) {
        res.send(error)
    }
}

module.exports.getAllMatiere = getAllMatiere;
module.exports.createMatiere = createMatiere;