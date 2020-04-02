module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    /* 关于 JavaScript 代码中可能的错误或逻辑错误 */
    'no-prototype-builtins': 0, // 禁止直接调用 Object.prototypes 的内置属性

    /* 关于最佳实践 */
    'array-callback-return': 1, // 强制数组方法的回调函数中有 return 语句
    'block-scoped-var': 1, // 强制把变量的使用限制在其定义的作用域范围内
    'dot-notation': 1, // 强制尽可能地使用点号
    'eqeqeq': [1, 'always'], // 要求使用 === 和 !==
    'guard-for-in': 1, // 要求 for-in 循环中有一个 if 语句
    'no-empty-function': 1, // 禁止出现空函数

    /* 关于风格指南 */
    'array-bracket-newline': [1, { multiline: true }], // 在数组开括号后和闭括号前强制换行
    'array-bracket-spacing': [1, 'never'], // 强制数组方括号中使用一致的空格
    'array-element-newline': [1, 'consistent'], // 强制数组元素间出现换行
    'comma-spacing': 1, // 强制在逗号前后使用一致的空格
    'eol-last': 1, // 要求或禁止文件末尾存在空行
    'indent': [1, 2], // 强制使用一致的缩进
    'key-spacing': 1, // 强制在对象字面量的属性中键和值之间使用一致的间距
    'keyword-spacing': 1, // 强制在关键字前后使用一致的空格
    'multiline-ternary': [1, 'always-multiline'], // 要求或禁止在三元操作数中间换行
    'no-lonely-if': 1, // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-multiple-empty-lines': [1, { max: 1, maxEOF: 0, maxBOF: 1 }], // 禁止出现多行空行
    'no-trailing-spaces': 1, // 禁用行尾空格
    'no-unneeded-ternary': 1, // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-whitespace-before-property': 1, // 禁止属性前有空白
    'object-curly-newline': [1, { multiline: true }], // 强制大括号内换行符的一致性
    'object-curly-spacing': [1, 'always'], // 强制在大括号中使用一致的空格
    'object-property-newline': [1, { allowAllPropertiesOnSameLine: true }], // 强制在大括号中使用一致的空格
    'quotes': [1, 'single'], // 强制使用一致的反勾号、双引号或单引号
    'semi': [1, 'always'], // 要求或禁止使用分号代替 ASI
    'semi-spacing': 1, // 强制分号之前和之后使用一致的空格
    'semi-style': 1, // 强制分号的位置
    'space-before-blocks': [1, 'always'], // 强制在块之前使用一致的空格
    'space-before-function-paren': [1, 'always'], // 强制在 function的左括号之前使用一致的空格
    'space-infix-ops': 1, // 要求操作符周围有空格
    'space-unary-ops': 1, // 强制在一元操作符前后使用一致的空格
    'spaced-comment': 1, // 强制在注释中 // 或 /* 使用一致的空格
    'switch-colon-spacing': 1, // 强制在 switch 的冒号左右有空格
    'wrap-regex': 1, // 要求正则表达式被括号括起来

    /* 关于 ES6 */
    'arrow-parens': [1, 'as-needed'], // 要求箭头函数的参数使用圆括号
    'arrow-spacing': 1, // 强制箭头函数的箭头前后使用一致的空格
    'no-confusing-arrow': 1, // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    'no-var': 1, // 要求使用 let 或 const 而不是 var
    'object-shorthand': 1, // 要求或禁止对象字面量中方法和属性使用简写语法
    
    'rest-spread-spacing': 1 // 强制剩余和扩展运算符及其表达式之间有空格
  }
};
