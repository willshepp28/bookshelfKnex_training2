
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, title:"go eating", user_id: 3},
        {id: 2, title:"go shopping", user_id: 2},
        {id: 3, title:"go to the gym, get fitness on", user_id: 3},
        {id: 4, title:"make life amazing", user_id: 1},
        {id: 5, title:"go the bag", user_id: 3},
        {id: 6, title:"listen to good music", user_id: 3}
      ]);
    });
};
