declare class User {}
declare class Customer {}
declare class Admin {}

class UserFactory {
  static create (type: string) {
    switch (type) {
      case 'user': return new User()
      case 'customer': return new Customer()
      case 'admin': return new Admin()
      default:
        throw new Error('Wrong user type passed.')
    }
  }
}
