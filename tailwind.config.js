module.exports = {
  content: [    "./index.html",    "./src/**/*.{vue,js,ts,jsx,tsx}",  ],
  theme: {
    colors: {
      primary: "#282828",
      secondary: "#ebdbb2",
      green: "#98971a",
      red: "#cc241d",
      yellow: "#d79921",
      blue: "#458588"
    },
    extend: {
      fontFamily: {
        "source-code-pro": ["Source Code Pro", "monospace"]
      }
    }
  }
}
