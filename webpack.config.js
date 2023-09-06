module.exports = {
  // Other Webpack configuration options...
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
            },
          },
        ],
      },
      // Add other loader rules for different file types if needed
    ],
  },
};
