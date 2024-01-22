export default function TrucoSegundoCuadrado({ numero }: any) {
  return (
    <article>
      {numero === 6 && <h2>1,2,3,4,5,6</h2>}
      {numero === 7 && <h2>1,2,3,4,5,6,7</h2>}
      {numero === 8 && <h2>1,2,3,4,5,6,7,8</h2>}
      {numero === 9 && <h2>1,2,3,4,5,6,7,8,9</h2>}
      {numero === 10 && <h2>1,2,3,4,5,6,7,8,9,10</h2>}
    </article>
  );
}
