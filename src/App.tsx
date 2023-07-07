import { Routes, Route } from 'react-router-dom';
import Create from './pages/create';
import Home from './pages/home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/create' element={<Create />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
