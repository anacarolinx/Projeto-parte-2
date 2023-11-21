import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

// Custom Error Component
const ErrorComponent = () => {
  return <div>Error: Página não encontrada!</div>;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          erroElement = {<ErrorComponent/>}
          element={
            <Routes>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="cadastro" element={<Cadastro />} />
              <Route path="home" element={<Home />} /> />
            </Routes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
