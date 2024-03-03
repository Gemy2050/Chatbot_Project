import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register";
import Error from "./components/Error";
import Setting from "./components/Setting";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import About from "./components/About";
import Courses from "./components/Courses";
import Feedback from "./components/Feedback";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/about" element={<About />} />

        <Route path="/register" element={<Register />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
