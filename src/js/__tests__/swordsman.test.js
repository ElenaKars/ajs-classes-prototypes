import Swordsman from '../class/Swordsman';

describe('Swordsman', () => {
  it('should create a new swordsman with correct parameters', () => {
    const swordsman = new Swordsman('John');

    expect(swordsman.name).toBe('John');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.health).toBe(100);
    expect(swordsman.level).toBe(1);
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defense).toBe(10);
  });

  it('should throw an error with incorrect name', () => {
    expect(() => new Swordsman('J')).toThrowError('Некорректное имя или тип персонажа');
  });

  it('should inherit properties and methods from Character', () => {
    const swordsman = new Swordsman('John');
    expect(swordsman.damage).toBeDefined();
  });
});