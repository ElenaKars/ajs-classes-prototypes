export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (typeof name !== 'string') {
      throw new Error('Некорректное имя - не является строковым типом');
    }

    if (name.length < 2 || name.length > 10) {
      throw new Error('Некорректное имя персонажа');
    }
    if (!types.includes(type)) {
      throw new Error('Некорректный тип персонажа');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defense = undefined;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Персонаж мертв и не может повысить уровень');
    }
    this.level += 1;
    this.attack += Math.round(this.attack * 0.2);
    this.defense += Math.round(this.defense * 0.2);
    this.health = 100;
  }

  damage(points) {
    if (typeof points !== 'number' || points < 0) {
      throw new Error('Некорректное количество очков урона');
    }
    if (this.health > 0) {
      this.health -= points * (1 - this.defense / 100);
    }
    if (points > this.health) {
      this.health = 0;
    }
  }
}
