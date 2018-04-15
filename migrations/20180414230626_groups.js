
exports.up = function(knex, Promise) {
	return Promise.all([
		knex.schema.createTable('groups', function(table) {
			table
				.increments('gid')
				.primary();
			table
				.string('image');
			table
				.string('name')
				.notNull();
			table
				.string('description');
			table
				.integer('admin_id')
				.unsigned()
				.notNullable();
			table
				.foreign('admin_id')
				.references('id')
				.inTable('users');
		}),
	]);	
};

exports.down = function(knex, Promise) {
	return Promise.all([
		knex.schema.dropTable('groups'),
	]);
};
