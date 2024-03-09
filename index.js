// 引入所需的库和模块
const express = require('express');
const bodyParser = require('body-parser');
const AI = require('artificial-intelligence-library');
const SmartSensors = require('smart-sensors-library');

// 创建Express应用程序
const app = express();

// 使用body-parser中间件解析请求体
app.use(bodyParser.json());

// 创建人工智能实例
const ai = new AI();

// 创建智能传感器实例
const sensors = new SmartSensors();

// 处理入侵检测事件
sensors.on('intrusion', (location) => {
  // 发送实时警报通知
  ai.sendAlertNotification(location);
});

// 定义路由处理程序
app.post('/intrusion', (req, res) => {
  const location = req.body.location;

  // 触发入侵检测事件
  sensors.detectIntrusion(location);

  res.status(200).json({ message: 'Intrusion detected.' });
});

// 启动服务器
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
