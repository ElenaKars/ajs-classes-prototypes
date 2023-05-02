import Undead from '../class/Undead';

describe('Undead', () => {
  it('should create a new undead with correct parameters', () => {
    const undead = new Undead('John');

    expect(undead.name).toBe('John');
    expect(undead.type).toBe('Undead');
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
    expect(undead.attack).toBe(25);
    expect(undead.defense).toBe(25);
  });

  it('should throw an error with incorrect name', () => {
    expect(() => new Undead('J')).toThrowError('Некорректное имя или тип персонажа');
  });

  it('should inherit properties and methods from Character', () => {
    const undead = new Undead('John');
    expect(undead.damage).toBeDefined();
  });
});