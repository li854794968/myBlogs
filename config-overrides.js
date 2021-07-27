const {
    override,
    fixBabelImports,
    // addLessLoader,
    // adjustStyleLoaders
} = require("customize-cra");


module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd", libraryDirectory: "es", style: 'css' // change importing css to less
    }),
    // adjustStyleLoaders(rule => {  //动态引入scss
    //     if (rule.test.toString().includes("scss")) {
    //       rule.use.push({
    //         loader: require.resolve("sass-resources-loader"),
    //         options: {
    //           resources: "./src/assets/scss/common.scss" //这里是你自己放公共scss变量的路径
    //         }
    //       });
    //     }
    //   })
    // addLessLoader({
    //   javascriptEnabled: true,
    //   modifyVars: { "@primary-color": "#1DA57A" }
    // })

);
