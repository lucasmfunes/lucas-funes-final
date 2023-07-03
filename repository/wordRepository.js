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
            console.log(word)
            this.db.crear(word);
        } catch(e){
            console.log(e)
            throw e
        }
    }

    listarPalabras(){
        try {
           return this.db.listar();
        } catch(e){
            throw e
        }
    }
}