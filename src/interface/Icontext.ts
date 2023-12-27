import { Pregunta } from "./Pregunta"

export interface IRespuesta {
    isCorrect: boolean;
    respuesta: string;
  }


export interface Juego {
    pregunta: string
    respuestas: IRespuesta[]
  }

export interface IContext {
    AccessoTerminadoTrue : () => void
    AccessoTerminadoFalse : () => void
    accesoTerminado: boolean
    allGames : Pregunta[]
    handlerBorrarPregunta : (pregunta : string) => void
    handlerAgregarJuego : (e : React.FormEvent<HTMLFormElement> ) => void
    juego: Juego
    setJuego: any
    
}