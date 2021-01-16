var possSkillsCheckBox=document.querySelectorAll("#possible-skills li input");
var skillsCheckBox=document.querySelectorAll("#unseen-skills li input");


if (possSkillsCheckBox) {
    chrome.runtime.sendMessage({ checkboxLen: possSkillsCheckBox.length });
    console.log(possSkillsCheckBox.length)
    possSkillsCheckBox.forEach((i) => { i.checked=true; })
} else if (skillsCheckBox) {
    console.log(skillsCheckBox.length)
    skillsCheckBox.forEach((i) => { i.checked=true; })
}