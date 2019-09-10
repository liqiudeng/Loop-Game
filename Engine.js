class Engine {
  gameLoop = () => {
    this.bgmusic = bgmusic;
    this.collision = collision;
    this.yummy = yummy;
    if (new Date().getTime() - Current >= 10000) {
      if (MAX_ENEMIES < 5) MAX_ENEMIES++;
      Current = new Date().getTime();
    }

    if (new Date().getTime() - CurrentTime >= 500) {
      Score++;
      CurrentTime = new Date().getTime();
    }

    if (this.isGetBonus(getBonus)) {
      Score = 50 + Score;
      getBonus = false;
      this.yummy.play();
    }

    document.getElementById("score").remove();
    let root = document.getElementById("app");
    let showBonus = new Text(root, 400, 20);

    if (this.lastFrame === undefined) this.lastFrame = new Date().getTime();
    let timeDiff = new Date().getTime() - this.lastFrame;
    this.lastFrame = new Date().getTime();
    this.enemies.forEach(enemy => {
      enemy.speed = enemy.speed + Score / 100000;
      enemy.update(timeDiff);
    });
    this.enemies = this.enemies.filter(enemy => {
      return !enemy.destroyed;
    });
    while (this.enemies.length < MAX_ENEMIES) {
      let enemyType = Math.floor(Math.random() * 4);
      let spot = nextEnemySpot(this.enemies);
      if (enemyType == 0) this.enemies.push(new quickEnemy(this.root, spot));
      else if (enemyType == 1 || enemyType == 2)
        this.enemies.push(new slowEnemy(this.root, spot));
      else this.enemies.push(new Bonus(this.root, spot));
      //this.enemies.push(new Enemy(this.root, spot));
    }

    if (this.isPlayerDead()) {
      this.bgmusic.pause();
      this.collision.play();
      document.removeEventListener.window.alert("game over");
      return;
    }

    setTimeout(this.gameLoop, 20);
  };
  //get the bonus
  isGetBonus = getBonus => {
    for (let i = 0; i < MAX_ENEMIES; i++) {
      if (
        this.enemies[i] !== undefined &&
        this.enemies[i].type == "bonus" &&
        this.enemies[i].x == this.player.x &&
        this.enemies[i].y + ENEMY_HEIGHT >= this.player.y &&
        this.player.y >= this.enemies[i].y &&
        this.enemies[i].y <= this.player.y + PLAYER_WIDTH
      ) {
        this.enemies[i].y = GAME_HEIGHT;
        getBonus = true;
      }
    }
    return getBonus;
  };
  //collision;
  isPlayerDead = () => {
    for (let i = 0; i < MAX_ENEMIES; i++) {
      if (
        this.enemies[i] !== undefined &&
        this.enemies[i].type !== "bonus" &&
        this.enemies[i].x == this.player.x &&
        this.enemies[i].y + ENEMY_HEIGHT >= this.player.y &&
        this.player.y >= this.enemies[i].y &&
        this.enemies[i].y <= this.player.y + PLAYER_WIDTH
      ) {
        //console.log(this.enemies[i].y + ":" + this.player.y);
        return true;
      }
      if (
        this.enemies[i].x + ENEMY_WIDTH >= this.player.x &&
        this.enemies[i].x + ENEMY_WIDTH < this.player.x + PLAYER_WIDTH &&
        this.enemies[i].y + ENEMY_HEIGHT >=
          this.player.y + PLAYER_HEIGHT + 20 &&
        this.enemies[i].y < this.player.y + PLAYER_HEIGHT &&
        this.enemies[i].moveDirection == 4
      ) {
        console.log(this.enemies[i].y + ENEMY_HEIGHT);
        return true;
      }
      if (
        this.enemies[i].x <= this.player.x + PLAYER_WIDTH &&
        this.enemies[i].x + ENEMY_WIDTH > this.player.x &&
        this.enemies[i].y + ENEMY_HEIGHT >=
          this.player.y + PLAYER_HEIGHT + 20 &&
        this.enemies[i].y < this.player.y + PLAYER_HEIGHT &&
        this.enemies[i].moveDirection == 3
      ) {
        console.log(this.enemies[i].y + ENEMY_HEIGHT);
        return true;
      }
    }
    return false;
  };
  constructor(theRoot) {
    this.root = theRoot;
    this.player = new Player(this.root);
    this.enemies = [];
    addBackground(this.root);
  }
}
