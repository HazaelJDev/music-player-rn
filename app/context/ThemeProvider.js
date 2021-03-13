import {tailwind, getColor} from '../../lib/tailwind'
import React, { createContext, useState } from 'react';
const themes = {
    dark: {
        bg: getColor('darkShades-500'),
        titleList: getColor('text-200'),
        bgItemList: getColor('primary-500',50),
        textItemList: getColor('text-500'),
        textPlaying: getColor('text-500'),
        overlayPlaying: getColor('primary-500',50),
        overlayCaratula: getColor('darkShades-500',50),
        titlePlayer: getColor('text-500'),
        artistPlayer: getColor('text-700'),
        arrowIcon: getColor('text-500'),
        libraryIcon: getColor('primary-500'),
        modeIcon: getColor('secondary-500'),
        iconVolumen: getColor('text-500'),
    },
    light: {
        bg: getColor('lightShades-500'),
        titleList: getColor('darkShades-700'),
        bgItemList: getColor('primary-500',50),
        textItemList: getColor('darkShades-500'),
        textPlaying: getColor('text-500'),
        overlayPlaying: getColor('primary-500',50),
        overlayCaratula: getColor('lightShades-500',50),
        titlePlayer: getColor('darkShades-700'),
        artistPlayer: getColor('darkShades-500'),
        arrowIcon: getColor('darkShades-500'),
        libraryIcon: getColor('primary-500'),
        modeIcon: getColor('text-700'),
        iconVolumen: getColor('darkShades-500'),
    }
}

const initialState = {
    dark: true,
    theme: themes.dark,
    toggle: () => {}
}
export const ThemeContext = createContext(initialState);

export const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(true) // Default theme is dark

    // To toggle between dark and light modes
    const toggle = () => {
        setDark(!dark)
        console.log('toggled');
    }

    // Filter the styles based on the theme selected
    const theme = dark ? themes.dark : themes.light

    return (
        <ThemeContext.Provider value={{ dark, theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;