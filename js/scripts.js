const body = document.body;
const container = document.createElement('div');
container.className = 'container text-center';
let test = body.appendChild(container);
console.log('html', test);

const row =document.createElement('main');
row.className = 'row';
const content = document.createElement('div');
content.className = 'col-md-6 col-md-offset-2';

row.appendChild(content);
container.appendChild(row);
body.appendChild(container);

//form
const form = document.createElement('form');
const email = document.createElement('input');
const text = document.createElement('textarea');
const submit = document.createElement('button');
submit.setAttribute("name", "submit");
submit.setAttribute("type", "submit");
submit.setAttribute("value", "submit");
content.appendChild(form);
content.appendChild(email);
content.appendChild(text);
content.appendChild(submit);

