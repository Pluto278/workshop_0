# workshop_0
link:https://pluto278.github.io/workshop_0

# tasks
- Following the workshop video and learning basic coding techniques
- From that experimented with making a p5.js sketch using 2D primitive shapes, variables, and conditionals
- Embed a triangle into a circle and create an eight-pointed star in the center of the canvas
- Playing with using variables and conditionals to animate movement

# Notes

## 1. Embed a triangle into a circle

Form a new figure by embedding a triangle into a circle and make it move.
First of all, it is necessary to embed the triangle into the circle.
Ask deepseek.
Deepseek gives an answer, using "beginShape" and "vertex" to draw an equilateral triangle inside the circle.
```
  beginShape();
  for (let i = 0; i < 3; i++) {
    let angle = TWO_PI / 3 * i - PI/2; // 计算顶点角度
    let tx = x + r * cos(angle); // 计算顶点 x 坐标
    let ty = y + r * sin(angle); // 计算顶点 y 坐标
    vertex(tx, ty); // 添加顶点
  }
  endShape(CLOSE);
```
Then give the initial position and speed to make this new figure move.
```
  //更新速度
  x = x + vx;
  y = y + vy;
  //反弹
  if (x <= r || x >= width - r)
    vx = -vx;
  if (y <= r || y >= height - r)
    vy = -vy;
```

## 2. Generate a rotating eight - pointed star

Overlap two squares to get an eight - pointed star, use "noStroke" and color it to make it a little more beautiful.
```
  fill('red');
  noStroke();
  beginShape();
  for(let i = 0; i < 4; i++) {
    let angle = PI/2 + PI/2 * i + count;
    let sx = 300 + 100 * cos(angle);
    let sy = 300 + 100 * sin(angle);
    vertex(sx,sy);
  }
  endShape(CLOSE);

  beginShape();
  for(let i = 0; i < 4; i++) {
    let angle = PI/4 + PI/2 * i + count;
    let sx = 300 + 100 * cos(angle);
    let sy = 300 + 100 * sin(angle);
    vertex(sx,sy);
  }
  endShape(CLOSE);

  count+=PI/360;
```
Add a variable "count", make it increase by 1 degree each time "draw" is executed, and use this variable to make the eight - pointed star rotate.
