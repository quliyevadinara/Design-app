import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Profile from "./components/Profile";
import { createContext, useState } from "react";
import Dashboard from "./components/Dashboard";
export const UserContext = createContext();
export const ModeContext = createContext();
export const loginContect = createContext();
function App() {
  const getLOcalTheme = () => {
    return localStorage.getItem("theme") || "light";
  };
  const [theme, setTheme] = useState(getLOcalTheme());
  const { login, setIslogin } = useState(false);
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : [
          {
            name: "",
            mail: "",
            pass: "",
          },
        ]
  );
  return (
    <div className="App" id={theme}>
      <UserContext.Provider value={[user, setUser]}>
        <ModeContext.Provider value={{ theme, setTheme }}>
          <loginContect.Provider value={{ login, setIslogin }}>
            <BrowserRouter>
              <NavMenu />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blog/:id" element={<Blog />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </loginContect.Provider>
        </ModeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
