import Header from "./components/Header";
import Rodape from "./components/Rodape";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import PokemonPage from "./pages/PokemonPage";
import EnderecoPage from "./pages/EnderecoPage";
import EstudantesPage from "./pages/EstudantesPage";
import InicioPage from "./pages/InicioPage";
import SobrePage from "./pages/SobrePage";
import SobrePretaLabPage from "./pages/SobrePage/SobrePretaLabPage";

function App() {
  return (
    <>
      <Header />

      <div style={{ marginBottom: "130px" }}>
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/estudantes" element={<EstudantesPage />} />
          <Route path="/pokemons" element={<PokemonPage />} />
          <Route path="/endereco" element={<EnderecoPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/sobre">
            <Route index element={<SobrePage />} />
            <Route path="preta-lab" element={<SobrePretaLabPage />} />
          </Route>
        </Routes>
      </div>

      <Rodape mensagem="Feito com amor por Laris <3" />
    </>
  );
}

export default App;