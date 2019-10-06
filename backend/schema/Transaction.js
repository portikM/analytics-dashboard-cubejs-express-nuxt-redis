cube(`Transaction`, {
  sql: `SELECT * FROM cubox.transaction`,

  joins: {
  },

  measures: {
    revenue: {
      sql: `amount`,
      type: `sum`
    }
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
