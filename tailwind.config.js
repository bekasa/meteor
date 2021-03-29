module.exports = {
  purge: [
  	'_includes/*.njk',
	'_includes/partials/*.html',
	'_includes/partials/*.njk',
	'blog/index.njk',
	'services/index.njk',
	'index.njk',
	'404.html',
	'contact.njk',
	'thankyou.md'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
  visibility: [],
    extend: {},
  },
  plugins: [],
}
