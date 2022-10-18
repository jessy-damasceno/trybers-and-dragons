import Race from './Race';

export default class Elf extends Race {
  static instancies = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.instancies += 1;
  }

  static createdRacesInstances(): number {
    return Elf.instancies;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}