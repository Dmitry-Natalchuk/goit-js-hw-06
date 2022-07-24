
// 1)
/* const categori = document.querySelectorAll(".item");
console.log(`Number of categories : ${categori.length}`);

[...categori].forEach((element) => {
  const nameCategori = element.querySelector("h2");
  console.log(`Categori: ${nameCategori.textContent}`);
  const elementNumber = element.querySelectorAll("li");
  console.log(`Elements: ${elementNumber.length}`);
}); */

// 2)
 const totalCategori = document.querySelectorAll(".item");
console.log(`Number of categories : ${totalCategori.length}`);

const categoriesArray = [...totalCategori]
.map(categories => `Category: ${categories.children[0].textContent}
    Elements: ${categories.children[1].children.length}`
  ).join("\n");
console.log(categoriesArray); 

