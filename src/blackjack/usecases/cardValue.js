
/**
 * funcion que determina el valor de la carta
 * @param {string} carta ejemplo 5D
 * @returns {number} - retorna el valor numerico de la carta
 */
export const valorCarta = (carta) => {
    if(!carta || carta.length===0 ) throw new Error('ingresar una carta del deck');
    const valor = carta.substring(0,carta.length-1); 
    return isNaN(valor) ? ((valor === 'A') ? 11 : 10) : valor*1;
}