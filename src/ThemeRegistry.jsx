import { useEffect, useMemo } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { useTranslation } from "react-i18next";

const ltrCache = createCache({ key: "mui" });

const rtlCache = createCache({
  key: "mui-rtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function ThemeRegistry({ children }) {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  useEffect(() => {
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.documentElement.lang = isRtl ? "ar" : "en";
  }, [isRtl]);

  const theme = useMemo(
    () =>
      createTheme({
        direction: isRtl ? "rtl" : "ltr",
        typography: {
          fontFamily: isRtl
            ? "Cairo, Arial, sans-serif"
            : "IBM Plex Sans, Arial, sans-serif",
        },
      }),
    [isRtl]
  );

  return (
    <CacheProvider value={isRtl ? rtlCache : ltrCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
