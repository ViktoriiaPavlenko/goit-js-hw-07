const categoriesRef = document.querySelectorAll('.item')
console.log(`В списке ${categoriesRef.length} категории.`);

categoriesRef.forEach(categoriesRef => {
    const title = categoriesRef.querySelector('h2')
    console.log(`Категория: ${title.textContent}`);

    const items = categoriesRef.querySelectorAll('li')
    console.log(`Количество элементов: ${items.length}`);
})


// Цикл for
// const categoriesRef = document.querySelector('#categories')
// console.log(`В списке ${categoriesRef.children.length} категории.`);

// for (let i = 0; i < categoriesRef.children.length; i += 1) {
//     const el = categoriesRef.children[i]
//     console.log(`Категория: ${el.children[0].textContent}`);
//     console.log(`Количество элементов: ${el.children[1].childElementCount}`);
// }