import Bowman from '../class/Bowman';

describe('Bowman', () => {
  it('should create a new bowman with correct parameters', () => {
    const bowman = new Bowman('John');
    const expected = {
      attack: 25,
      defense: 25,
      health: 100,
      level: 1,
      name: 'John',
      type: 'Bowman',
    };
    expect(bowman).toEqual(expected);
  });

  it('should throw an error with incorrect name', () => {
    expect(() => new Bowman('J')).toThrowError();
  });

  it('should inherit properties and methods from Character', () => {
    const bowman = new Bowman('John');
    expect(bowman.damage).toBeDefined();
  });
});
