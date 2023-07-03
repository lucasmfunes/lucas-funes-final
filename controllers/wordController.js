const WordRepository = require('../repository/wordRepository')
const ApiResponse = require('../helper/ApiResponse');

function crearPalabraController(req, res){
    try {
        console.log("entre")
        const body = req.body
        const repo = WordRepository.getInstance();
        repo.crearPalabra(body.word);
        return ApiResponse.sendSuccessResponse(res, 200, "Palabra creada")
    } catch(e){
        console.log(e)
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}


function listarPalabrasController(req, res){
    try {
        const repo = WordRepository.getInstance();
        const wordList = repo.listarPalabras();
        return ApiResponse.sendSuccessResponse(res, 200, wordList)
    } catch(e){
        return ApiResponse.sendErrorResponse(res, e.statusCode, e.message)
    }
}
module.exports = { crearPalabraController, listarPalabrasController }