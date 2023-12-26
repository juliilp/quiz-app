import { createContext, useEffect, useState } from "react"
import { IContext } from "../interface/Icontext"
export const store = createContext <IContext | null>(null)
export default function GlobalStore({children} : any) {
  const [accesoTerminado, setAccesoTerminado] = useState(false)
    useEffect(() => {
        const existingGames = localStorage.getItem("Games");
        if (!existingGames) {
          localStorage.setItem("Games", JSON.stringify([]));
        }
      }, []);

      const AccessoTerminadoTrue = () => setAccesoTerminado((prev) => prev = true)
      const AccessoTerminadoFalse = () => setAccesoTerminado((prev) => prev = false)

    const values = {
        AccessoTerminadoTrue,
        accesoTerminado,
        AccessoTerminadoFalse

    }
  return (
    <store.Provider value={values} >
        {children}
    </store.Provider>
  )
}
