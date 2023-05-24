import Swordsman from '../class/Swordsman';

describe('Swordsman', () => {
  it('should create a new swordsman with correct parameters', () => {
    const swordsman = new Swordsman('John');

    const expected = {
      attack: 40,
      defense: 10,
      health: 100,
      level: 1,
      name: 'John',
      type: 'Swordsman',
    };
    expect(swordsman).toEqual(expected);
  });

  it('should throw an error with incorrect name', () => {
    expect(() => new Swordsman('J')).toThrowError();
  });

  it('should inherit properties and methods from Character', () => {
    const swordsman = new Swordsman('John');
    expect(swordsman.damage).toBeDefined();
  });
});
