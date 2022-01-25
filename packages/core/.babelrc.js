const useESModules = !!process.env.MODULE;

module.exports = api => {
  api.cache(() => process.env.MODULE);
  return {
    plugins: [
      ["@babel/transform-runtime", { useESModules }],
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-proposal-nullish-coalescing-operator",
      "@babel/proposal-object-rest-spread",
      ["@babel/plugin-proposal-class-properties", { "loose": true }],
      "@babel/proposal-export-default-from",
      "babel-plugin-styled-components",
      "inline-react-svg",
      "macros"
    ],
    // https://github.com/babel/babel/issues/11622
    presets: useESModules ? ["@babel/react"] : [['@babel/env', { loose: true }], "@babel/react"]
  };
};
