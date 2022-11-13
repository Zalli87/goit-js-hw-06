const itemsEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach((el) => {
    const title = el.firstElementChild;
    const categoriesEL = el.lastElementChild;
    console.log(`Categoey: ${title.textContent}`);
    console.log(`Elements: ${categoriesEL.childElementCount}`)

    });

