interface ILogger {
  log() :void
}

class CalorieTracker {
  private maxCalories: number
  private currentCalories: number

  constructor (logger: ILogger) {
    this.logger = new logger()
    this.maxCalories = maxCalories
    this.currentCalories = 0
  }

  // how we track calories
  trackCalories(caloriesCount) {
    this. currentCalories += caloriesCount
    if (this.currentCalories > this.maxCalories)
      this.logger.log()
  }

  // how we log

}

/// CT -> console logger
/// CT -> logger <- console logger

class ConsoleLogger implements ILogger {
  log(message: string) {
    console.log(message)
  }
}
class EmailLogger implements ILogger {
  log(message: string) {
    // email
  }
}

const calorieTracker = new CalorieTracker(1000)

calorieTracker.trackCalories(400)
calorieTracker.trackCalories(500)
calorieTracker.trackCalories(200)
