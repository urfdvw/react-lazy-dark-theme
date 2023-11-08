# React Lazy Dark Theme

The laziest way to enable dark theme in your page.
How lazy?
- No CSS
- Only one component
- The only parameter is optional

## How to use
Prerequisite: a light themed page.

Import and use the component anywhere in the page.
(Should only be used once in a page.)
```js
import DarkTheme from "react-lazy-dark-theme";
export default function App() {
    // any code
    return (
        <>
            {/* any code */}
            <DarkTheme />
            {/* any code */}
        </>
    )
```
With the example above, the page theme should follow the OS theme (Dark/Light).
If you want to force dark or light,
use `<DarkTheme dark={true} />` or `<DarkTheme dark={false} />`.

## Limitations
This solution works extremely well on
- plain text
- highlighted code
- flat design UI components

Works OK on
- shadow effects
- color gradient effects

Works bad on
- highlights
- neo effects

Works extremely bad on
- anything shoot from cameras