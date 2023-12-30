import { Jugadores } from "./Jugadores";

export interface IChinchonStore {
    handlerAddJugadores: () => void;
    onChangeCreateJugadores: (e: React.ChangeEvent<HTMLInputElement>) => void;
    jugadorCreate: Jugadores;
    allJugadores: Jugadores[];
    sumarPuntos: (nombre: string, puntos: number) => void;
    borrarJugador: (nombre: string) => void;
    borrarTodosJugadores: () => void;
    handlerRetroceder: (nombre: string) => void;
    reiniciarResultados: () => void;
    hacerMenos10 : (nombre: string) => void
  }