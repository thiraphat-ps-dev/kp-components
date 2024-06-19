var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { createContext, useState, useMemo, useContext, } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, } from '@mui/material/styles';
import customThemeJson from '../theme/custom-theme.json'; // เพิ่มธีมใหม่ตามต้องการ
import darkThemeJson from '../theme/default-dark.json';
import lightThemeJson from '../theme/default-light.json';
export var lightTheme = createTheme(__assign({}, lightThemeJson));
export var darkTheme = createTheme(__assign({}, darkThemeJson));
export var customTheme = createTheme(__assign({}, customThemeJson));
var themes = {
    light: lightThemeJson,
    dark: darkThemeJson,
    custom: customThemeJson,
};
var ThemeContext = createContext({
    toggleTheme: function () { },
    setTheme: function () { },
    theme: createTheme(lightThemeJson), // Default theme
    themeName: 'light',
});
export var useKPTheme = function () { return useContext(ThemeContext); };
var ThemeProvider = function (_a) {
    var children = _a.children;
    var _b = useState('light'), themeName = _b[0], setThemeName = _b[1];
    var theme = useMemo(function () {
        return createTheme(themes[themeName]);
    }, [themeName]);
    var toggleTheme = function () {
        setThemeName(function (prev) { return (prev === 'light' ? 'dark' : 'light'); });
    };
    var setTheme = function (name) {
        setThemeName(name);
    };
    return (React.createElement(ThemeContext.Provider, { value: { toggleTheme: toggleTheme, setTheme: setTheme, theme: theme, themeName: themeName } },
        React.createElement(MuiThemeProvider, { theme: theme }, children)));
};
export default ThemeProvider;
