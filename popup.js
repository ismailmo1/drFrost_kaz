// let changeColor=document.getElementById('changeColor');
let checkSelector=document.getElementById('checkSelector');

checkSelector.onclick=function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { file: 'checkbox.js' });
    });
    chrome.runtime.onMessage.addListener((req, sender, sendRes) => {
        if (req.checkboxLen>0) {
            checkSelector.textContent=`${req.checkboxLen} checkboxes found!`;
        }
    })
    // checkSelector.textContent="hope it worked!";
};