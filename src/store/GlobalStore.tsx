import { createContext, useEffect, useState } from "react"
import { IContext } from "../interface/Icontext"
import { Pregunta } from "../interface/Pregunta"
export const store = createContext <IContext | null>(null)
export default function GlobalStore({children} : any) {
  const [accesoTerminado, setAccesoTerminado] = useState(false)
  const [allGames, setAllGames] = useState([])


  useEffect(() => {
    let gamesLocalStorage = localStorage.getItem("Games")
    if (gamesLocalStorage !== null) gamesLocalStorage = JSON.parse(gamesLocalStorage)
    setAllGames(gamesLocalStorage)
  },[])
    useEffect(() => {
        const existingGames = localStorage.getItem("Games");
        if (!existingGames) {
          localStorage.setItem("Games", JSON.stringify([]));
        }
      }, []);

      const AccessoTerminadoTrue = () => setAccesoTerminado((prev) => prev = true)
      const AccessoTerminadoFalse = () => setAccesoTerminado((prev) => prev = false)

      const handlerBorrarPregunta = (pregunta: string) => {
        const newGames = allGames.filter((p: Pregunta) => p.pregunta !== pregunta)
        setAllGames(newGames)
        localStorage.setItem("Games", JSON.stringify(newGames))
      };

    const values = {
        AccessoTerminadoTrue,
        accesoTerminado,
        AccessoTerminadoFalse,
        allGames,
        handlerBorrarPregunta
    }
  return (
    <store.Provider value={values} >
        {children}
    </store.Provider>
  )
}
