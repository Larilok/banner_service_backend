// 'use strict'
const getInheritance = (instance: any, parents: any = []):any => {
  const parent:object = Object.getPrototypeOf(instance)
  if (!parent) return parents
  console.log(`---------\nParent is ${parent}`)
  console.log(`Parents constructor name is ${parent.constructor.name}`)
  console.log(`Parent constructor is ${parent.constructor}`)
  console.dir(`Parent have such properties: ${Object.getOwnPropertyNames(parent)}`)
  console.dir(`Parent have such keys: ${Object.keys(parent)}`)
  parents.push(parent.constructor.name)
  return getInheritance(parent, parents)
}

const showInheritance = (instance:any):any => {
  console.log(`---------\nObject is ${instance}`)
  console.log(`Object constructor name is ${instance.constructor.name}`)
  console.log(`Object constructor is ${instance.constructor}`)
  console.dir(`Object have such properties: ${Object.getOwnPropertyNames(instance)}`)
  console.dir(`Object have such keys: ${Object.keys(instance)}`)
  return getInheritance(instance)
}