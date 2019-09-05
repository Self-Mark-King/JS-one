// const h1 = document.querySelector('h1');
// // console.log(h1);
// // // console.log(h1.textContent);

// // let message = h1.innerHTML = 'I am a message';

// const container = document.querySelector('h1');
// console.log(container);

// function globalListItems() {
//     // ul/ol any classes attributes or ids

//     //create ul
//     const ul = document.createElement('ul');
//     // console.log(ul);
//     const li = document.createElement('li');
//     // console.log('list item', li);
//     // attribute classes /id
//     li.className = 'list-group-item list-group-item-info';
//     ul.appendChild(li);
//     // console.log('complet ui', ul);
//     container.appendChild(ul);
//     li.innerText = 'ima list item';
//     li.id = 'mylist';
//     const image = document.createElement('img');
//     image.setAttribute('alt', 'ima empty image');
//     image.setAttribute('class', 'img-responsive');
//     console.log(image);
// }
// globalListItems();

// const card = document.createElement('div');
// const haych1 = document.createElement('h1');
// haych1.setAttribute('class', 'text-center');
// // const h1 = docum
// card.appendChild(haych1);
// const pic = document.createElement('img');
// // pic.setAttribute('class', 'col-md-4');
// card.appendChild(pic);
// // pic = card.appendChild(img);
// const para = document.createElement('p');
// card.appendChild(para);
// // para = card.appendChild(p);
// const ikon  = document.createElement('a');
// ikon.setAttribute('href','http://cnn.com');
// ikon.innerHTML = 'aint not icon';

// card.appendChild(ikon);
// // ikon = card.appendChild(icon);
// // haych1.


// // card.appendChild(h1);
// // card.appendChild(img);
// // card.appendChild(p);
// // card.appendChild(icon);

// haych1.innerText = 'tis a H1';
// pic.setAttribute('class', 'col-md-4 img-responsive');
// para.innerText = 'bunch O text';
// // ikon.setAttribute('');
// container.appendChild(card);

// ----------------------------
// Homework
// ---------------------------

// button to collect title
const container = document.querySelector('.container');
const myAlert = document.getElementById('addData');

const haych1 = document.createElement('h1');
haych1.className = 'text-center';

myAlert.addEventListener('click', () => {
    haych1.innerHTML = prompt('enter a title');
});
//-----------------------------
// todays events
const pText = prompt('enter what you did today');
const pTag = document.createElement('p');
pTag.innerText = pText;
//----------------------------------------
//color
const color = prompt('enter a color');
const colorTag = document.createElement('p');
colorTag.innerText = color;
colorTag.setAttribute('bgcolor',color);
//----------------------------------------
container.appendChild(haych1);
container.appendChild(pTag);
container.appendChild(colorTag);

