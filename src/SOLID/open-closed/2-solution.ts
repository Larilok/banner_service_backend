// don't change => create 
// don't take to extreme
interface Question {
  description: string
  printQuestionChoices() :void
}

class BooleanQuestion implements Question {
  description: string
  constructor (description: string) {
    this.description = description
  }
  printQuestionChoices() {
    console.log(`1. True`)
    console.log(`2. False`)
  }
}

class TextQuestion implements Question {
  description: string
  constructor (description: string) {
    this.description = description
  }
  printQuestionChoices() {
    console.log(`Answer: __________`)
  }
}

// class RangeQuestion implements Question {
//   description: string
//   constructor (description: string) {
//     this.description = description
//   }
//   printQuestionChoices() {
//     console.log(`Min: _________`)
//     console.log(`Max: _________`)
//   }
// }

function printQuiz (questions: Array<Question>) {
  questions.forEach(question => {
    console.log(question.description)
    question.printQuestionChoices()
    console.log('')
  })
}

const questions:Array<Question> = [
  new BooleanQuestion('Do you follow open/closed?'),
  new TextQuestion(`Argue why should/shouldn't you follow it.`),
  // new RangeQuestion(`What is the limit?`)
]
printQuiz(questions)
