import Zombie from '../class/Zombie';

describe('Zombie', () => {
  it('should create a new zombie with correct parameters', () => {
    const zombie = new Zombie('John');

    const expected = {
      attack: 40,
      defense: 10,
      health: 100, 
      level: 1,
      name: 'John',
      type: 'Zombie',
    }
    
    expect(zombie).toEqual(expected);
  });

  it('should throw an error with incorrect name', () => {
    expect(() => new Zombie('J')).toThrowError();
  });

  it('should inherit properties and methods from Character', () => {
    const zombie = new Zombie('John');
    expect(zombie.damage).toBeDefined();
  });
});