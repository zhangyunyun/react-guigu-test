const { injectBabelPlugin } = require('react-app-rewired');
module.exports = function override(config, env) {
      config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
      return config;
};

/* const { override, fixBabelImports } = require('customize-cra');

//针对antd实现按需打包
module.exports = override(
   fixBabelImports('import', {
         libraryName: 'antd-mobile',   //库名
         libraryDirectory:'es',  //文件夹名
         style: 'css',  //一个叫css.js的文件
   })
) */