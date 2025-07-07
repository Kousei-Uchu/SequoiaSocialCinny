import React, { ReactNode, useEffect } from 'react';
import { configClass, varsClass } from 'folds';
import {
  SequoiaDarkTheme,
  SequoiaLightTheme,
  ThemeContextProvider,
  ThemeKind,
  useActiveTheme,
  useSystemThemeKind,
} from '../hooks/useTheme';

export function UnAuthRouteThemeManager() {
  const systemThemeKind = useSystemThemeKind();

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(configClass, varsClass);
    if (systemThemeKind === ThemeKind.Dark) {
      document.body.classList.add(...SequoiaDarkTheme.classNames);
    }
    if (systemThemeKind === ThemeKind.Light) {
      document.body.classList.add(...SequoiaLightTheme.classNames);
    }
  }, [systemThemeKind]);

  return null;
}

export function AuthRouteThemeManager({ children }: { children: ReactNode }) {
  const activeTheme = useActiveTheme();

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(configClass, varsClass);

    document.body.classList.add(...activeTheme.classNames);
  }, [activeTheme]);

  return <ThemeContextProvider value={activeTheme}>{children}</ThemeContextProvider>;
}
