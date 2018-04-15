exports.up = function(knex, Promise) {
	return Promise.all([
		knex.schema.createTable('users', function(table) {
			table.increments('id').primary();
			table.string('email').notNull();
			table.string('hash').notNull();
			table.string('username').notNull();
			table.string('name').notNull();
			table.string('image').notNull().defaultTo('/static/profile1');
			table.string('role');
		}),
	]);
};

exports.down = function(knex, Promise) {
	return Promise.all([
		knex.schema.dropTable('users'),
	]);
};

