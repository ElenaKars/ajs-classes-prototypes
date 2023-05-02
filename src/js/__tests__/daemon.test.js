import Daemon from '../class/Daemon';

describe('Daemon', () => {
    it('should create a new daemon with correct parameters', () => {
      const daemon = new Daemon('John');
  
      expect(daemon.name).toBe('John');
      expect(daemon.type).toBe('Daemon');
      expect(daemon.health).toBe(100);
      expect(daemon.level).toBe(1);
      expect(daemon.attack).toBe(10);
      expect(daemon.defense).toBe(40);
    });
  
    it('should throw an error with incorrect name', () => {
      expect(() => new Daemon('J')).toThrowError('Некорректное имя или тип персонажа');
    });
  
    it('should inherit properties and methods from Character', () => {
      const daemon = new Daemon('John');
      expect(daemon.damage).toBeDefined();
    });
  });