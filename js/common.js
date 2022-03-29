// 页头
(function () {
  if (location.pathname === '/') {
    var pathname = 'index';
  } else {
    var pathname = location.pathname.slice(1, -5);
  }

  var html = `
  <!-- 头部 -->
  <header>
    <div class="wrap leayer clearfix">
      <div class="fl">
        <span>您好，欢迎访问</span><h1><a href="/">晋中釜源节能科技有限公司</a></h1>
      </div>
      <div class="fr">
        <span>联系电话：</span><a href="tel:13834860003">138 3486 0003</a>
      </div>
    </div>
  </header>

  <!-- 导航 -->
  <div class="navigation-bar">
    <nav class="wrap leayer">
      <div class="logo fl">
        <img src="./img/logo2.png" alt="晋中釜源科技logo">
      </div>
      <ul class="nav fr">
        <li><a href="./index.html" data-href="index">网站首页</a></li>
        <li>产品中心
          <ul>
            <li><a href="./product.html" data-href="product">产品中心</a></li>
            <li><a href="./system.html" data-href="system">集控系统</a></li>
          </ul>
        </li>
        <li><a href="./news.html" data-href="news">新闻资讯</a></li>
        <li><a href="./case.html" data-href="case">客户案例</a></li>
        <li><a href="./space.html" data-href="space">环境展示</a></li>
        <li><a href="./recruit.html" data-href="recruit">人才招聘</a></li>
        <li><a href="./about.html" data-href="about">关于我们</a></li>
      </ul>
      <i class="close iconfont">&#xe61f;</i>
    </nav>
    <ul class="mask">
      <li><a href="./index.html" data-href="index">网站首页</a></li>
      <li><a href="./product.html" data-href="product">产品中心</a></li>
      <li><a href="./system.html" data-href="system">集控系统</a></li>
      <li><a href="./news.html" data-href="news">新闻资讯</a></li>
      <li><a href="./case.html" data-href="case">客户案例</a></li>
      <li><a href="./space.html" data-href="space">环境展示</a></li>
      <li><a href="./recruit.html" data-href="recruit">人才招聘</a></li>
      <li><a href="./about.html" data-href="about">关于我们</a></li>
      <i class="close iconfont">&#xe61a;</i>
    </ul>
  </div>
  `;
  $('body').prepend(html);
  
  if ($(`.navigation-bar .nav a[data-href=${pathname}]`)) {
    $(`.navigation-bar .nav a[data-href=${pathname}]`).parent('li').prop('class', 'active');
  }
  if ($(`.navigation-bar .mask a[data-href=${pathname}]`)) {
    $(`.navigation-bar .mask a[data-href=${pathname}]`).parent('li').prop('class', 'active');
  }
})();

// 页尾
(function (){
  var html =  `
  <!-- 尾部 -->
  <footer class="footer">
    <ul class="wrap leayer clearfix">
      <li>
        <span class="title">关于我们</span>
        <ul>
          <li><a href="./about.html#1">企业简介</a></li>
          <li><a href="./space.html">环境展示</a></li>
          <li><a href="./case.html">客户案例</a></li>
          <li><a href="./about.html#2">联系我们</a></li>
        </ul>
      </li>
      <li>
        <span class="title">快捷通道</span>
        <ul>
          <!-- <li><a href="./ally.html">合作加盟</a></li> -->
          <li><a href="./recruit.html">人才招聘</a></li>
          <li><a href="./news.html">媒体报道</a></li>
          <li><a href="https://shop3479q79995898.1688.com/" target="block">1688店铺</a></li>
        </ul>
      </li>
      <li>
        <span class="title">产品分类</span>
        <ul>
          <li><a href="./product-article.html?tag=reshuilu1">变频电磁采暖炉</a></li>
          <li><a href="./product-article.html?tag=zhengqi1">电蒸汽发生器</a></li>
          <li><a href="./product-article.html?tag=kongyaji1">空压机余热回收</a></li>
          <li><a href="./product-article.html?tag=refenglu1">变频电磁热风炉</a></li>
        </ul>
      </li>
      <li>
        <div class="consult">
          <h3><i class="iconfont">&#xe61b;</i> <span>联系电话：</span><a href="tel:13834860003">138 3486 0003</a></h3>
          <h3><i class="iconfont">&#xe683;</i> <span>服务热线：</span><a href="tel:03543070303">0354-3070303</a></h3>
          <p><i class="iconfont">&#xe604;</i> <span>邮箱：</span>fuyuankeji888@163.com</p>
          <p><i class="iconfont">&#xe628;</i> <span>公司地址：</span>山西综改示范区晋中开发区汇通产业园</p>
          <p><i class="iconfont">&#xe735;</i> <span>公众号：</span>
            <img src="./img/qr.jpg" alt="釜源锅炉_公众号二维码">
          </p>
        </div>
      </li>
      <li class="copyright">
        <p><span>备案号：</span>晋ICP备17008872号</p>
        <p><span>版权所有：</span>晋中釜源节能科技有限公司</p>
        <p><span>技术支持：</span>晋中釜源节能科技</p>
      </li>
    </ul>
  </footer>
  `;
  $('body').append(html);
})();

// 导航栏
(function () {
  $('.navigation-bar .wrap .close').on('click', function () {
    $('.navigation-bar .mask').addClass('active');
  })
  $('.navigation-bar .mask').on('click', function () {
    $(this).removeClass('active')
  })
})();

