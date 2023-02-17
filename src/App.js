import './App.scss';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import GettingStarted from './Components/GettingStarted';
import Home from './Components/Home';
import MoreInformations from './Components/MoreInformations';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<GettingStarted/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/more-informations' element={<MoreInformations/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
