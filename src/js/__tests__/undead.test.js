import Undead from '../class/Undead';

describe('Undead', () => {
  it('should create a new undead with correct parameters', () => {
    const undead = new Undead('John');

    const expected = {
      attack: 25,
      defense: 25,
      health: 100,
      level: 1,
      name: 'John',
      type: 'Undead',
    };

    expect(undead).toEqual(expected);
  });

  it('should throw an error with incorrect name', () => {
    expect(() => new Undead('J')).toThrowError();
  });

  it('should inherit properties and methods from Character', () => {
    const undead = new Undead('John');
    expect(undead.damage).toBeDefined();
  });
});
