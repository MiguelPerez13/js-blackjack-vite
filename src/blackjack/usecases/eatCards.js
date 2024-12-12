import { pedirCarta } from "./askCard";
import { valorCarta  } from "./cardValue";
/**
 * funcion que hace que los jugadores tomen cartas del deck y las reflejen en el juego
 * @param {number} jugador id dentro del array puntosJugadores del jugador
 * @param {NodeListOf<HTMLElement>} texto puntero al texto html de el puntaje del jugador
 * @param {NodeListOf<Element>} div puntero al div que se usa para agregar las imagenes de las cartas 
 * @param {number} as id de el jugador dentro del array asJ
 * @param {Array<string>} deck deck de cartas
 * @param {Array<number>} asJ array que contiene el numero de ases de los jugadores
 * @param {Array<number>} puntosJugadores array que contiene el puntaje de los jugadores
 * @returns {number} puntaje del jugador
 */
export const comerCartas = (jugador,texto,div,as,deck,asJ,puntosJugadores) => {
    const carta = pedirCarta(deck);

    if(carta.substring(0,carta.length-1) === 'A' ) { asJ[as]++; }

    puntosJugadores[jugador] += valorCarta(carta);
    texto.innerText = puntosJugadores[jugador];
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    div.append(imgCarta);
    
    return puntosJugadores[jugador];
}
