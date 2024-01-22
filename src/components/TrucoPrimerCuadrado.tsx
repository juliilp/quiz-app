export default function TrucoPrimerCuadrado({ numero }: any) {
  return (
    <article>
      {numero === 1 && <h2>1</h2>}
      {numero === 2 && <h2>1,2</h2>}
      {numero === 3 && <h2>1,2,3</h2>}
      {numero === 4 && <h2>1,2,3,4</h2>}
      {numero === 5 && <h2>1,2,3,4,5</h2>}
    </article>
  );
}
