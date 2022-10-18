import Race from './Race';

export default class Dwarf extends Race {
  static instancies = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.instancies += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.instancies;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}