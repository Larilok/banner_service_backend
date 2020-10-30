class CalorieTracker {
  private maxCalories: number
  private currentCalories: number
  constructor (maxCalories: number) {
    this.maxCalories = maxCalories
    this.currentCalories = 0
  }

  // how we track calories
  trackCalories(caloriesCount) {
    this. currentCalories += caloriesCount
    if (this.currentCalories > this.maxCalories)
      this.logCaloriesSurplus()
  }

  // how we log
  private logCaloriesSurplus() {
    console.log('Max calories exceeded')
  }
}

const calorieTracker = new CalorieTracker(1000)

calorieTracker.trackCalories(400)
calorieTracker.trackCalories(500)
calorieTracker.trackCalories(200)
