// NodeJS 환경에서 동작하므로 require(), module.exports를 사용
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  // 파일을 읽어들이기 시작하는 설정
  entry: "./js/main.js",

  // 결과물(번들)을 반환하는 설정
  output: {
    path: path.resolve(__dirname, "dist"), // 절대경로로 작성하기 위해 path 사용
    filename: "main.js",
    clean: true, // 기존 파일을 삭제하고 새로운 파일을 생성
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },

  plugins: [
    new HtmlPlugin({
      template: "./index.html", // 루트 경로의 index.html
    }),

    new CopyPlugin({
      patterns: [
        {
          from: "static",
        },
      ],
    }),
  ],
};
