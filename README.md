# React Lazy Dark Theme

The laziest way to enable dark theme in your page.
How lazy?
- No CSS
- Only one component
- All parameters are optional

## Install
```
npm i react-lazy-dark-theme
```

## Quick Start
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

## How to use

### `DarkTheme` Component

`import DarkTheme from "react-lazy-dark-theme";`

When it exists in the page, the whole page will follow the theme set by this component.

#### Parameters
`dark={null}` choose within these values
- null: follow system
- true: dark theme
- false: light theme

`highContrast={false}` choose within these values
- false: giving a grayish style to view better in the dark environment.
- true: giving a high contrast style to view better on projector

### `NoTheme` Component

`import {NoTheme} from "react-lazy-dark-theme";`

When a component is wrapped with this component, it will not follow the theme settings and remain the original look.
it is suggested to use this over images and videos.


## Demo
https://urfdvw.github.io/react-lazy-dark-theme/

In this demo is basically the example code of Vite + React.
But the css file for all colors is removed.
So the color theme is fully controlled by this library.

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

For anything that looks weird, please wrap with `NoTheme` component.
