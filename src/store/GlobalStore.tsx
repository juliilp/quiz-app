import { createContext, useEffect } from "react"
import { IContext } from "../interface/Icontext"
export const store = createContext <IContext | null>(null)
export default function GlobalStore({children} : any) {
    useEffect(() => {
        const existingGames = localStorage.getItem("Games");
        if (!existingGames) {
          localStorage.setItem("Games", JSON.stringify([]));
        }
      }, []);

    const values = {
        algo : "algo"
    }
  return (
    <store.Provider value={values} >
        {children}
    </store.Provider>
  )
}
