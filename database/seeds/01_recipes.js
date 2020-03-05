exports.seed = function(knex) {
  return knex("recipes").insert([{ name: "Pho" }, { name: "Sushi" }]);
};
