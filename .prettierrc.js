module.exports = {
  proseWrap: 'always',
  vueIndentScriptAndStyle: false,
  endOfLine: 'auto',
  // 字符串使用单引号
  singleQuote: true,
  // 每行末尾自动添加分号
  semi: true,
  // tab缩进大小,默认为2
  tabWidth: 2,
  // 对象中打印空格 默认true
  // true: { foo: bar }
  // false: {foo: bar}
  bracketSpacing: true,
  // 箭头函数参数括号 默认avoid 可选 avoid| always
  // avoid 能省略括号的时候就省略 例如x => x
  // always 总是有括号
  arrowParens: 'avoid',
  // 换行长度，默认80
  printWidth: 800,
  //禁止随时添加逗号,这个很重要
  trailingComma: 'none',
  "editor.formatOnSave": true,

}
