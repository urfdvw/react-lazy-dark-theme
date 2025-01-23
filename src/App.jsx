import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import DarkTheme, { NoTheme } from "./react-lazy-dark-theme";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <DarkTheme />
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
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </>
    );
}

export default App;
