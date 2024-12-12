
/**
 * esta funcion regresa el valor top de el array de deck
 * @param {array<string>} deck - ejemplo [5D,3C,JH,...] 
 * @returns {string} - regresa la carta 
 */
export const pedirCarta = (deck) => {
    if (!deck) throw new Error('ingresar un array de strings con el deck');
    if(deck.length === 0){
        throw new Error('No hay cartas en el deck');
    }
    return deck.pop();
}