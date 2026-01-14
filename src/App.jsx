import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/UI/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout theme={theme} toggleTheme={toggleTheme} />}>
                    <Route index element={<Home theme={theme} />} />
                    <Route path="projects" element={<Projects theme={theme} />} />
                    <Route path="about" element={<About theme={theme} />} />
                    <Route path="contact" element={<Contact theme={theme} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
