export default function TrucoTercerCuadrado({ numero }: any) {
  return (
    <article>
      {numero === 11 && <h2>1,2,3,4,5,6,7,8,9,10,11</h2>}
      {numero === 12 && <h2>1,2,3,4,5,6,7,8,9,10,11,12</h2>}
      {numero === 13 && <h2>1,2,3,4,5,6,7,8,9,10,11,12,13</h2>}
      {numero === 14 && <h2>1,2,3,4,5,6,7,8,9,10,11,12,13,14</h2>}
      {numero === 15 && <h2>1,2,3,4,5,6,7,8,9,10,11,12,13,14,15</h2>}
    </article>
  );
}
