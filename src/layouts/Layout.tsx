import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const goToKtWiz = () => {
    navigate('/ktwiz/about');
  };
  const goToWizPark = () => {
    navigate('/wizpark/intro')
  }
  const goToGame = () => {
    navigate('/game/regular/schedule')
  }
  return (
    <>
      {/* Header */}
      <header>
        <button onClick={goToKtWiz}>KT위즈는?</button>
        <button onClick={goToWizPark}>수원 kt wiz park</button>
        <button onClick={goToGame}>정규리그</button>

      </header>
      <main>
        <Outlet/>
      </main>
      {/* Outlet 부분 */}
      {/* Footer */}
    </>
  );
};
export default Layout;
