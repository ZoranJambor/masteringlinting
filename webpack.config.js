// webpack.config.js
module.exports = {
    entry: "./styles/prettier.css",
    module: {
      rules: [
        {
          test: /\.css?$/,
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'prettier-loader',
              options: {
                // skipRewritingSource: true,
                parser: 'css'
              },
            }
          ],
        }
      ]
    }
  };