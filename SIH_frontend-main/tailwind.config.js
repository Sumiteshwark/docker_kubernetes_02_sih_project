import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
	"path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontBold: ["Poppins Semi-Bold", "sans-serif"],
        fontRegular: ["Poppins Regular", "sans-serif"],
        fontMedium: ["Poppins Medium", "sans-serif"],
      },
      colors: {
        primary: "#EB8105",
        secondary: "#FAAC06",
        tertiary: "#ffffff",
      },
    },
  },
  plugins: [],
});
