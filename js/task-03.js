const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const elementUl = document.querySelector('.gallery');

const galleryList = ({ url, alt }) => 
      `<li><img src="${url}" alt="${alt}" width = "300" height = "200"/></li>`;
//console.log(galleryList)

const galleryReduce = images
.reduce((acc, img) => acc + galleryList(img), "");

elementUl.insertAdjacentHTML("afterbegin", galleryReduce)
elementUl.setAttribute("style", "list-style-type:none; display: flex; justify-content: space-around; ")







//const elementUl = document.querySelector('.gallery');
//console.log(elementUl)
//images.forEach(elem =>
 // elementUl.insertAdjacentHTML(
    /* "afterbegin",
    `<li>
      <img src = "${elem.url}" alt = "${elem.alt}"  width = "200" height = "100"></img>
    </li>` */
 // ));

//  elementUl.setAttribute("style", "list-style-type:none; display: flex; justify-content: space-around; ")
  //console.log(elementUl)
// =============================================

