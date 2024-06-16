import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./component/Header/Header";
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
