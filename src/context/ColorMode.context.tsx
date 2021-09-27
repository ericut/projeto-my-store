import { ReactNode, createContext, useState } from 'react';

interface IColorModeContextProps {
  isDarkTheme: boolean;
  setIsDarkTheme: (value: boolean) => void;
}

interface IColorModeProviderProps {
  children: ReactNode;
}

export const ColorModeContext = createContext({} as IColorModeContextProps);

export function ColorModeProvider({ children }: IColorModeProviderProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return <ColorModeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>{children}</ColorModeContext.Provider>;
}
