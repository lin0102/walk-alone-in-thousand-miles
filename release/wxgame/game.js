if ((typeof swan !== 'undefined') && (typeof swanGlobal !== 'undefined')) {
	require("swan-game-adapter.js");
	require("libs/laya.bdmini31f01ec7.js");
} else if (typeof wx!=="undefined") {
	require("weapp-adapter.js");
	require("libs/laya.wxmini6b87b4a2.js");
}
window.loadLib = require;
require("index8f38f069.js");