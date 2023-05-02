import Magician from '../class/Magician';

describe('Magician', () => {
  it('should create a new magician with correct parameters', () => {
    const magician = new Magician('John');

    expect(magician.name).toBe('John');
    expect(magician.type).toBe('Magician');
    expect(magician.health).toBe(100);
    expect(magician.level).toBe(1);
    expect(magician.attack).toBe(10);
    expect(magician.defense).toBe(40);
  });

  it('should throw an error with incorrect name', () => {
    expect(() => new Magician('J')).toThrowError('Некорректное имя или тип персонажа');
  });

  it('should inherit properties and methods from Character', () => {
    const magician = new Magician('John');
    expect(magician.damage).toBeDefined();
  });
});