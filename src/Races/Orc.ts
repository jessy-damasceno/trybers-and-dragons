import Race from './Race';

export default class Orc extends Race {
  static instancies = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.instancies += 1;
  }

  static createdRacesInstances(): number {
    return Orc.instancies;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}