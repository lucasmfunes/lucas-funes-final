const ErrorClasses = require('../errors');

module.exports = class WordDAO {
    
    constructor() {
        const wordList = []
    }

    crear(word) {
        try{
            console.log("entre 2")
            this.wordList.push(word)
        } catch (e) {
            throw new ErrorClasses.Error500();
        }
    }

    listar() {
        try{
            return wordList;
        } catch (e) {
            throw e;
        }
    }

    borrar(wordToDelete) {
        try{
            wordList = wordList.filter(word => word != wordToDelete);
            return wordList;
        } catch (e) {
            throw e;
        }
    }

}
