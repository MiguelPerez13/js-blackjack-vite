import _ from 'underscore';
import { crearDeck, comerCartas, turnoComputadora, desabilitar } from './usecases/index.js'

// const miModulo = (()=> {
 
  'use strict'

  let deck = [];
  const tipos = ['C','D','H','S'],
  especiales = ['A','J','Q','K'];
  let puntosJugadores = [],
  asJ = [];

  const btnPedir = document.querySelector('#btnPedir'),
  btnDetener = document.querySelector('#btnDetener'),
  btnNuevo = document.querySelector('#btnNuevo'),
  puntJ = document.querySelectorAll('small'),
  divCartasJugador = document.querySelectorAll('.divCartas');
  
  let comp;

  const iniJuego = (numJugadores = 2) =>{
      deck = crearDeck(tipos,especiales);
      puntosJugadores = [];
      asJ = [];
      for(let i = 0; i< numJugadores; i++){
          puntosJugadores.push(0);
          asJ.push(0);
      } 
      divCartasJugador.forEach(elem => elem.innerHTML = '');
      puntJ.forEach(elem => elem.innerText = 0);
      comp = numJugadores - 1;
      btnPedir.disabled = false;btnDetener.disabled = false;
  }



  const ases = (jugador) =>{
      puntosJugadores[jugador] -= 10;
      asJ[jugador]--;
      puntJ[jugador].innerText = puntosJugadores[jugador];
  }
  







  btnPedir.addEventListener('click',() => {
      puntosJugadores[0] = comerCartas(0,puntJ[0],divCartasJugador[0],0,deck,asJ,puntosJugadores);

      if(puntosJugadores[0] > 21){
          if(asJ[0]>0){
              ases(0);
          }else{
              desabilitar(btnPedir,btnDetener);
              turnoComputadora(0,comp,puntJ,divCartasJugador,deck,asJ,puntosJugadores);
          }
      }else if(puntosJugadores[0] === 21){
          console.log('21 ojala te remonte la maquina');
          desabilitar(btnPedir,btnDetener);
          turnoComputadora(puntosJugadores[0],comp,puntJ,divCartasJugador,deck,asJ,puntosJugadores);
      }
  })

  btnDetener.addEventListener('click', () => {
    
      turnoComputadora(puntosJugadores[0],comp,puntJ,divCartasJugador,deck,asJ,puntosJugadores);
      desabilitar(btnPedir,btnDetener);
  })

  btnNuevo.addEventListener('click',() =>{
      iniJuego();
})
