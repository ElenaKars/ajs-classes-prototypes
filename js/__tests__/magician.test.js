import Magician from '../class/Magician';

describe('Magician', () => {
  it('should create a new magician with correct parameters', () => {
    const magician = new Magician('John');

    const expected = {
      attack: 10,
      defense: 40,
      health: 100, 
      level: 1,
      name: 'John',
      type: 'Magician',
    }
    expect(magician).toEqual(expected);
  });

  it('should throw an error with incorrect name', () => {
    expect(() => new Magician('J')).toThrowError();
  });

  it('should inherit properties and methods from Character', () => {
    const magician = new Magician('John');
    expect(magician.damage).toBeDefined();
  });
});