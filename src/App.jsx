import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import DarkTheme from "react-lazy-dark-theme";

function App() {
    const [dark, setDark] = useState(null);
    console.log(dark);

    return (
        <>
            <DarkTheme dark={dark} />
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <select
                    onChange={(e) => {
                        switch (e.target.value) {
                            case "Dark":
                                setDark(true);
                                break;
                            case "Light":
                                setDark(false);
                                break;
                            case "System":
                                setDark(null);
                                break;
                        }
                    }}
                >
                    <option>System</option>
                    <option>Dark</option>
                    <option>Light</option>
                </select>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </>
    );
}

export default App;
