import { comerCartas } from "./eatCards";
import { desabilitar } from "./deshab";

/**
 * funcion que realiza el turno de la computadora y decide el ganador
 * @param {number} puntosMinimos puntaje minimo a superar o igualar para que la computadora gane
 * @param {number} comp id de la posicion de la computadora en el array de jugadores
 * @param {NodeListOf<HTMLElement>} puntJ elemento html de los puntajes de los jugadores
 * @param {NodeListOf<Element>} divCartasJugador elemento div de las imagenes de las cartas 
 * @param {Array<string>} deck array con el deck de cartas 
 * @param {Array<number>} asJ array con el numero de ases de los jugadores
 * @param {array<number>} puntosJugadores array con el puntaje de los jugadores
 */
export const turnoComputadora = (puntosMinimos,comp,puntJ,divCartasJugador,deck,asJ,puntosJugadores) => {
      
    do{

        puntosJugadores[comp] = comerCartas(comp,puntJ[1],divCartasJugador[comp],1,deck,asJ,puntosJugadores);
        if(puntosJugadores[comp] > 21 && asJ[1]>1){
            ases(comp);
        }

    }while(puntosJugadores[comp]<puntosMinimos);

    setTimeout(() => {
      (puntosJugadores[comp] === puntosJugadores[0]) ? alert('empatate') : (puntosJugadores[comp] > 21)? alert('ganaste') : 
    alert('perdiste');
    }, 100);

}