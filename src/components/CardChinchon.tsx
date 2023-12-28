import { useState } from "react";
import useChinchonStore from "../hooks/useChinchonStore";

interface Props {
  nombre: string;
  puntos: number;
}
export default function CardChinchon({ nombre, puntos }: Props) {
  const [newPuntos, setNewPuntos] = useState(0)

  const onChangeNewPuntos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = e.target.value 
    setNewPuntos(Number(number))
  }
  const {sumarPuntos} = useChinchonStore()

  const handlerSumarPuntos = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    sumarPuntos(nombre,newPuntos)
  }
  return (
    <article className="flex flex-col" >
      <h2>{nombre}</h2>
      <p>{puntos}</p>
    <form onSubmit={handlerSumarPuntos} >
    <input type="text" onChange={onChangeNewPuntos}  className="border border-black" />
      <button >Sumar</button>
    </form>
    </article>
  );
}
