import { createTheme } from "@mui/material/styles";
export function defaultTheme() {
  const themeOptions = {
    typography: {
      fontFamily: "'Open Sans',sans-serif",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
                @font-face {
                  font-family: 'Raleway';
                  font-style: normal;
                  font-display: swap;
                  font-weight: 400;
                  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                }
              `,
      },
    },
    themeColors: {
      customColor: {
        menuitemColor: "#cbd5e1",
        sidebarBackground: "#1e293b",
        description: "#878a8e",
        disabledColor: "#e2e8f0",
      },
    },
    customPadding: {
      paddingscale4: "4px",
      paddingscale6: "6px",
      paddingscale8: "8px",
      paddingscale10: "10px",
      paddingscale12: "12px",
      paddingscale14: "14px",
      paddingscale16: "16px",
      paddingscal22: "22px",
      paddingscale24: "24px",
      paddingscale36: "36px",
      paddingscale48: "48px",
    },
  };

  const theme = createTheme(themeOptions);
  return theme;
}
