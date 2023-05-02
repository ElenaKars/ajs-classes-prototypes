import Bowman from '../class/Bowman';

describe('Bowman', () => {
  it('should create a new bowman with correct parameters', () => {
    const bowman = new Bowman('John');

    expect(bowman.name).toBe('John');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.health).toBe(100);
    expect(bowman.level).toBe(1);
    expect(bowman.attack).toBe(25);
    expect(bowman.defense).toBe(25);
  });

  it('should throw an error with incorrect name', () => {
    expect(() => new Bowman('J')).toThrowError('Некорректное имя или тип персонажа');
  });

  it('should inherit properties and methods from Character', () => {
    const bowman = new Bowman('John');
    expect(bowman.damage).toBeDefined();
  });
});