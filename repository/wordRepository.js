const WordDAO = require("../DAO/wordDAO");

module.exports = class WordRepository {

    constructor() {
        this.db = new WordDAO();
    }

    static getInstance() {
        if (!WordRepository.instance) {
            WordRepository.instance = new WordRepository();
        }
        return WordRepository.instance;
    }


    crearPalabra(word){
        try {
            return this.db.crear(word);
        } catch(e){
            console.log(e)
            throw e
        }
    }

    listarPalabras(){
        try {
           return this.db.listar().toString().replaceAll(',', ' ');
        } catch(e){
            throw e
        }
    }

    borrarPalabra(word){
        try {
           return this.db.borrar(word);
        } catch(e){
            throw e
        }
    }

    obtenerInfo(){
        try {
            let list = this.db.listar();
            let conteo = {};
            list.forEach(function (word) { conteo[word] = (conteo[word] || 0) + 1; });
            return conteo;
         } catch(e){
             throw e
         }
    }
}