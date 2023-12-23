// webpack.config.js
module.exports = {
    target: "node",
    entry: "./src/server/index.js",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
          },
        },
      ],
    },
  };
  