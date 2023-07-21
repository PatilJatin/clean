
const mongoose = require('mongoose');

 class Database {
  constructor(databaseUrl) {
    if (new.target === Database) {
      throw new TypeError('Cannot instantiate abstract class Database');
    }
    this.databaseUrl = databaseUrl;
  }
}



class ConcreteDatabase extends Database {
  constructor(databaseUrl) {
    super(databaseUrl);
  }

  async connect() {
    try {
      await mongoose.connect(this.databaseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to the database');
    } catch (error) {
      console.log('Failed to connect to the database:', error);
    }
  }
}



module.exports = ConcreteDatabase;
