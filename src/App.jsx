import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./component/Header/Header";
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <Router basename="/Portfolio">
      <Header />
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
