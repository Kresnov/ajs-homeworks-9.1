import Demon from '../demon.js';
import Magician from '../magician.js';

test('Маг атакует без дебаффа, расстояние 1', () => {
  const magician = new Magician('Alex');
  magician.distance = 1;
  const received = magician.attack;
  const expected = 100;
  expect(received).toBe(expected);
});

test('Маг атакует с дебаффом, расстояние 2', () => {
  const magician = new Magician('Alex2');
  magician.distance = 2;
  magician.debuff = true;
  const received = magician.attack;
  const expected = 85;
  expect(received).toBe(expected);
});

test('Демон атакует без дебаффа, расстояние 1', () => {
  const demon = new Demon('Barry');
  demon.distance = 2;
  const received = demon.attack;
  const expected = 90;
  expect(received).toBe(expected);
});

test('Демон атакует с дебаффом, расстояние 2м', () => {
  const demon = new Demon('Barry2');
  demon.distance = 2;
  demon.debuff = true;
  const received = demon.attack;
  const expected = 85;
  expect(received).toBe(expected);
});