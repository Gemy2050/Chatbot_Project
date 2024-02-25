import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register";
import Error from "./components/Error";




function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      
    </div>
  );
}

export default App;
