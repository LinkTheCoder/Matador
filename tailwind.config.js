module.exports = {
  content: [
	"./index.html",
	"./src/**/*.{js,jsx}"],
  theme: {
    extend: {
		colors: {
			primary: '#ba68c8',
			secondary: '#171717'
		}
	},
	fontFamily: {
		sans: ['Montserrat', 'sans-serif'],
	}
  },
  plugins: [require("@tailwindcss/forms")],
}