import { Routes, Route, Link } from "react-router-dom";
import {Login, Main} from "./js/routes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
