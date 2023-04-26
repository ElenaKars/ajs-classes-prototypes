import Character from '../Character';

describe('Character', () => {
  test('should create a character with correct properties', () => {
    const character = new Character('John', 'Swordsman');

    expect(character).toEqual({
      name: 'John',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    });
  });

  test('should throw an error if invalid name or type', () => {
    expect(() => new Character('J', 'Invalid')).toThrow('Некорректное имя или тип персонажа');
  });

  it('should decrease health correctly', () => {
    const character = new Character('John', 'Bowman');
    character.damage(10);
    expect(character.health).toBe(92.5);
  });

  it('should throw an error for negative damage', () => {
    const character = new Character('John', 'Bowman');
    expect(() => {
      character.damage(-10);
    }).toThrow('Некорректное количество очков урона');
  });

  it('should throw an error for invalid damage', () => {
    const character = new Character('John', 'Bowman');
    expect(() => {
      character.damage('10');
    }).toThrow('Некорректное количество очков урона');
  });
});
