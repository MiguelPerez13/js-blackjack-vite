//esta funcion crea un deck
import _ from 'underscore';


/**
 * esta funcion crea un nuevo deck
 * @param {array<string>} tiposDeCartas ejemplo: ['C','D','H','S']
 * @param {array<string>} tiposEspeciales ejemplo: ['A','J','Q','K']
 * @returns {array} retorna un deck de cartas mezclado
 */
export const crearDeck = (tiposDeCartas,tiposEspeciales) => {

    if (!tiposDeCartas || tiposDeCartas.lenght === 0) throw new Error('Tipos de cartas obligatorio como un arreglo de string');
    

    let deck = [];
    for(let i = 2;i < 11;i++){
        for(let tipo of tiposDeCartas){
            deck.push(i + tipo);
        }
    }
    for(let tipo of tiposDeCartas){
        for(let esp of tiposEspeciales){
            deck.push(esp + tipo);
        }
    }
    return _.shuffle(deck);
}