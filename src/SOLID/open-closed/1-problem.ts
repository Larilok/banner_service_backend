interface QuestionA {
  type: string,
  description: string
}

// if we modify the questions we should not modify the print
// open - we can add things
// close - we shouldn't make changes
function printQuizA (questions: Array<QuestionA>) {
  questions.forEach(question => {
    console.log(question.description)
    switch (question.type) {
      case 'boolean':
        console.log(`1. True`)
        console.log(`2. False`)
        break
      case 'text':
        console.log(`Answer: __________`)
        break
      // case 'range':
      //   console.log(`Min: _________`)
      //   console.log(`Max: _________`)
      // break
    }
    console.log('')
  })
}

const questionsA:Array<QuestionA> = [
  {
    type: 'boolean',
    description: 'Do you follow open/closed?'
  },
  {
    type: 'text',
    description: `Argue why should/shouldn't you follow it.`
  }
  // {
  //   type: 'range',
  //   description: `What is the limit?`
  // }
]

printQuizA(questionsA)
