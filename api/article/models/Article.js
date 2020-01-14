'use strict';

/**
 * Lifecycle callbacks for the `Article` model.
 */

const slugify = require('slugify');
const config = {
	lower: true
};

module.exports = {
	beforeSave: async model => {
		// console.log('beforeSave', model.title);
		if (model.title) {
			model.slug = slugify(model.title, config);
		}
		// console.log('beforeSave', model.slug);
	},
	beforeUpdate: async model => {
		if (model.getUpdate()) {
			if (model.getUpdate().title) {
				model.update({
					slug: slugify(model.getUpdate().title, config),
				});
			}
		}
	},
};
