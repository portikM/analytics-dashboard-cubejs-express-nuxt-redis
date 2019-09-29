cube(`Transaction`, {
  sql: `SELECT * FROM porti129_cubox.transaction`,

  joins: {

  },

  measures: {
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },

    date: {
      sql: `date`,
      type: `time`
    },

    amount: {
      sql: `amount`,
      type: `number`
    },

    client: {
      sql: `client`,
      type: `string`
    }
  }
});
