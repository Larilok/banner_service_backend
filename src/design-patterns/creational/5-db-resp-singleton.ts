const { Pool } = require('pg')

class dbAccess {
  connections:any
  constructor () {
    this.connections = {}
  }

  getInstance (details) {
    if (!this.connections[details.database]) {
      this.connections[details.database] = new Pool(details);
    }
    return this.connections[details.database];
  }
};
const connectionsPool = new dbAccess();

class db {
  constructor(pool) {
    this.pool = connectionsPool.getInstance(pool);
  }
}