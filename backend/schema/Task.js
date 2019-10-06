cube(`Task`, {
  sql: `SELECT * FROM cubox.task`,

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
