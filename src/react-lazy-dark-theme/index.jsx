import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export default function DarkTheme({ dark = null }) {
    var isDarkTheme;
    if (dark === null) {
        isDarkTheme = useThemeDetector();
    } else {
        isDarkTheme = dark;
    }

    return isDarkTheme ? (
        <Helmet>
            <style type="text/css">{`
                html {
                    background-color: white;
                    -webkit-filter: invert(87%) hue-rotate(180deg);
                    -moz-filter: invert(87%) hue-rotate(180deg);
                    -o-filter: invert(87%) hue-rotate(180deg);
                    -ms-filter: invert(87%) hue-rotate(180deg);
                }

                body {
                    background-color: white; 
                }
            `}</style>
        </Helmet>
    ) : (
        <></>
    );
}

function useThemeDetector() {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
    const mqListener = (e) => {
        setIsDarkTheme(e.matches);
    };

    useEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        darkThemeMq.addListener(mqListener);
        return () => darkThemeMq.removeListener(mqListener);
    }, []);
    return isDarkTheme;
}
