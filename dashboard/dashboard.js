/* dashboard.js */
// 绘制仪表盘
function paintBoard(canvas, context, board) {
  /* 0. 保存状态 */
  context.save();
  /* 1. 定义配置变量 */
  let boardR = board.getRadius();
  let r2 = boardR / 10.0;
  let border = board.getBoder();
  let offset = 20;
  /* 2. 有抗锯齿吗？ */

  /* 3. 重映射 canvas 的原点 */
  context.translate(boardR + offset, boardR + offset);
  /* 4. 仪表盘的边框 */
  // 渐变效果
  context.beginPath();
  let LGradient1 = context.createLinearGradient(-boardR, -boardR, boardR, boardR);
  LGradient1.addColorStop(0, "#333333");
  LGradient1.addColorStop(0.5, "#FFFFFF");
  LGradient1.addColorStop(1, "#000000");
  context.lineWidth = border;  // 线宽
  // console.log(border);
  context.strokeStyle = LGradient1;
  // 绘制圆弧
  context.arc(0, 0, boardR, 0, 2 * Math.PI, true);
  context.stroke();
  context.translate(0, 0);
  context.closePath();
  /* 5. 绘制背景 */
  context.beginPath();
  let LGradient2 = context.createLinearGradient(-boardR, -boardR, boardR, boardR);
  LGradient2.addColorStop(0, "#556677");
  LGradient2.addColorStop(0.5, "#223344");
  LGradient2.addColorStop(1, "#000000");
  context.lineWidth = boardR;
  context.strokeStyle = LGradient2;
  context.arc(0, 0, boardR / 2 - 8, 0, 2 * Math.PI, true);
  context.stroke();
  context.closePath();
  /* 6. 绘制刻度线 */
  context.strokeStyle = "cyan";
  let number = 101; // 要绘制的刻度线的总数
  let angle = 270.0 / (number - 1.0); // 每个刻度线的夹角
  let lineStart = -boardR + border / 2;
  context.rotate(degreeToRadians(-45));

  for (let index = 0; index < number; index++) {
    if (index % 10 == 0) {
      context.lineWidth = 3;
      drawLine(lineStart, 0, lineStart + 40, 0, context);
    } else if (index % 5 == 0) {
      context.lineWidth = 2;
      drawLine(lineStart, 0, lineStart + 35, 0, context);
    } else {
      context.lineWidth = 2;
      drawLine(lineStart, 0, lineStart + 30, 0, context);
    }
    drawLine(lineStart, 0, lineStart + 30, 0, context);   // 在 x 轴上画线
    context.rotate(degreeToRadians(angle));  // 顺时针旋转
  }
  /* 7. 绘制刻度数值 */
  let distance = boardR - 60;
  let graduationOffset = 3;
  // 数字整体旋转
  context.rotate(degreeToRadians(180 - graduationOffset));
  context.font = r2 / 1.5 + "px sans-serif";
  context.fillStyle = "#FFFFFF";
  context.textAlign = "center";
  for (let index = 0; index < 11; index++) {
    context.translate(0, distance)
    context.rotate(degreeToRadians(-(45 + angle * 10 * index)));
    // 画数字，数字整体偏移
    let text = index * (board.getInterval()) / 10 + board.minValue;
    context.fillText(text, 0, graduationOffset);
    context.rotate(degreeToRadians(45 + angle * 10 * index));
    context.translate(0, -distance)
    context.rotate(degreeToRadians(angle * 10));
  }
  // 绘制指针的准备工作
  let pointerWidth = r2 / 4.0;
  let pointerPoints = [];
  pointerPoints[0] = [0, distance + border];
  pointerPoints[1] = [-pointerWidth, 0];
  pointerPoints[2] = [0, -r2 * 2];
  pointerPoints[3] = [pointerWidth, 0];
  let lastValue = board.getValue();
  let currentRadians = angle * 100 * (lastValue - board.minValue) / (board.getInterval())
  // 使指针指到 0
  context.rotate(degreeToRadians(63.4));
  context.rotate(degreeToRadians(currentRadians));
  /* 8. 绘制指针 */
  context.lineWidth = 2;
  context.fillStyle = "orangered";
  context.strokeStyle = "#FFFFFF";
  drawPointer(context, pointerPoints);
  /* 9. 绘制中心圆点 */
  let LGradient3 = context.createLinearGradient(-r2, -r2, r2, r2);
  LGradient3.addColorStop(0, "#FFFFFF");
  LGradient3.addColorStop(1, "#000000");
  context.lineWidth = r2;  // 线宽
  context.fillStyle = LGradient3;
  context.beginPath();
  context.arc(0, 0, r2, 0, 2 * Math.PI, true);
  context.closePath();
  context.fill()
  /* 10. 绘制表盘名称 */
  context.rotate(degreeToRadians(-currentRadians));
  context.rotate(degreeToRadians(-45));
  context.fillStyle = "white";
  context.font = r2 + "px bold 微软雅黑";
  context.fillText(board.getName(), graduationOffset, distance - border);
  /* 11. 绘制表盘度数和单位 */
  let unit = board.unit;
  context.fillStyle = "red";
  context.font = r2 + "px sans-serif";
  context.fillText(board.getValue() + " " + unit, graduationOffset, distance + border);
  /* 12. 恢复状态 */
  context.restore();
}

// 画指针
function drawPointer(context, pointerPoints) {
  drawConvexPolygon(pointerPoints, context);
  context.fill();
  context.stroke();
}

// 画线
function drawLine(x0, y0, x, y, context) {
  context.beginPath();
  context.moveTo(x0, y0)
  context.lineTo(x, y);
  context.stroke();
  context.closePath();
}

// 画多边形
function drawConvexPolygon(points, context) {
  context.beginPath();
  for (let index = 0; index < points.length; index++) {
    context.lineTo(points[index][0], points[index][1])
  }
  context.closePath();
}

