interface Props {
  pregunta: string;
  index: number;
}
export default function CardBorrarPregunta({ pregunta, index }: Props) {
  const handlerBorrarPregunta = (key: number) => {
    console.log(key);
  };
  return (
    <article key={index} className="border w-[200px] h-[200px] border-black">
      <h2>{pregunta}</h2>
      <button onClick={() => handlerBorrarPregunta(index)}>
        Borrar Pregunta
      </button>
    </article>
  );
}
