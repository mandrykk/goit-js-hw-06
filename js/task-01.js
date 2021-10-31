const navListItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${navListItem.length}`);

Array.prototype.forEach.call(navListItem, (element) => {
    const navListTitle = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Category: ${navListTitle}`);
    console.log(`Elements: ${itemsLength}`);
});





