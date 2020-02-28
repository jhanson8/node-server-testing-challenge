// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: "sqlite3://localhost/school",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    }
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./database/authTesting.db3"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "sqlite3",
    connection: process.env.DATABASE_URL,
    // connection: "postgres:// username : password @ addressToServer:5432 / databaseName"
    // connection: {
    //   host: 'db.ourcompany.com',
    //   user: 'me',
    //   password: 'mini me',
    //   database: 'school'
    // }
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    }
  }
};

//NOT WORKING
// module.exports = {
//   development: {
//     client: "sqlite3",
//     useNullAsDefault: true,
//     connection: {
//       filename: "./database/authTesting.db3"
//     },
//     pool: {
//       afterCreate: (conn, done) => {
//         conn.run("PRAGMA foreign_keys = ON", done);
//       }
//     },
//     migrations: {
//       directory: "./database/migrations"
//     },
//     seeds: {
//       directory: "./database/seeds"
//     }
//   },
//   testing: {
//     client: "sqlite3",
//     connection: {
//       filename: "./data/authTesting.db3"
//     },
//
//     useNullAsDefault: true,
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       directory: "./database/migrations",
//       tableName: "knex_migrations"
//     },
//     seeds: {
//       directory: "./data/seeds"
//     }
//   },
//   production: {
//     client: "sqlite3",
//     connection: process.env.DATABASE_URL,
//     // connection: "postgres:// username : password @ addressToServer:5432 / databaseName"
//     // connection: {
//     //   host: 'db.ourcompany.com',
//     //   user: 'me',
//     //   password: 'mini me',
//     //   database: 'school'
//     // }
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       directory: "./database/migrations",
//       tableName: "knex_migrations"
//     }
//   }
// };
