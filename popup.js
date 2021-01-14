// let changeColor=document.getElementById('changeColor');
let checkSelector=document.getElementById('checkSelector');

checkSelector.onclick=function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'const skillsCheckBox = document.querySelectorAll("#possible-skills li input");skillsCheckBox.forEach((i)=>{i.checked=true;})' });
    });
    checkSelector.textContent="hope it worked!";
};