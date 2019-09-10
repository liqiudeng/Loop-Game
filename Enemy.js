class Enemy {
  update(timeDiff) {
    let direction = this.moveDirection;
    if (
      direction === 0 ||
      direction === 1 ||
      direction === 2 ||
      direction === 5
    ) {
      this.y = this.y + timeDiff * this.speed;
    } else if (this.moveDirection === 3) {
      this.y = this.y + (timeDiff * this.speed) / 2;
      this.x = this.x + (timeDiff * this.speed) / 10;
    } else if (this.moveDirection === 4) {
      this.y = this.y + (timeDiff * this.speed) / 2;
      this.x = this.x - (timeDiff * this.speed) / 10;
    }

    this.domElement.style.top = this.y + "px";
    this.domElement.style.left = this.x + "px";

    if (this.y > GAME_HEIGHT) {
      this.root.removeChild(this.domElement);
      this.destroyed = true;
    }

    if (this.x > GAME_WIDTH || this.x < -ENEMY_WIDTH) {
      this.root.removeChild(this.domElement);
      this.destroyed = true;
    }
  }
  constructor(theRoot, enemySpot) {
    console.log(theRoot);
    this.moveDirection = Math.floor(Math.random() * 6);
    this.root = theRoot;
    this.spot = enemySpot;
    this.x = enemySpot * ENEMY_WIDTH;
    this.y = -ENEMY_HEIGHT;
    this.type = "enemy";
    this.destroyed = false;
    this.domElement = document.createElement("img");
    this.domElement.src = "images/enemy.png";
    this.domElement.style.position = "absolute";

    this.domElement.style.left = this.x + 400 + "px";
    this.domElement.style.top = this.y + "px";
    this.domElement.style.zIndex = 10;
    theRoot.appendChild(this.domElement);
    this.speed = Math.random() / 2 + 0.25;
  }
}
