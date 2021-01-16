let checkSelector=document.getElementById('checkSelector');

chrome.browserAction.onClicked.addListener(function (tab) {
    checkSelector.textContent="hi"
});