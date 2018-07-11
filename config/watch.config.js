const defaultConfig = require('@ionic/app-scripts/config/watch.config');
const interfaces = require('@ionic/app-scripts/dist/util/interfaces');

console.log('Using custom watch configuration...');
// console.log(defaultConfig);

defaultConfig.srcFiles.paths[0] = '{{SRC}}/**/*.(ts|html|s(c|a)ss|vue)';

const originalCallback = defaultConfig.srcFiles.callback;

defaultConfig.srcFiles.callback = (event, filePath, context) => {
    if (filePath.indexOf('.vue') !== -1) {
        context.transpileState = interfaces.BuildState.RequiresUpdate;
    }

    return originalCallback(event, filePath, context);
};

module.exports = {
    srcFiles: defaultConfig.srcFiles,
    copyConfig: defaultConfig.copyConfig,
};
