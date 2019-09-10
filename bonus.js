class Bonus extends Enemy {
  constructor(theRoot, enemySpot) {
    super(theRoot, enemySpot);
    this.domElement.src = "images/bonus.png";
    this.type = "bonus";
    this.moveDirection = 5;
  }
}
