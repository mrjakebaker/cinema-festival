// snowpack.config.mjs
export default {
  mount: {
    src: '/_dist',
    public: '/',
  },
  devOptions: {
    tailwindConfig: './tailwind.config.js',
  },
  buildOptions: {
    // put the build files in /docs
    out: 'docs',
    // put the meta snowpack build files under snowpack instead of _snowpack since Github special-cases underscore prefixed folders
    metaUrlPath: 'snowpack',
  },
  plugins: ['@snowpack/plugin-postcss'],
};
