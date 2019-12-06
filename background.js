// chrome.tabs.query( {} ,function (tabs) {
//     for (var i = 0; i < tabs.length; i++) {
//         chrome.tabs.executeScript(tabs[i].id, {file: "jquery.js"});
//         chrome.tabs.executeScript(tabs[i].id, {file: "trigger.js"});
//     }
// });

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (!tab || tab.url.indexOf('sentry.skbkontur.ru/auth/login/sentry') == -1) {
        return;
    }
    chrome.tabs.executeScript(tabId, { file: "jquery.js" });
    chrome.tabs.executeScript(tabId, { file: "trigger.js" });
});

chrome.tabs.query({ url: ["*://billy-sentry.skbkontur.ru/auth/login/sentry/*"] }, function (tabs) {
    for (var i = 0; i < tabs.length; i++) {
        chrome.tabs.executeScript(tabs[i].id, { file: "jquery.js" });
        chrome.tabs.executeScript(tabs[i].id, { file: "trigger.js" });
    }
});


