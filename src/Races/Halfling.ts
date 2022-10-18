import Race from './Race';

export default class Halfling extends Race {
  static instancies = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.instancies += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.instancies;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}