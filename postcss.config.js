export default {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},

    /* 
      *
      * For the smallest possible production build, 
      * minifying the CSS with a tool - cssnano
      * 
      * to minify CSS add the --minify flag:
      * when using Tailwind CLI, 
      * as alternative to using tool like - cssnano 
      *
      * usecase - `npx tailwindcss -o build.css --minify`
    */
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
}
