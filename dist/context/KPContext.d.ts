import React, { ReactNode } from 'react';
import { Theme } from '@mui/material/styles';
import lightThemeJson from '../theme/default-light.json';
type DesignThemeTypes = Partial<typeof lightThemeJson>;
declare module '@mui/material/styles' {
    interface Theme extends DesignThemeTypes {
        borderRadius: {
            lg: string;
            max: string;
            md: string;
            sm: string;
            xl: string;
            xs: string;
        };
    }
    interface ThemeOptions extends DesignThemeTypes {
        borderRadius?: {
            lg?: string;
            max?: string;
            md?: string;
            sm?: string;
            xl?: string;
            xs?: string;
        };
    }
}
export declare const lightTheme: Theme;
export declare const darkTheme: Theme;
export declare const customTheme: Theme;
interface ThemeContextType {
    toggleTheme: () => void;
    setTheme: (themeName: 'light' | 'dark' | 'custom') => void;
    theme: Theme;
    themeName: string;
}
export declare const useKPTheme: () => ThemeContextType;
interface ThemeProviderProps {
    children: ReactNode;
}
declare const ThemeProvider: React.FC<ThemeProviderProps>;
export default ThemeProvider;
