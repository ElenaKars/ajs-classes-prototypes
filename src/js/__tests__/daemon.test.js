import Daemon from '../class/Daemon';

describe('Daemon', () => {
    it('should create a new daemon with correct parameters', () => {
      const daemon = new Daemon('John');

      const expected = {
        attack: 10,
        defense: 40,
        health: 100, 
        level: 1,
        name: 'John',
        type: 'Daemon',
      }
      expect(daemon).toEqual(expected);
    });
  
    it('should throw an error with incorrect name', () => {
      expect(() => new Daemon('J')).toThrowError();
    });
  
    it('should inherit properties and methods from Character', () => {
      const daemon = new Daemon('John');
      expect(daemon.damage).toBeDefined();
    });
  });