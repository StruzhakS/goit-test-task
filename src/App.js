import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Tweet from './Components/Tweet/Tweet';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweet" element={<Tweet />} />
      </Routes>
    </>
  );
}

export default App;
