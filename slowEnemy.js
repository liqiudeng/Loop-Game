class slowEnemy extends Enemy {
  constructor(theRoot, enemySpot) {
    super(theRoot, enemySpot);
    this.domElement.src = "images/enemy2.png";
    this.speed = 0.3;
  }
}
