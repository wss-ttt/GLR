var express = require('express');
var app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json());

// 异常评估范围接口
app.post('/change', function (req, res) {
  res.json({
    code: 0,
    msg: 'ok',
    data: {
      xAxis: [
        '0-10',
        '11-20',
        '21-30',
        '31-40',
        '41-50',
        '51-60',
        '61-70',
        '71-80',
        '81-90',
        '91-100'
      ],
      seriesData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  })
})

// 开始分析
app.post('/analysis', function(res, res) {
  res.json({
    code: 0,
    msg: 'ok',
    data: {
      status: 0, // 0: 表示分析失败(异常) 1: 表示正常(成功)
      prompt: '分析异常....' // 提示语
    }
  })
})

app.listen(3001, function () {
  console.log('端口号3001 服务启动成功 哈哈');
})