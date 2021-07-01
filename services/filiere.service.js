const Filiere = require('../models/Filiere')

async function getAllFiliere() {
    try {
        const result = await Filiere.find({});
        return result;
    } catch (error) {
        throw Error("Error while getting all filiere");
    }
}

async function createFiliere(filiere) {
    try {
        const result = await Filiere.create(filiere);
        return result;
    } catch (error) {
        throw Error("Error while creating new filiere");
    }
}

module.exports.getAllFiliere = getAllFiliere;
module.exports.createFiliere = createFiliere;
