module.exports = {
  plugins: [
    require("tailwindcss"),
    require("postcss-preset-env")({
      features: { "nesting-rules": false },
    }),
    process.env.NODE_ENV === "production" &&
      require("cssnano")({
        preset: ["advanced", { discardComments: { removeAll: true }, reduceIdents: false }],
      }),
  ].filter(Boolean),
};
