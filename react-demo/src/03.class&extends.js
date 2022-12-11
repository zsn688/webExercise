class animal {
  constructor(name, type) {
    this.name = name
    this.type = type
  }
  eat() {
    console.log('eat')
  }
}

class dog extends animal {
  constructor(name, type) {
    super(name, type)
    this.legs = 4
  }
  run() {
    console.log('run')
  }
}

const dog1 = new dog("sa", 'hua')
console.log(dog1)