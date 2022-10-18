/*
  Polymophism
  Arv mellan klasser
*/


class Monster {
  constructor(name) {
    this.name = name
  }

  attack() {
    console.log(`the monster ${this.name} is hitting you!`)
  }
}


const monster = new Monster('Uffe')

// console.log(monster)
// monster.attack()

class FireMonster extends Monster {
  constructor(name) {
    super(name)
  }

  attack() {
    super.attack()
    console.log(`${this.name} is also throwing a fireball att you`)
  }

}


class WaterMonster extends Monster {

  attack() {
    console.log(`the monster ${this.name} is sending a large wave of water right at you`)
    super.attack()
  }
}

const fm = new FireMonster('Blazor')
const wm = new WaterMonster('Wateruz')

fm.attack()
wm.attack()