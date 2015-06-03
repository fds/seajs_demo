define(function(require, exports, module) {
    //var $ = require('./jquery');
    var $ = require('jquery');//采用seajs.config alias别名
    var data = require('./data');
    var css = require('./style.css'); //引入css文件 版本<2.30可以直接用，但是之后当作插件使用或者混入seajs才可以
 
    $('.author').html(data.author);
    $('.blog').attr('href', data.blog);


    // 获取文本内容
    var tpl = require('./a.tpl');
    console.log(tpl);

    var json = require('./a.json');
    console.log(json);

    //seajs.importStyle("body { margin: 0 }") //局部插入style样式，需要引入seajs插件


});