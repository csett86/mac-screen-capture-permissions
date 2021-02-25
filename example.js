const {app} = require('electron');
const {
	hasScreenCapturePermission,
	hasPromptedForPermission,
	openSystemPreferences
} = require('.');

function checkForPermissions() {
	console.log('Has asked permissions?', hasPromptedForPermission());

	console.log('Has permissions?', hasScreenCapturePermission());
	console.log('Has asked permissions?', hasPromptedForPermission());
	console.log('Sleep for 3 seconds...')

	setTimeout(checkForPermissions, 3000);
}

(async () => {
	await app.whenReady();

	checkForPermissions();
})();
