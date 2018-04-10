var buttons = document.getElementsByClassName('button'),
    buttonQuantity = buttons.length,
    textContent = "";
for (var i = 0; i < buttonQuantity; i++) {
    textContent = buttons[i];
    alert(textContent.innerHTML);
}



/*
var buttons = document.getElementsByClassName('button');

for (var i = 0; i < buttons.length; i++) {
    window.alert(buttons[i].innerText);
}
*/