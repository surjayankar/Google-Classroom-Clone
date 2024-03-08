import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./screens/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
