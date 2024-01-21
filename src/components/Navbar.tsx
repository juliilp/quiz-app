import useQuizGamesStore from "../hooks/useQuizGamesStore";
import useChinchonStore from "../hooks/useChinchonStore";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
export default function Navbar() {
  const { AccessoTerminadoFalse, typeGame, selectInicio } = useQuizGamesStore();
  const { reiniciarResultados } = useChinchonStore();
  const handlerInicio = () => {
    AccessoTerminadoFalse();
    selectInicio();
  };

  return (
    <header className="w-full bg-[#1B3B6F] z-10">
      <NavbarMobile
        handlerInicio={handlerInicio}
        reiniciarResultados={reiniciarResultados}
        typeGame={typeGame}
      />
      <NavbarDesktop
        handlerInicio={handlerInicio}
        reiniciarResultados={reiniciarResultados}
        typeGame={typeGame}
      />
    </header>
  );
}
