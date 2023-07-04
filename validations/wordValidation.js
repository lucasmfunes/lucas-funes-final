
const ApiResponse = require('../helper/ApiResponse.js');

const validateWordToCreate = (req, res, next) => {

    let word = req.body.word;

    if(word == null || word == undefined || !word.match(/[a-z]/i)){
        ApiResponse.sendErrorResponse(res, 422, "Palabra no valida: " + word)
        return;
    }

    next();
}

const validateWordToDelete = (req, res, next) => {

    let word = req.query.word;

    if(word == null || word == undefined || !word.match(/[a-z]/i)){
        ApiResponse.sendErrorResponse(res, 422, "Palabra no valida: " + word)
        return;
    }

    next();
}


module.exports = {validateWordToCreate, validateWordToDelete}
