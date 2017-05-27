define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var DomUtils = module.exports;

[
	require("domutils/lib/stringify"),
	require("domutils/lib/traversal"),
	require("domutils/lib/manipulation"),
	require("domutils/lib/querying"),
	require("domutils/lib/legacy"),
	require("domutils/lib/helpers")
].forEach(function(ext){
	Object.keys(ext).forEach(function(key){
		DomUtils[key] = ext[key].bind(DomUtils);
	});
});

return module.exports;});
