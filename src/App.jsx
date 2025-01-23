import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import DarkTheme, { NoTheme } from "react-lazy-dark-theme";
import { useEffect } from "react";

const darkOptions = {
    Dark: true,
    Light: false,
    System: null,
};

const contrastOptions = {
    "Night Mode": false,
    "High Contrast": true,
};

function App() {
    const [dark, setDark] = useState(null);
    const [highContrast, setHighContrast] = useState(false);
    useEffect(() => {
        console.log("dark,highContrast", [dark, highContrast]);
    }, [dark, highContrast]);
    console.log(dark);

    return (
        <>
            <DarkTheme dark={dark} highContrast={highContrast} />
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <NoTheme>
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </NoTheme>
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <NoTheme>
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </NoTheme>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <select
                    onChange={(e) => {
                        setDark(darkOptions[e.target.value]);
                    }}
                >
                    <option>System</option>
                    <option>Dark</option>
                    <option>Light</option>
                </select>

                <select
                    onChange={(e) => {
                        setHighContrast(contrastOptions[e.target.value]);
                    }}
                >
                    <option>Night Mode</option>
                    <option>High Contrast</option>
                </select>
                <p>react-lazy-dark-theme demo.</p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </>
    );
}

export default App;
