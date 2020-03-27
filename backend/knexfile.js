// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',//nome do tipo de linguagem sql
    connection: {
      filename: './src/database/db.sqlite'//endereço que vai ser usado para armazemar
    },
    migrations: {

      directory: './src/database/migrations'//endereço das migraçoes
    },
  
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
