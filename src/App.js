import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Tweet from './Components/Tweet/Tweet';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '25px' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweet" element={<Tweet />} />
      </Routes>
    </div>
  );
}

export default App;
