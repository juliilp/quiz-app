import React from "react";

interface Props {
  pregunta: string;
  index: number;
  onBorrar: (pregunta: string) => void; // Nueva prop
}

const CardBorrarPregunta: React.FC<Props> = ({ pregunta, index, onBorrar }) => {
  return (
    <article key={index} className="border w-[200px] h-[200px] border-black">
      <h2>{pregunta}</h2>
      <button onClick={() => onBorrar(pregunta)}>
        Borrar Pregunta
      </button>
    </article>
  );
};

export default CardBorrarPregunta;
