// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Pengci from "./component/Pengci.js";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/pengci' element={<Pengci />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;