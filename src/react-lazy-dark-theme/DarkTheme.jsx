import { Helmet } from "react-helmet";
import useThemeDetector from "./useThemeDetector";

// eslint-disable-next-line react/prop-types
export default function DarkTheme({ dark = null, highContrast = false }) {
    const systemIsDark = useThemeDetector();
    var isDarkTheme;
    if (dark === null) {
        isDarkTheme = systemIsDark;
    } else {
        isDarkTheme = dark;
    }

    localStorage.setItem("isDarkTheme", isDarkTheme);

    const invert_level = highContrast ? 100 : 87;

    return isDarkTheme ? (
        <Helmet>
            <style type="text/css">{`
                html {
                    background-color: white;
                    -webkit-filter: invert(${invert_level}%) hue-rotate(180deg);
                    -moz-filter: invert(${invert_level}%) hue-rotate(180deg);
                    -o-filter: invert(${invert_level}%) hue-rotate(180deg);
                    -ms-filter: invert(${invert_level}%) hue-rotate(180deg);
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
