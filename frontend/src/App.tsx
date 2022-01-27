import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './modules/landing-page';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<LandingPage />} />
          {/* <Route path="/article/:url" element={<Article />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
