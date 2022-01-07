// function setup(){
//   createCanvas(windowWidth, windowHeight);
//   background(100);
// }
let x = 300;
let y = 200;
// direction
let dx = 0;
let dy = 1;
let b_x = 300;
let b_y = 100;
let camera_x = 0;
let camera_y = 0;

function setup(){
  createCanvas(600, 400);
}

function draw(){
  background(30);
  dy = dy + 1;
  x = x + dx;
  y = y + dy;
  if(y>370){
    y = 370;
  }
  let hit = isHit(x, y, 30, 30, b_x, b_y, 100, 20);
  if(hit == 1){
    dy = -40;
  }
  camera_y = y - 300;
  // 色を決める
  fill(255);
  // 四角形を表示
  rect(x - camera_x, y - camera_y, 30, 30);
  fill(0, 255, 0);
  rect(b_x - camera_x, b_y -camera_y, 100, 20);
}


function keyPressed(){
  // キーが上矢印の時
  if(keyCode == UP_ARROW){
    dy = -30;
  }
  if(keyCode == LEFT_ARROW){
    dx = -10;
  }
  if(keyCode == RIGHT_ARROW){
    dx = 10;
  }
}

// 当たり判定
// p:プレイヤー
// e:相手（壁）
function isHit(px, py, pw, ph, ex, ey, ew, eh){
  if(pw < ex + ew && px +pw > ex){
    if(py <ey + eh && py + ph > ey){
      return 1;
    }
  }
  return 0;
}