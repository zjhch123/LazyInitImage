# LazyInit.js
原生JS实现的图片懒加载组件

## 为什么要造这个轮子

今天上班看见有大佬造了这个轮子，感到很好奇，于是回来自己实现了一遍…要实现不难，但是感觉如果要兼顾各个浏览器(向下兼容到ie8)就比较复杂了…这里是随便做了一个，浏览器的兼容性没有测试…反正2017年03月13日的Chrome是支持的…

## Usage

> 在任意位置引入`js`文件

```html
<script src="LazyInit.js"></script>
```

> 在`body`后面添加标签

```html
<script>
  LazyInit();
</script>
```

<br>

想体验一下？可以访问demo页面[demo](http://139.129.132.196/LazyInit/)
