"use strict";

// Data una lista della spesa, stampare sulla pagina (anche brutalmente, 
// basta che si vedano) gli elementi della lista individualmente con un ciclo while.

const shoppingList = ["acqua","pane", "vino", "formaggio", "birra", "pasta", "olio"];

let i = 0;

const listContainer = document.getElementById("list");

while ( i < shoppingList.length ) {
    const listItem = document.createElement("li");
    listItem.innerHTML = shoppingList[i];
    listContainer.append(listItem);
    i++
}