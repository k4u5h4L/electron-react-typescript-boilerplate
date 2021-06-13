module.exports = {
    /**
     * This is the main entry point for your application, it's the first file
     * that runs in the main process.
     */
    entry: "./src/index.ts",
    // Put your normal webpack config below here
    module: {
        rules: require("./webpack.rules"),
    },
    resolve: {
        extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
    },
};

// module.exports = {
//   plugins: [
//     ['@electron-forge/plugin-webpack', {
//       mainConfig: './webpack.main.config.js',
//       renderer: {
//         config: './webpack.renderer.config.js',
//         entryPoints: [{
//           html: './src/renderer/index.html',
//           js: './src/renderer/index.js',
//           name: 'main_window'
//         }]
//       }
//     }]
//   ]
// }
