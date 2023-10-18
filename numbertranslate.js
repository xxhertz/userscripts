// ==UserScript==
// @name     twitter number translate + fb check
// @version  1
// @include  /^https:\/\/twitter\.com.*$/
// ==/UserScript==
const start = "a".charCodeAt(0)
// https://translate.google.com/favicon.ico
function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

function toLetters(characters) {
		let out = ""
    const numbers = characters.split(" ")
    
    for (let i = 0; i <= numbers.length; i++)
    		out += String.fromCharCode(start + Number(numbers[i]) - 1)
  
  	return out.substring(0, out.length - 1)
}

const notification = document.createElement("div")

const textblock = document.createElement("p")
textblock.style = "height: 32px; padding: 0; margin: 0; position: relative; left: 0; top: 0; color: white"
notification.appendChild(textblock)

notification.style = "height: 300px; width: 420px; position: fixed; left: 50%; bottom: 40px; transform: translate(-50%); padding: 12px; background: black; border: 1px solid white; visibility: hidden"
document.body.appendChild(notification)

// numbers button
const button = document.createElement("button")
button.style = "height: 32px; width: 32px; position: fixed; left: 0; bottom: 0;"
button.onclick = () => {
  	const text = getSelectionText()
    textblock.innerText = toLetters(text)
  	notification.style.visibility = "visible"
  	setTimeout(() => { textblock.innerText = ""; notification.style.visibility = "hidden" }, 5000)
  	
}

document.body.appendChild(button)