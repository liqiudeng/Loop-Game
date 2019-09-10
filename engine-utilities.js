let nextEnemySpot = enemies => {
  let enemySpots = 5;
  let spotsTaken = [false, false, false, false, false];
  enemies.forEach(enemy => {
    spotsTaken[enemy.spot] = true;
  });
  let candidate = undefined;
  while (candidate === undefined || spotsTaken[candidate]) {
    candidate = Math.floor(Math.random() * enemySpots);
  }
  return candidate;
};
let addBackground = root => {
  let bg = document.createElement("img");
  bg.src = "images/backgroundimage.gif";
  bg.style.position = "absolute";
  bg.style.display = "block";
  //bg.style.left = "400px";

  bg.style.height = GAME_HEIGHT + "px";
  bg.style.width = GAME_WIDTH + "px";
  root.append(bg);

  let whiteBox = document.createElement("bottom");
  whiteBox.style.zIndex = 100;
  whiteBox.style.position = "absolute";
  whiteBox.style.display = "block";
  //whiteBox.style.Left = "400px";

  whiteBox.style.top = GAME_HEIGHT + "px";
  whiteBox.style.height = "450px";
  whiteBox.style.width = "600px";
  whiteBox.style.background = "skyblue";
  root.append(whiteBox);

  let whiteBoxLeft = document.createElement("div");
  whiteBoxLeft.style.zIndex = 100;
  whiteBoxLeft.style.position = "fixed";

  whiteBoxLeft.style.left = "0px";
  whiteBoxLeft.style.height = "850px";
  whiteBoxLeft.style.width = "500px";
  whiteBoxLeft.style.background = "skyblue";

  root.append(whiteBoxLeft);

  let whiteBoxRight = document.createElement("div");
  whiteBoxRight.style.zIndex = 100;
  whiteBoxRight.style.position = "absolute";

  whiteBoxRight.style.left = "450px";
  whiteBoxRight.style.height = "850px";
  whiteBoxRight.style.width = "500px";
  whiteBoxRight.style.background = "skyblue";
  root.append(whiteBoxRight);
};
