var myModules = Alloy.Collections.modules;
var module = Alloy.createModel('modules', {
	title : 'Rise of the Runelords',
	character: 'Tian Han'
});
myModules.add(module);
module.save;

function showModule (event) {
	var selectModule = event.source;
	var args = {
		title: selectModule.title,
		character: selectModule.character
	};
	var moduleview = Alloy.createController("moduledetails", args).getView();
	moduleview.open();
}
function addModule(){
	var myAddModule = Alloy.createController("addModule",{}).getView();
	if (OS_ANDROID) {
		myAddModule.open();
		}
}
