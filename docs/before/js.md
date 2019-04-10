# js 常识

## 1:JavaScript 中 undefined 和 not defined 的区别

JavaScript 未声明变量直接使用会抛出异常：var name is not defined，如果没有处理异常，代码就停止运行了。
但是，使用typeof undeclared_variable并不会产生异常，会直接返回 undefined。

```js
var x; // 声明 x
console.log(x); //output: undefined 
```

```js
console.log(typeof y); //output: undefined
```

```js
console.log(z); // 抛出异常: ReferenceError: z is not defined
```