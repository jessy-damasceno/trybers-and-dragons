import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static instancies = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.instancies += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instancies;
  }

  get energyType(): EnergyType { return this._energyType; }
}