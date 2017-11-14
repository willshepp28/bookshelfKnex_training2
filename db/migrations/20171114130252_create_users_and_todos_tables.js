
exports.up = function(knex, Promise) {
    // configure table
  return knex.schema.createTable('users', function(table){
    table.increments(); // primary key constraint
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now()); // puts current time
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
  .createTable('todos', function(table){
    table.increments();
    table.timestamp('created_at').defaultTo(knex.fn.now()); // puts current time
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.string('title').notNullable();
    table.boolean('completed').notNullable().defaultTo(false);
    table.integer('user_id').referencess('id').inTable('users'); // foreign key that ties it to the users table
  });
};

// rolls back migration
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todos').dropTable('users');
};
