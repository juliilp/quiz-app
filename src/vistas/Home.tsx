import { useEffect, useState } from "react";

interface Respuesta {
  respuesta: string;
  isCorrect: boolean;
}

interface Pregunta {
  pregunta: string;
  respuestas: Respuesta[];
}

export default function Home() {
  const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
  const [numero, setNumero] = useState(0);
  const [checkbox, setCheckbox] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false
  });

  useEffect(() => {
    const gamesString = localStorage.getItem("Games");
    const games = gamesString ? JSON.parse(gamesString) : [];
    const preguntasMezcladas = [...games].sort(() => Math.random() - 0.5);
    setPreguntas(preguntasMezcladas);
  }, []);

  const handlerSigNumero = () => {
    if (preguntas.length >= numero) {
      return setNumero(numero + 1);
    }
    alert("No hay más preguntas");
  };
console.log(preguntas)
  const handlerCheckbox = (index: number) => () => {
    const updatedCheckbox = { checkbox1: false, checkbox2: false, checkbox3: false };
    updatedCheckbox[`checkbox${index + 1}`] = true;
    setCheckbox(updatedCheckbox);
  };
  
  return (
    <main>
      <span>{preguntas[numero]?.pregunta}</span>
      {preguntas.length > 0 &&
        preguntas[numero].respuestas.map((r, key) => (
          <article key={key} className="flex gap-4 items-center">
            <span className="text-xl">{r.respuesta}</span>
            <input
              type="checkbox"
              onChange={handlerCheckbox(key)}
              checked={checkbox[`checkbox${key + 1}`]}
            />
          </article>
        ))}
      <button onClick={handlerSigNumero}>Sig pregunta</button>
    </main>
  );
}
