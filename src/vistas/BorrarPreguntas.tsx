import { useEffect, useState } from "react"
import { Pregunta } from "../interface/Pregunta"
import CardBorrarPregunta from "../components/CardBorrarPregunta"

export default function BorrarPreguntas() {
    const [allGames, setAllGames] = useState<Pregunta[]>([])
    
    useEffect(() => {
        const games = localStorage.getItem("Games")
        if(games !== null) {
            setAllGames(JSON.parse(games))
        }
    },[])


  return (
    <main className="flex gap-8" >
        {
        allGames.map((g, key) => {
            return <CardBorrarPregunta pregunta={g.pregunta} key={key} index={key} />
        })
        }
    </main>
  )
}
