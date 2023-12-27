import { Pregunta } from "./Pregunta"

export interface IContext {
    AccessoTerminadoTrue : () => void
    AccessoTerminadoFalse : () => void
    accesoTerminado: boolean
    allGames : Pregunta[]
    handlerBorrarPregunta : (pregunta : string) => void
}