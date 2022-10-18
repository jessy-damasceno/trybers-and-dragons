import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  static instancies = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.instancies += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instancies;
  }

  get energyType(): EnergyType { return this._energyType; }
}