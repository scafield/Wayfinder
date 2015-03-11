exports.definition = {
	config: {
		columns: {
		    "module": "text",
		    "character": "text"
		},
		adapter: {
			type: "sql",
			collection_name: "modules"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};