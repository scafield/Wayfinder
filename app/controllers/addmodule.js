var myModules = Alloy.Collections.modules;
function addModule() {
	var module = Alloy.createModel('modules', {
		title : $.titleInput.value,
		character : $.characterInput.value
	});
	myModule.add(module);
	module.save();
	$.addModule.close;
}
