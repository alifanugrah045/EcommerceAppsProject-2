import logo from "./logo.svg";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

function App() {
  const { isAuthenticated, role } = useSelector((state) => state.user);
  return (
    <div className="App">
      <header className="">
        <NavbarComponent type={role === "admin" ? "admin" : "user"} />
        <Routes>
          <Route />
        </Routes>
      </header>
    </div>
  );
}

export default App;
