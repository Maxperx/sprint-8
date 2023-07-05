import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShipList from './Pages/ShipList';
import ShipDetails from './Pages/ShipsDetails';
import { Welcome } from './Pages/welcome';
import { Register } from './components/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/starships" element={  <ShipList />}/>
        <Route path="/ships/:starshipId" element={<ShipDetails />} />
      </Routes>
    </Router>
  ); 
}

export default App;
