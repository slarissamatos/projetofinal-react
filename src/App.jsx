import Header from "./components/Header";
import Rodape from "./components/Rodape";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/pages/ErrorPage";
import SobrePage from "./pages/SobrePage";
import SobreMimPage from "./pages/SobrePage/SobreMimPage";
import SobrePretaLabPage from "./pages/SobrePage/SobrePretaLabPage";
import PokemonPage from "./pages/PokemonPage";
import EnderecoPage from "./pages/pages/EnderecoPage";
import EstudantesPage from "./pages/InicioPage";
import InicioPage from "./pages/InicioPage";

function App() {
  return (
    <>
      <Header />

      <div style={{ marginBottom: "130px" }}>
        <Routes>
          <Route path="/" element={<SobreMimPage />} />
          <Route path="/estudantes" element={<EstudantesPage />} />
          <Route path="/pokemons" element={<PokemonPage />} />
          <Route path="/endereco" element={<EnderecoPage />} />
          <Route path="/sobre">
            <Route index element={<SobrePage />} />
            <Route path="mim" element={<SobreMimPage />} />
            <Route path="preta-lab" element={<SobrePretaLabPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>

      <Rodape mensagem="Feito com amor, Laris!" />
    </>
  );
}

export default App;