import Zombie from '../class/Zombie';

describe('Zombie', () => {
  it('should create a new zombie with correct parameters', () => {
    const zombie = new Zombie('John');

    expect(zombie.name).toBe('John');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.health).toBe(100);
    expect(zombie.level).toBe(1);
    expect(zombie.attack).toBe(40);
    expect(zombie.defense).toBe(10);
  });

  it('should throw an error with incorrect name', () => {
    expect(() => new Zombie('J')).toThrowError('Некорректное имя или тип персонажа');
  });

  it('should inherit properties and methods from Character', () => {
    const zombie = new Zombie('John');
    expect(zombie.damage).toBeDefined();
  });
});