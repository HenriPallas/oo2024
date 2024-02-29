class Character{
  name: string;
  health: number;
  base_health: number;
  damage: number;
  base_damage: number;
  max_health: number;
  speed: number;
  base_speed: number;
  crit_chance: number;
  crit_chance_base: number;
  weapon: any;
  role: any;

  constructor(name: string, health: number, damage: number, speed: number, crit_chance: number){
    this.name = name;
    this.health = health;
    this.base_health = health;
    this.max_health = health;
    this.damage = damage;
    this.base_damage = damage;
    this.speed = speed;
    this.base_speed = speed;
    this.crit_chance = crit_chance;
    this.crit_chance_base = crit_chance;
    this.weapon = "None";
    this.role = "Adventurer";
  }

  attack(target: Character) {
    target.health -= this.damage;
    if (target.health < 0) {
      target.health = 0;
    }

  }

  addWeapon(weapon: Weapon){
    this.weapon = weapon;
    this.updateStats();
  }

  addRole(role: Role){
    this.role = role;
    this.updateStats();
  
  }

  updateStats() {
    let health_perc = 1;
    let damage_perc = 1;
    let speed_perc = 1;
    let damage_add = 0;
    let weight_add = 0;

    if (this.role !== "Adventurer") {
      health_perc = this.role.hp_mod;
      damage_perc = this.role.damage_mod;
      speed_perc = this.role.speed_mod;
    }

    if (this.weapon !== "None") {
      damage_add = this.weapon.damage;
      weight_add = this.weapon.weight;
    }

    this.health = Math.round(this.base_health * health_perc);
    this.damage = Math.round((this.base_damage + damage_add) * damage_perc);
    this.speed = this.base_speed * (1 - weight_add) * speed_perc;
    this.max_health = this.health;
  }

}

class Weapon{
  name: string;
  damage: number;
  weight: number;

  constructor(name: string, damage: number, weight: number) {
    this.name = name;
    this.damage = damage;
    this.weight = weight;
  }
}

class Role{
  name: string;
  hp_mod: number;
  damage_mod: number;
  speed_mod: number;
  crit_mod: number;

  constructor(name: string, hp_mod: number, damage_mod: number, speed_mod: number, crit_mod: number) {
    this.name = name;
    this.hp_mod = hp_mod;
    this.damage_mod = damage_mod;
    this.speed_mod = speed_mod;
    this.crit_mod = crit_mod
  }

}

// Create weapons

let weapon1 = new Weapon("Sword", 7, 0.25);
let weapon2 = new Weapon("Dagger", 3, 0.05);
let weapon3 = new Weapon("Battleaxe", 15, 0.5);

// Create roles

let role1 = new Role("Warrior", 1.1, 1.2, 0.8, 0);
let role2 = new Role("Assassin", 0.8, 1.1, 1.2, 0);
let role3 = new Role("Defender", 1.2, 1.1, 0.8, 0);

// Create characters

let hero = new Character("Hero", 100, 5, 10, 0.05);
let enemy = new Character("Enemy", 100, 5, 10, 0.05);

// Assign weapons and roles

hero.addWeapon(weapon1);
hero.addRole(role1);
enemy.addWeapon(weapon2);
enemy.addRole(role2);
console.log(hero);
console.log(enemy);

// Combat handler

const characters = [hero, enemy];
characters.sort((a, b) => b.speed - a.speed);

while (characters[0].health > 0 && characters[1].health > 0) {
  if (characters[0].speed === characters[1].speed) {
    characters.sort(() => Math.random() - 0.5);
  }

  for (let i = 0; i < characters.length; i++) {
    const attacker = characters[i];
    const target = characters[(i + 1) % characters.length]; // Circular selection of the target

    attacker.attack(target);
    console.log(`${attacker.name} attacks ${target.name}. ${target.name}'s health: ${target.health}`);

    if (target.health <= 0) {
      console.log(`${target.name} has been defeated! ${attacker.name} wins!`);
      break;
    }
  }

  console.log();
}