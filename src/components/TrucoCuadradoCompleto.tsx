export default function TrucoCuadradoCompleto({ num, numero }: any) {
  return (
    <article>
      {numero >= num && (
        <div className=" w-[75px] h-[5px] border border-black bg-black transform translate-y-6 translate-x-[-22px] rotate-90" />
      )}
      {numero >= num + 1 && (
        <div className=" w-[75px] h-[5px] border border-black bg-black transform translate-y-[-16px] translate-x-4 " />
      )}
      {numero >= num + 2 && (
        <div className=" w-[75px] h-[5px] border border-black bg-black transform translate-y-4 translate-x-[52px] rotate-90 " />
      )}
      {numero >= num + 3 && (
        <div className=" w-[75px] h-[5px] border border-black bg-black transform translate-y-[46px] translate-x-[14px] " />
      )}
      {numero >= num + 4 && (
        <div className=" w-[100px] h-[5px] border border-black bg-black rotate-[45deg] transform translate-y-[4px] translate-x-[1px] " />
      )}
    </article>
  );
}
