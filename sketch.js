let x,y;
let r;
let vx,vy;
let count;

function setup() {
  createCanvas(600,600);
  background(220);

  x = 200;
  y = 200;
  r = 50;
  vx = 1;
  vy = 2;
  count = 0;
}

function draw() {
  background(220);
  
  //更新速度
  x = x + vx;
  y = y + vy;
  //反弹
  if (x <= r || x >= width - r)
    vx = -vx;
  if (y <= r || y >= height - r)
    vy = -vy;

  fill(255);
  stroke(0);
  circle(x,y,2*r);

  if(count==PI)
    count = 0;

  beginShape();
  for (let i = 0; i < 3; i++) {
    let angle = TWO_PI / 3 * i - PI/2; // 计算顶点角度
    let tx = x + r * cos(angle); // 计算顶点 x 坐标
    let ty = y + r * sin(angle); // 计算顶点 y 坐标
    vertex(tx, ty); // 添加顶点
  }
  endShape(CLOSE);

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
}
