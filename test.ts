
const randomDateAndHourInRange = (start:Date, end:Date, startHour:number, endHour:number) => {
  console.log(start)
  console.log(end)
  const startDateAsNumber = start.getTime()
  console.log(startDateAsNumber)
  const endDateAsNumber = end.getTime()
  console.log(endDateAsNumber)
  const diff = endDateAsNumber - startDateAsNumber
  console.log(diff)
  const date = new Date(startDateAsNumber + Math.random() * diff)
  console.log(date)
  const hour = startHour + Math.random() * (endHour - startHour) | 0
  date.setHours(hour)
  return date
}

randomDateAndHourInRange(new Date('December 17, 1995'), new Date(2011, 0, 1, 0, 0, 0, 0), 0, 24)

// const date = new Date('December 17, 1995 03:24:00')
// console.log(date)
// date.setMinutes(50)
// console.log(date)
// date.setMinutes(1000000)
// console.log(date)
