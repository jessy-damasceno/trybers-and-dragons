import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  public player1: Fighter;
  public enemies: (Fighter | SimpleFighter)[];

  constructor(player1: Fighter, enemies: (Fighter | SimpleFighter)[]) {
    super(player1);
    this.player1 = player1;
    this.enemies = enemies;
  }

  private attackEnemyAlive(
    player: Fighter,
    enemies: (Fighter | SimpleFighter)[],
  ): void {
    for (let i = 0; i < enemies.length; i += 1) {
      if (this.enemies[i].lifePoints > 0) {
        return player.attack(this.enemies[i]);
      }
    }
  }

  fight(): number {
    while (this.player1.lifePoints > 1
      && this.enemies.some((enemy) => enemy.lifePoints > 1)) {
      this.attackEnemyAlive(this.player1, this.enemies);
      this.enemies.forEach((enemy) => {
        if (enemy.lifePoints > 0) { enemy.attack(this.player1); }
      });
    }

    return super.fight();
  }
}