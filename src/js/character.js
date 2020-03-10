export default class Character {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.health = 100;
    this.attack = 100;
    this.debuff = false;
  }

  get attack() {
    let attack = (this.attackNew - (this.distance - 1) * 10);
    if (this.debuff) {
      attack -= Math.log2(this.distance) * 5;
    }
    return Math.round(attack);
  }

  set attack(value) {
    this.attackNew = value;
    return this.attack;
  }

  get debuff() {
    return this.debuffNew;
  }

  set debuff(value) {
    if (value) {
      this.debuffNew = true;
    }
  }
}
