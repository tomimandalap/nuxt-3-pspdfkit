import type { Config } from "tailwindcss";
import { getIconCollections, iconsPlugin } from "@egoist/tailwindcss-icons";

const colors = {
  main: {
    DEFAULT: "#121319",
  },
};

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontFamily: {
        sans: ["Open Sauce Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    iconsPlugin({
      // Select the icon collections at https://icones.js.org/ when you want to use
      collections: getIconCollections(["iconoir"]),
    }),
  ],
};
