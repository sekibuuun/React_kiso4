/** ↓ エディタで補完を効かせるための JSDoc */
/** @type {import('webpack').Configuration} */

const path = require("path");

const isDev = process.env.NODE_ENV === "development";

const config = {
    devtool: "source-map",
    module: {
        rules: [
            {
                // 拡張子 js のファイル（正規表現）
                test: /\.tsx$/,
                // ローダーの指定
                loader: "babel-loader",
            },
            {
                // 拡張子 css のファイル（正規表現）
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                // 画像やフォントファイル
                test: /\.(ico|png|svg|ttf|otf|eot|woff?2?)$/,
                type: "asset",
            },
        ],
    },
    devServer: {
        static: {
          directory: "./dist",
        },
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
    },
    entry: "./src/index.tsx",
    output: {
        assetModuleFilename: "images/[name][ext]",
    },
};

// 設定を CommnJS 形式でエクスポート
module.exports = config;