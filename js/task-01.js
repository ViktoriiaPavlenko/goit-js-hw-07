const categoriesRef = document.querySelectorAll('.item')
console.log(`В списке ${categoriesRef.length} категории.`);

categoriesRef.forEach(categoriesRef => {
    const title = categoriesRef.querySelector('h2')
    console.log(`Категория: ${title.textContent}`);

    const items = categoriesRef.querySelectorAll('li')
    console.log(`Количество элементов: ${items.length}`);
})