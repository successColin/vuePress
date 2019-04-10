# css 入坑篇

## 1、img 标签中的alt 与title的区别

alt 

alt属性的实质作用是在图片无法正确显示时起到文本替代的作用，不过在IE6下还起到了title的作用。

title

鼠标滑过时显示的文字提示。

对SEO优化的影响：

搜索引擎对图片理解是通过alt属性，所以在图片alt属性中包含关键字的简要文字说明，也是页面优化的一部分。

（SEO优化：Search Engine Optimization,中文意译为“搜索引擎优化”。SEO是指通过对网站内部调整优化及站外优化，使网站满足搜索引擎收录排名需求，在搜索引擎中提高关键词排名，从而把精准用户带到网站，获得免费流量，产生直接销售或品牌推广。）

## 2、padding与margin区别：

padding是控件的内容相对控件的边缘的边距，margin是控件边缘相对父控件的边距。

在CSS中margin是指从自身边框到另一个容器边框之间的距离，就是容器外距离。在CSS中padding是指自身边框到自身内部另一个容器边框之间的距离，就是容器内距离。

### 2.1   padding
语法结构：（1）padding：10px;               四边统一内边距

         （2）padding：10px 20px;         上下、左右内边距

         （3）padding：10px 20px 30px;       上、左右、下内边距

         （4）padding：10px 20px 30px 40px;          上、右、下、左内边距

### 2.2    margin

语法结构：（1）margin：10px 20px;            上下、左右外边距

                     （2）margin：10px 20px 30px;       上、左右、下外边距

                     （3）margin：10px 20px 30px 40px;      上、右、下、左外边距

## 3、img标签的垂直居中问题：

img标签在div中垂直居中靠上问题：网上的方法有很多，但是大多有副作用，比如将外部div设为table-cell，那么这个div就是一个table的单元格了，margin就对他失效了，目前，找到的比较适合的方法是：

``` html
<div class="detail_title">
  <img src="./index/img/灯泡_bulb3.svg" alt="">
  <label>如何使用mideo</label>           
</div>
```

``` css
.detail_title{height:4rem;line-height:4rem;vertical-align:middle;padding:0 1rem;}
.detail_title img{width:2rem;height:2rem;vertical-align:middle;}
.detail_title label{font-size:1.8rem;vertical-align:middle;}
```
对于外部div同时设置line-height和vertical-align，里面的标签设置vertical-align。目前还没有发现这个方法的不适用。若有发现，后续更新。

## 4、浮动元素的垂直居中问题：

在想要浮动的元素外面套一层span标签，将浮动元素的float移到span标签上，然后设置span的height和line-height与它父元素的一样。

## 5、使div居中的方式：（cvte校招笔试题）

```html
<div id="root">
  <div id="child" style="width:200px">make me center</div>
</div>
```

```css
#child{
  margin-left: 50%;
  margin-right: 50%;
  width: 0px;
}
```

```css
#child{
  margin-left: auto;
  margin-right: auto;
}
```