import Character from '../class/Character';

describe('Character', () => {
  describe('constructor', () => {
    it('should throw an error with incorrect name', () => {
      expect(() => new Character('J', 'Bowman')).toThrowError();
    });

    it('should throw an error with incorrect type of name', () => {
      expect(() => new Character(10, 'Bowman')).toThrowError();
    });
  
    it('should throw an error with incorrect type', () => {
      expect(() => new Character('John', 'Warrior')).toThrowError();
    });
  })

  describe('levelUp', () => {
    it('should increase level by 1', () => {
      const character = new Character('John', 'Bowman');

      const initialLevel = character.level;

      character.levelUp();

      expect(character.level).toBe(initialLevel + 1);
    });

    it('should increase attack and defense by 20%', () => {
      const character = new Character('John', 'Bowman');

      const initialAttack = character.attack;
      const initialDefense = character.defense;

      character.levelUp();

      expect(character.attack).toBe(initialAttack * 1.2);
      expect(character.defense).toBe(initialDefense * 1.2);
    });

    it('should set health to 100', () => {
      const character = new Character('John', 'Bowman');
      character.health = 50;

      character.levelUp();

      expect(character.health).toBe(100);
    });
    it('should throw an error if character is dead', () => {
      const character = new Character('John', 'Bowman');
      character.health = 0;

      expect(() => character.levelUp()).toThrowError();
    });
  });
  
  describe('damage', () => {
    it('should throw an error if the damage points is not a number', () => {
      const character = new Character('Test', 'Swordsman');
      expect(() => character.damage('damage')).toThrowError();
    });

    it('should throw an error if the damage points is less than 0', () => {
      const character = new Character('Test', 'Swordsman');
      expect(() => character.damage(-1)).toThrowError();
    });

    it('should decrease the health of the character by the correct amount', () => {
      const character = new Character('Test', 'Swordsman');
      character.defense = 10;
      character.damage(50);
      expect(character.health).toBeCloseTo(55);
    });

    it('should set the health of the character to 0 if the damage points exceed the current health', () => {
      const character = new Character('Test', 'Swordsman');
      character.defense = 10;
      character.damage(200);
      expect(character.health).toEqual(0);
    });
  });
})
