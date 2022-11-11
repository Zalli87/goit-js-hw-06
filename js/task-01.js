const itemsEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach((el) => {
    const title = el.querySelector('h2')
    const categoriesEL = el.querySelectorAll('li');
    console.log(`Categoey: ${title.textContent}`);
    console.log(`Elements: ${categoriesEL.length}`)
    });

