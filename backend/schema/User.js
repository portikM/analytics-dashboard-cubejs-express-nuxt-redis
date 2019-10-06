cube(`User`, {
  sql: `SELECT * FROM cubox.user`,

  joins: {
  },

  measures: {
    newUsers: {
      sql: `id`,
      type: `count`
    }
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },

    name: {
      sql: `name`,
      type: `string`
    },

    email: {
      sql: `email`,
      type: `string`
    },

    dateRegistered: {
      sql: `date_registered`,
      type: `time`
    },

    password: {
      sql: `password`,
      type: `string`
    }
  }
});
