import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Monster from './Monster';

// <<--------------------- players --------------------->>
const player1 = new Character('Dadá Maravilha');
for (let i = 0; i < 10; i += 1) { player1.levelUp(); }

const player2 = new Character('Harden Martins');
const player3 = new Character('Ferguson');

// <<--------------------- monsters --------------------->>
const monster1 = new Monster();
const monster2 = new Monster();

// <<--------------------- battles --------------------->>
const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]): void {
  battles.forEach((battle) => battle.fight());
}

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};
