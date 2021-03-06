const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const path =require('path');
function resolve(dir){
    return path.join(__dirname, '.', dir)
}
module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
    config= rewireLess.withLoaderOptions({
        modifyVars:{"@primary-color":"#1DA57A"},
    })(config,env);
    config.resolve.alias = {
        '@': resolve('src')
    }

    return config;
};