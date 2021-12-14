module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/css/variables/_variables.scss";',
      },
    },
  },
};
