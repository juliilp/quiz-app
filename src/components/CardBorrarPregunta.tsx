import React from "react";

interface Props {
  pregunta: string;
  index: number;
  onBorrar: (pregunta: string) => void; // Nueva prop
}

const CardBorrarPregunta: React.FC<Props> = ({ pregunta, index, onBorrar }) => {

  const handlerBorrar = () => {
    const res = confirm("Estas seguro de borrar la pregunta: " + pregunta + " ?")
    if(res) {
      onBorrar(pregunta)
    }
  }
  return (
    <article key={index} className="border w-[250px] max-w-[350px] p-6 border-black flex flex-col gap-8">
      <h2 className="text-sm" >{pregunta}</h2>
      <button onClick={handlerBorrar}
      className="rounded-lg py-2 px-6 md:px-10 font-bold bg-[#065a82]"
      >
        Borrar Pregunta
      </button>
    </article>
  );
};

export default CardBorrarPregunta;
