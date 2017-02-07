"use strict";

var i = 1;

function addItem() {
    var mainDiv = document.getElementById("op");

    var newItem = document.createElement("div");
    newItem.setAttribute("id", "d" + (++i));

    var newTextbox = document.createElement("select");
    newTextbox.setAttribute("type", "text");
    newItem.appendChild(newTextbox);

    var newAddButton = document.createElement("input");
    newAddButton.setAttribute("type", "button");
    newAddButton.setAttribute("value", "Add Item");
    newAddButton.setAttribute("onclick", "addItem()");
    newItem.appendChild(newAddButton);

    var newAddButton = document.createElement("input");
    newAddButton.setAttribute("type", "button");
    newAddButton.setAttribute("value", "Remove Item");
    newAddButton.setAttribute("onclick", "removeItem('d" + i + "')");
    newItem.appendChild(newAddButton);

    mainDiv.appendChild(newItem);
}

function removeItem(remDiv) {
    var removeDiv = document.getElementById(remDiv);
    var mainDiv = document.getElementById("checkout");
    mainDiv.removeChild(removeDiv);
}




