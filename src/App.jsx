import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
