exports.up = function(knex) {
  return knex.schema.createTable("recipes", function(tbl) {
    tbl.increments();

    tbl
      .string("name", 255)
      .notNullable()
      .unique()
      .index();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipes");
};
