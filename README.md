# frontend
## Dependencies

- less : reduce the complex when write css[http://lesscss.cn/features/]
- Vue [https://cn.vuejs.org/v2/guide/]
- Vue-Cli: build project quickly [https://cli.vuejs.org/zh/guide/]
- Vue Router: execute jump between pages [https://router.vuejs.org/zh/installation.html]
- Element-UI: UI [https://element.eleme.io/#/zh-CN/component/layout]
- Font Awesome: font and icon
- bootstrap [https://v3.bootcss.com/components/]

## problems:
1. foreach cannot control to break the loop unless you try an inception and catch the error. 
Hence, in this case we use for...of... [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of]
2. cors problem, add a code @CrossOrigin at backend when respond
3. Vue: the attr of a component can not be change directly, like v.module = "x", 
the change of x cannot be capture by the v.module as an attr. we must use this.$set(value, new value) to update it.


  

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
