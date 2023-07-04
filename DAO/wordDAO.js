const ErrorClasses = require('../errors/error.js');

module.exports = class WordDAO {
    
    constructor() {
        this.wordList = []
    }

    crear(word) {
        try{
            this.wordList.push(word.toLowerCase())
            return word;
        } catch (e) {
            throw e;
        }
    }

    listar() {
        try{
            return this.wordList;
        } catch (e) {
            throw e;
        }
    }

    borrar(wordToDelete) {
        try{
            if(this.wordList.includes(wordToDelete.toLowerCase())){
                this.wordList = this.wordList.filter(word => word.toLowerCase() != wordToDelete.toLowerCase());
                return this.wordList;
            }else{
                throw new ErrorClasses.Error404();
            }
        } catch (e) {
            throw e;
        }
    }

}
