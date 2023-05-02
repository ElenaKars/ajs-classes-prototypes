import Character from '../class/Character';

describe('Character', () => {
  it('should throw an error with incorrect name or type', () => {
    expect(() => new Character('J', 'Bowman')).toThrowError('Некорректное имя или тип персонажа');
    expect(() => new Character('John', 'Warrior')).toThrowError('Некорректное имя или тип персонажа');
  });

  it('should decrease health when damage is taken', () => {
    const character = new Character('John', 'Bowman');
    const initialHealth = character.health;

    character.damage(10);

    expect(character.health).toBeLessThan(initialHealth);
  });

  it('should not allow negative damage', () => {
    const character = new Character('John', 'Bowman');

    expect(() => character.damage(-10)).toThrowError('Некорректное количество очков урона');
  });
});


