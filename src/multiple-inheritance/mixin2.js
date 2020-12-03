function applyMixins(derivedCtor, constructors) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
      );
    });
  });
}


function swimmer() {
  return {
    swim() {console.log(` ${ this.name } swam `)}
  }
}

function flyer() {
  return {
    fly () { console.log(` ${ this.name } flew`)}
  }
}

function swimmingMonsterCreator(name) {
  const monster = {name: name}
  const metadata = {name: 'string', ...swimmer()}
  applyMixins(monster, metadata)
  console.dir(`Object have such properties: ${Object.getOwnPropertyNames(monster.__proto__)}`)

  return monster
}

const duck = swimmingMonsterCreator('duck')

duck.swim()
