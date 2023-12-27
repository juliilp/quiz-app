
export interface IContext {
    AccessoTerminadoTrue : () => void
    AccessoTerminadoFalse : () => void
    accesoTerminado: boolean
    allGames : []
    handlerBorrarPregunta : (pregunta : string) => void
}