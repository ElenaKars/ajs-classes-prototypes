export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (typeof name !== 'string' || name.length < 2 || name.length > 10 || !types.includes(type)) {
      throw new Error('Некорректное имя или тип персонажа');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 10;
    this.defense = 40;
  }

  damage(points) {
    if (typeof points !== 'number' || points < 0) {
      throw new Error('Некорректное количество очков урона');
    }
    const damage = points * (1 - this.defense / 100);
    this.health = Math.max(this.health - damage, 0);
  }
}
