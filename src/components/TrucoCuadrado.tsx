import TrucoCuadradoCompleto from "./TrucoCuadradoCompleto";

export default function TrucoCuadrado({ numero }: any) {
  return (
    <section className="size-16 flex flex-col gap-[80px] flex-grow-1">
      <TrucoCuadradoCompleto numero={numero} num={1} />
      <TrucoCuadradoCompleto numero={numero} num={5} />
      <TrucoCuadradoCompleto numero={numero} num={10} />
      <TrucoCuadradoCompleto numero={numero} num={15} />
      <TrucoCuadradoCompleto numero={numero} num={20} />
      <TrucoCuadradoCompleto numero={numero} num={25} />
    </section>
  );
}
