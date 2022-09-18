import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { Home, Login } from './pages';
import { Nav } from './components';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App