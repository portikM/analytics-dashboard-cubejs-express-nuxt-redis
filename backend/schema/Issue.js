cube(`Issue`, {
  sql: `SELECT * FROM porti129_cubox.issue`,

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

    title: {
      sql: `title`,
      type: `string`
    },

    priority: {
      sql: `priority`,
      type: `number`
    },

    description: {
      sql: `description`,
      type: `string`
    },

    dueDate: {
      sql: `due_date`,
      type: `time`
    }
  }
});
