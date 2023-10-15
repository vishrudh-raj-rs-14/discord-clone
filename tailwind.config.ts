import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.tsx", "./app/**/*.tsx"],
  theme: {
    extend: {
      // colors: {
      //   white: "#ffffff",
      //   landingBg: "#2F2F2F",
      //   aboutUsbg: "#303030",
      //   abousUsmobBg: "#2f2f2f",
      //   socialsbg: "#292929",
      //   primary: "#303030",
      // },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        green: "#248046",
        brighterGreen: "#21A559",
        backgroundGray: "#303338",
        discordPurple: "#5764F2",
        messagebarGray: "#2A2D31",
        sidebarGray: "#1E1F22",
        textGray: "#B5BAC0",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-brighterGreen|backgroundGray|discordBlue|messagebarGray|sidebarGray/,
    },
  ],
};
export default config;
