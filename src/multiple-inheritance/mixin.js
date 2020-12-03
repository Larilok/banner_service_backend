
const accessors = {

  string(proto, name, index) {
    Object.defineProperty(proto.prototype, name, {
      get() {
        return this[index]
      },
      set(value) {
        this[index] = value
      }
    })
  },

  function(proto, name, index, fieldDef) {
    Object.defineProperty(proto.prototype, name, { value: fieldDef })
  }

}

const buildPrototype = metadata => {
  const protoClass = function ProtoClass() {}
  let index = 0, fieldDef, buildField, fieldType
  for (const name in metadata) {
    fieldDef = metadata[name]
    fieldType = typeof fieldDef
    if (fieldType !== 'function') fieldType = fieldDef
    buildField = accessors[fieldType]
    if (buildField) buildField(protoClass, name, index++, fieldDef)
  }
  return protoClass
}

const assignPrototype = (data, proto) => {
  if (Array.isArray(data)) {
    data.forEach(item => item.__proto__ = proto.prototype)
  } else {
    Object.setPrototypeOf(data, proto.prototype)
  }
}

const assignMetadata = (data, metadata) => {
  const proto = buildPrototype(metadata)
  //Object.setPrototypeOf(data, proto)
  assignPrototype(data, proto)
  return proto
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
  assignMetadata(monster, metadata)
  console.dir(`Object have such properties: ${Object.getOwnPropertyNames(monster.__proto__)}`)
  console.dir(`Object have such properties: ${Object.getOwnPropertyNames(monster)}`)

  return monster
}

const duck = swimmingMonsterCreator('duck')
duck.swim()
