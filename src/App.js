import { Route, Routes } from "react-router";
import "../src/assets/css/app.css";
import "../src/assets/css/index.css";
import "../src/assets/css/1200.css";
import "../src/assets/css/992.css";
import "../src/assets/css/768.css";
import "../src/assets/css/576.css";
import Main from "./components/Main/Main";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
