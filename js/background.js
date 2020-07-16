chrome.runtime.onInstalled.addListener(function() {
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		const voice = window.speechSynthesis.getVoices()[0];
		chrome.storage.sync.set({voice: voice}, function() {
			console.log('Set voice to ' + voice?.name + '!');
		});
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [new chrome.declarativeContent.PageStateMatcher({})],
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
	});
});