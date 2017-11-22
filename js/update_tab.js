/*global chrome,document,window */
(function init(angular) {
    "use strict";
    try {
        var url = "www.facebook.com"
        chrome.tabs.getCurrent(function(tab) {
            chrome.tabs.update(tab.id, {
                "url": url,
                "highlighted": true
            });
        });
    } catch (e) {
        // If anything goes wrong with the redirection logic, fail to custom apps page.
        console.error(e);
        angular.resumeBootstrap();
    }
})(angular);