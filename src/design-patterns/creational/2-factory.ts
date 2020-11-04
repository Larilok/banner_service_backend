interface Employee {
   paySalary(): void
   dismiss(): void
}
declare class Programmer implements Employee { 
   constructor(id: number) 
   paySalary()
   dismiss()
}
declare class Accountant implements Employee {
   constructor(id: number)
   paySalary()
   dismiss()
}

 // ----------------------------------------------------

abstract class Department {
   abstract createEmployee(id: number): Employee

   fire(id: number) {
      const employee = this.createEmployee(id)
      employee.paySalary()
      employee.dismiss()
  }
}

class ITDepartment extends Department {
   createEmployee(id: number) {
      return new Programmer(id)
  }
}

class AccountingDepartment extends Department {
   createEmployee(id: number) {
      return new Accountant(id)
  }
}

let department: Department

if('IT') {
   department = new ITDepartment()
} else {
   department = new AccountingDepartment()
}

department.fire(5)
