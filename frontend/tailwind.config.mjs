import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./index.html", // Include the main HTML file
    "./src/**/*.{html,js,jsx,ts,tsx,vue}", // Include all files in src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [forms, typography],
};
