import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Tweet from './Components/Tweet/Tweet';
import s from './App.module.css';

function App() {
  return (
    <div className={s.generalBox}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweet" element={<Tweet />} />
      </Routes>
    </div>
  );
}

export default App;
