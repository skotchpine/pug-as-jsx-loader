const babylon = require('babylon');
const recast = require('recast');

const parseTsx = source => babylon.parse(source, {
  sourceType: 'module',
  plugins: [
    'typescript',
    'asyncFunctions', 
    'asyncGenerators', 
    'bigInt', 
    'classConstructorCall', 
    'classPrivateProperties', 
    'classProperties', 
    'decorators', 
    'doExpressions', 
    'dynamicImport', 
    'estree', 
    'exponentiationOperator', 
    'exportExtensions', 
    'functionBind', 
    'functionSent', 
    'importMeta', 
    'jsx', 
    'numericSeparator', 
    'objectRestSpread', 
    'optionalCatchBinding', 
    'optionalChaining', 
    'trailingFunctionCommas', 
  ],
});

const getSource = (source, file) => {
  const fileExt = file.split('.').pop();
  if (fileExt === 'ts' || fileExt === 'tsx') {
    return recast.parse(source, { parser: { parse: parseTsx } });
  }
  return source;
};

module.exports.getSource = getSource;
