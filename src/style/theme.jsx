const { useState } = require("react");
const { ThemeProvider } = require("styled-components");

const defaultTheme = {
  color: {
    black: "#1111",
    accent: "#2a96d4",
    accent_alt: "#cc2a1f"
  },
  spacing: {
    default: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px"
  }
};

const StyledThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledThemeProvider;
