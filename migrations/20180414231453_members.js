
exports.up = function(knex, Promise) {
	return Promise.all([
		knex.schema.createTable('members', function(table) {
			table
				.increments('id')
				.primary();
			table
				.integer('group_id')
				.unsigned()
				.notNullable();
			table
				.integer('user_id')
				.unsigned()
				.notNullable();
			table
				.foreign('group_id')
				.references('gid')
				.inTable('groups');
			table
				.foreign('user_id')
				.references('id')
				.inTable('users');
		}),
	]);
};

exports.down = function(knex, Promise) {
	return Promise.all([
		knex.schema.dropTable('members'),
	]);
};
