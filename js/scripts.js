/*
1. Seleziono la mia lista da html
2. Creo gli elementi da inserire all'interno della lista:
        - creo un array con la lista
3. Creo il ciclo while che stampa l'array all'interno della pagina:
        - creo elementi li
        - stampo in html
*/


// Seleziono la lista
const shoppingList = document.getElementById('list');
console.log('la lista della spesa è ', shoppingList);

// Creo la lista degli elementi
let items = [
    'Pane',
    'Uova',
    'Pasta',
    'Insalata',
    'Pomodoro',
    'Carote',
    'Vino',
    'Latte',
    'Acqua',
    'Cioccolato',
    'Farina',
    'Cereali',
];
console.log('Gli elementi della lista sono', items);

//Creo ciclo while
let i = 0;
while(i < items.length){

    console.log('Elementi in ciclo while in console', items[i])

    //creo elemento li
    const itemList = document.createElement('li');
    // inserisco in html
    itemList.innerHTML = items[i];
    // inserisco nella posizione giusta
    shoppingList.append(itemList);

    i++;
}
