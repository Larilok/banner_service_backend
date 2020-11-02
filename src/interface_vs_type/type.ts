type TAnimal = {
  name: string
}

type TBear = TAnimal & { 
  honey: Boolean 
}

// ------------------------

type TWindow = {
  title: string
}

type TWindow = {
  ts: typeof import('typescript')
}
