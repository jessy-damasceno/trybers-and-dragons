import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  public player1: Fighter;
  public player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this.player1 = player1;
    this.player2 = player2;
  }

  fight(): number {
    while (this.player1.lifePoints > 1 && this.player2.lifePoints > 1) {
      this.player1.attack(this.player2);
      this.player1.receiveDamage(this.player2.strength);
    }

    return super.fight();
  }
}