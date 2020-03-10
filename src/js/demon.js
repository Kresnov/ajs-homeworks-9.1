import Character from './character.js';

export default class Demon extends Character {
  constructor(name) {
    super(name);
    this.type = 'Demon';
  }
}
