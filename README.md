# frontend
## Dependencies

- less : reduce the complex when write css[http://lesscss.cn/features/]
- Vue [https://cn.vuejs.org/v2/guide/]
- Vue-Cli: build project quickly [https://cli.vuejs.org/zh/guide/]
- Vue Router: execute jump between pages [https://router.vuejs.org/zh/installation.html]
- Element-UI: UI [https://element.eleme.io/#/zh-CN/component/layout]
- Font Awesome: font and icon
- bootstrap [https://v3.bootcss.com/components/]

## 遮罩层
1。 写一个遮罩层，卡片显示在中间，背后全是灰色的半透明界面
    遮罩层如何盖住这个home界面，并且后面的内容都无法点击
2。 通过v-show 来控制这个componenet是否显示
3。 script data() funciton 里写数据逻辑。把你点击到的事件标题和事件时间传递给子组件


  

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
