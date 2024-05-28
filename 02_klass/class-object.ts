class Character{
  name: string;
  health: number;
  damage: number;
  max_health: number;

  constructor(name: string, health: number, damage: number){
    this.name = name;
    this.health = health;
    this.max_health = health;
    this.damage = damage;
  }

    attack(target: Character) {
    target.health -= this.damage;
    if (target.health < 0) {
      target.health = 0;
    }

  }

}

let hero = new Character("Hero", 100, 5);
let enemy = new Character("Enemy", 50, 3);

while (hero.health > 0 && enemy.health > 0) {
  hero.attack(enemy);
  console.log(`${hero.name} attacks ${enemy.name}. ${enemy.name}'s health: ${enemy.health}`);

  if (enemy.health <= 0) {
    console.log(`${enemy.name} has been defeated! ${hero.name} wins!`);
    break;
  }

  enemy.attack(hero);
  console.log(`${enemy.name} attacks ${hero.name}. ${hero.name}'s health: ${hero.health}`);

  if (hero.health <= 0) {
    console.log(`${hero.name} has been defeated! ${enemy.name} wins!`);
    break;
  }
  console.log();
}