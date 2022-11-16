import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddDoacaoComponent from './components/AddDoacaoComponent';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Contato from './components/Contato/Contato';
import Sobre from './components/Sobre/Sobre';
import Parceiro from './components/Parceiro/Parceiro';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
            <Routes>
                <Route exact path = "/" element = {<Main />}></Route>
                <Route path = "/doacao" element = {<Main />}></Route>
                <Route path = "/add-doacao" element = {<AddDoacaoComponent />}></Route>
                <Route path = "/edit-doacao/:id" element = {<AddDoacaoComponent />}></Route>
                <Route path='/Sobre' element={<Sobre />}></Route>
                <Route path='/Parceiros' element={<Parceiro />}></Route>
                <Route path='/Contato' element={<Contato />}></Route>
            </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
