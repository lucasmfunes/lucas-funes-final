const WordRepository = require('../repository/wordRepository')
const ApiResponse = require('../helper/ApiResponse');

function crearPalabraController(req, res){
    try {
        const body = req.body
        const repo = WordRepository.getInstance();
        const result = repo.crearPalabra(body.word);
        return ApiResponse.sendSuccessResponse(res, 200, "Palabra creada: " + result)
    } catch(e){
        console.log(e)
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}


function listarPalabrasController(req, res){
    try {
        const repo = WordRepository.getInstance();
        const phrase = repo.listarPalabras();
        return ApiResponse.sendSuccessResponse(res, 200, phrase)
    } catch(e){
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}

function borrarPalabraController(req, res){
    try {
        let word = req.query.word;
        const repo = WordRepository.getInstance();
        repo.borrarPalabra(word);
        console.log("Hola")
        return ApiResponse.sendSuccessResponse(res, 200, "Palabra borrada correctamente")
    } catch(e){
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}
module.exports = { crearPalabraController, listarPalabrasController, borrarPalabraController }