// 轮播图
(function () {
  var len = $('.loop-replace-img .imgs li').length,  // 获取图片数量
      offsetW = document.body.offsetWidth,  // 视口宽
      spots = '',  // 创建小圆点
      index = 0,  // 图片索引
      timer = null;  // 定时器

  $('.loop-replace-img .imgs').css({ width: offsetW * len + 'px' })
                              .find('li').css({ width: 100 / len + '%' });

  for (var i = 0; i < len; i++) {
    spots += '<li></li>'
  }
  $('.loop-replace-img .spots').html(spots).find('li').eq(index).addClass('active');

  // 左右轮播
  $('.loop-replace-img .btn-r').on('click', function () {
    play(1);
  })
  $('.loop-replace-img .btn-l').on('click', function () {
    play(-1);
  })

  // 点击小圆点
  $('.loop-replace-img .spots').on('click', 'li', function (e) {
    var num = $(e.target).index();
    $('.loop-replace-img .imgs').css({
      transform: `translateX(-${offsetW * num}px)`
    })
    $('.loop-replace-img .spots li').removeClass('active');
    $('.loop-replace-img .spots li').eq(num).addClass('active');
  });

  /**
   * 下一张图片 | 上一张图片
   * @param {*} num 为正是向左移动，为负时向右移动
   */
  function play (num) {
    newNum = num || 1;
    newNum === 1 ? index += 1 : index -= 1;
    if (index >= len) {
      index = 0;
    } else if (index < 0) {
      index = 2
    }
    $('.loop-replace-img .imgs').css({
      transform: `translateX(-${offsetW * index}px)`
    })
    $('.loop-replace-img .spots li').removeClass('active');
    $('.loop-replace-img .spots li').eq(index).addClass('active');
  }

  timer = setInterval(function () {
    play();
  }, 4000);

  $('.loop-replace-img').on('mousemove', function () {
    clearInterval(timer);
    timer = null;
  }).on('mouseout', function () {
    // console.log(456789)
    timer = setInterval(function () {
      play(1);
    }, 4000);
  });
})();

// markdown 解析
function interpretMd (str) {
  if (/\u6700/g.test(str)) {
    str = str.replace(/\u6700(.{0,1})/g, '***');
  }
  let arr = str.split(['\n']);
  let n = 0;
  for (const prop in arr) {
    // console.log(prop)
    let item = arr[prop], num = undefined;

    // 多级标题
    if (/^#/.test(item)) {
      if (/^#\s/.test(item)) {
        arr[prop] = `<h1 id='title'>${item.slice(2, num)}</h1>`;
      }
      /^##\s/.test(item) && (arr[prop] = `<h2>${item.slice(3, num)}</h2>`);
      /^###\s/.test(item) && (arr[prop] = `<h3>${item.slice(4, num)}</h3>`);
      /^####\s/.test(item) && (arr[prop] = `<h4>${item.slice(5, num)}</h4>`);
      /^#####\s/.test(item) && (arr[prop] = `<h5>${item.slice(6, num)}</h5>`);
      /^######\s/.test(item) && (arr[prop] = `<h6>${item.slice(7, num)}</h6>`);
    }

    // 分割线
    /^-{4}/.test(item) && (arr[prop] = '<hr>');
    
    // 普通文本，匹配汉字
    if (/^[0-\u9FA5]/.test(item)) {
      arr[prop] = `<p>${item.slice(0, num)}<p>`
    }
    
    // 引用
    /^>\s/.test(item) && (arr[prop] = `<blockquote class='notes'>${item.slice(2, num)}</blockquote>`);
    
    // 超链接
    if (/\[\s/.test(item)) {
      let link = item.match(/]\(.{0}/);
      // console.log(link[0].slice(2, -1))
      arr[prop] = item.replace(/\[\s/, `<a href="${link[0].slice(2, -1)}">`).replace(/\]\(.{0}/, '</a>');
    }

    // 引入图片
    if (/^!\[\s/.test(item)) {
      let link = item.match(/]\(.{0,1000}/);
      // console.log(link[0].slice(2, -1))
      // console.log(link[0].slice(2, -1))
      arr[prop] = item.replace(/!\[\s/, `<div class="img-block"><img src="${link[0].slice(2, -1)}"`).replace(/\]\(.{0,1000}/, '/></div>');
    }

    // 无序列表
    if (/^-\s/.test(item)) {
      arr[prop] = `<li>${item.slice(2, num)}</li>`;  // 一级
    }
    if (/^\s{4}-\s/.test(item)) {
      arr[prop] = `<li class='list2'>${item.slice(6, num)}</li>`;  // 二级
    }
    if (/^\s{8}-\s/.test(item)) {
      arr[prop] = `<li class='list3'>${item.slice(10, num)}</li>`;  // 三级
    }

    // 有序列表
    if (/^\d\.\s/.test(item)) {
      arr[prop] = `<li class='order order1'>${item.slice(0, num)}</li>`;  // 一级
    }
    if (/^\s{4}\d{0,2}\.\d{0,2}\s/.test(item)) {
      arr[prop] = `<li class='order order2'>${item.slice(4, num)}</li>`;  // 二级
    }
    if (/^\s{8}\d{0,2}\.\d{0,2}\.\d{0,2}\s/.test(item)) {
      arr[prop] = `<li class='order order3'>${item.slice(8, num)}</li>`;  // 三级
    }

  }
  // console.log(arr)
  return `<div class='markdown-preview'>${arr.join('')}</div>`;
}