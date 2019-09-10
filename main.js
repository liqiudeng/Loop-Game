let gameEngine = new Engine(document.getElementById("app"));
let bgmusic = document.getElementById("audioPlayer");
let collision = document.getElementById("collision");
let yummy = document.getElementById("yummy");
let keydownHandler = event => {
  if (event.code === "ArrowLeft") {
    gameEngine.player.moveLeft();
  }
  if (event.code === "ArrowRight") {
    gameEngine.player.moveRight();
  }
  if (event.code === "ArrowUp") {
    gameEngine.player.moveUp();
  }
  if (event.code === "ArrowDown") {
    gameEngine.player.moveDown();
  }
};
document.addEventListener("keydown", keydownHandler);
gameEngine.gameLoop();
