export default function TrucoCuartoCuadrado({ numero }: any) {
  return (
    <article>
      {numero === 16 && <h2>1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16</h2>}
      {numero === 17 && <h2>1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17</h2>}
      {numero === 18 && <h2>1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18</h2>}
      {numero === 19 && (
        <h2>1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19</h2>
      )}
      {numero === 20 && (
        <h2>1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20</h2>
      )}
    </article>
  );
}
