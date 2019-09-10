class quickEnemy extends Enemy {
  constructor(theRoot, enemySpot) {
    super(theRoot, enemySpot);
    this.domElement.src = "images/enemy1.png";
    this.speed = 0.6;
  }
}
