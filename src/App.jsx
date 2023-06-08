import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NumerosRomanos from './pages/NumerosRomanos';
import JogoDaVida from './pages/JogoDaVida';
import ContaRestaurante from './pages/ContaRestaurante';
import Layout from './Layout';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Layout>
          <Routes>
            <Route path='/*' element={<Home />} />
            <Route path='/numeros' element={<NumerosRomanos />} />
            <Route path='/jogo' element={<JogoDaVida />} />
            <Route path='/conta' element={<ContaRestaurante />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
