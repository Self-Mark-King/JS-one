
//my form
// const body = document.body;
// const container = document.createElement('div');
// container.className = 'container text-center';
// let test = body.appendChild(container);
// console.log('html', test);

// const row =document.createElement('main');
// row.className = 'row';
// const content = document.createElement('div');
// content.className = 'col-md-6 col-md-offset-2';

// row.appendChild(content);
// container.appendChild(row);
// body.appendChild(container);

// //form==============================
// const form = document.createElement('form');
// const inputEmail = document.createElement('input');
// inputEmail.setAttribute('type','email');
// inputEmail.setAttribute('name','email');
// inputEmail.setAttribute('class','form-control');
// inputEmail.setAttribute('name','email');
// inputEmail.setAttribute('placeholder','email');

// form.appendChild(inputEmail);

// function globalFormElements(element, elementType, elementName, elementClass, elementPlaceholder){
//     const element = document.createElement(element);
//     element.setAttribute(elementType);
//     element.className = elementClass;
//     element.setAttribute(elementName);
//     element.setAttribute(elementPlaceholder);
//     return element;
// };

// const labelGenerator = (forElement) =>{
//     const label = document.createElement('label');
//     label.setAttribute('for', forElement);
//     label.innerText = text;
//     return label;
// };

// console.log(globalFormElements('input','text', 'example', 'form-control bg-piomary', 'example here'));
// globalFormElements(globalFormElements('textarea', 'text', 'message', 'bg-danger','concerns?'));

//jacques
// function globalFormElements(element, elementType, elementName, elementClass, elementPlaceholder, elementId) {
//     //element : create the type of element you seek
//     const newElement = document.createElement(element);
//     newElement.setAttribute('type', elementType);
//     newElement.className = elementClass;
//     newElement.setAttribute('name', elementName);
//     newElement.setAttribute('placeholder', elementPlaceholder);
//     newElement.id = elementId;
//     return newElement;
// }
// const textAreaElement = (name, placeholder, elementClass, elementId, cols = 4, rows = 2) => {
//     const element = document.createElement('textarea');
//     element.setAttribute('type', 'text');
//     element.className = elementClass;
//     element.setAttribute('name', name);
//     element.setAttribute('placeholder', placeholder);
//     element.setAttribute('cols', cols);
//     element.setAttribute('rows', rows);
//     element.id = elementId;
//     return element;
// }

// const labelGenerator = (forElement, text) => {
//     const label = document.createElement('label');
//     label.setAttribute('for', forElement);
//     label.innerText = text;
//     return label; 
// }
// console.log(globalFormElements('input', 'text', 'example', 'form-control bg-primary', 'Type your example here'));

// console.log(globalFormElements('textarea', 'text', 'message', 'bg-danger', 'Please, let us know your concerns here.' ));

// const form = document.createElement('form');
// const inputEmail = globalFormElements('input', 'email', 'email', 'form-control', 'Enter email here');
// const inputSubject = globalFormElements('input', 'text', 'subject', 'form-control', 'Enter Subject here');
// const textArea = textAreaElement('message', 'Your message here...', 'form-control', 'message', 5, '');
// const button = document.createElement('button');
// button.className = 'btn-primary btn';
// button.setAttribute('type', 'submit');
// button.innerText = 'Submit Now';

// const labelForEmail = labelGenerator('email', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, dolor?');

// const labelForSubject = labelGenerator('subject', 'Subject');
// const labelForTextArea = labelGenerator('message', 'Message ');

// const formGroup = document.createElement('div');
// formGroup.className = 'form-group';

// //append labels to inputs

// formGroup.appendChild(labelForEmail);
// formGroup.appendChild(inputEmail);
// formGroup.appendChild(labelForSubject);
// formGroup.appendChild(inputSubject);
// formGroup.appendChild(labelForTextArea);
// formGroup.appendChild(textArea);

// form.appendChild(formGroup);
// //=============================
// //=============================

// //==========================================
// // const email = document.createElement('input');
// // email.setAttribute("type","email");
// // const text = document.createElement('textarea');
// // // text.setAttribute("type",email);
// // const submit = document.createElement('button');
// // submit.setAttribute("name", "submit");
// // submit.setAttribute("type", "submit");
// // subformmit.setAttribute("value", "submit");
// // submit.innerText = "Submit";


// // content.appendChild(form);
// // content.appendChild(email);
// // content.appendChild(text);
// // content.appendChild(submit);

// form.setAttribute('method', 'GET');
// form.setAttribute('action', 'form-submission.js');
// form.setAttribute('name', 'myForm');

// // ------------------ jacques -------------------------
// function globalFormElements(element, elementType, elementName, elementClass, elementPlaceholder, elementId) {
//     //element : create the type of element you seek
//     const newElement = document.createElement(element);
//     newElement.setAttribute('type', elementType);
//     newElement.className = elementClass;
//     newElement.setAttribute('name', elementName);
//     newElement.setAttribute('placeholder', elementPlaceholder);
//     newElement.id = elementId;
//     return newElement;
// }
// const textAreaElement = (name, placeholder, elementClass, elementId, cols = 4, rows = 2) => {
//     const element = document.createElement('textarea');
//     element.setAttribute('type', 'text');
//     element.className = elementClass;
//     element.setAttribute('name', name);
//     element.setAttribute('placeholder', placeholder);
//     element.setAttribute('cols', cols);
//     element.setAttribute('rows', rows);
//     element.id = elementId;
//     return element;
// }

// const labelGenerator = (forElement, text) => {
//     const label = document.createElement('label');
//     label.setAttribute('for', forElement);
//     label.innerText = text;
//     return label; 
// }
// console.log('this is an element: ',globalFormElements('input', 'text', 'example', 'form-control bg-primary', 'Type your example here'));

// console.log('this is a text-area element: ',globalFormElements('textarea', 'text', 'message', 'bg-danger', 'Please, let us know your concerns here.' ));


// // 
// const form = document.createElement('form');
// const inputEmail = globalFormElements('input', 'email', 'email', 'form-control', 'Enter email here');
// const inputSubject = globalFormElements('input', 'text', 'subject', 'form-control', 'Enter Subject here');
// const textArea = textAreaElement('message', 'Your message here...', 'form-control', 'message', 5, '');
// const button = document.createElement('button');
// button.className = 'btn-primary btn';
// button.setAttribute('type', 'submit');
// button.innerText = 'Submit Now';

// const labelForEmail = labelGenerator('email', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, dolor?');

// const labelForSubject = labelGenerator('subject', 'Subject');
// const labelForTextArea = labelGenerator('message', 'Message ');

// const formGroup = document.createElement('div');
// formGroup.className = 'form-group';

// //append labels to inputs

// formGroup.appendChild(labelForEmail);
// formGroup.appendChild(inputEmail);
// formGroup.appendChild(labelForSubject);
// formGroup.appendChild(inputSubject);
// formGroup.appendChild(labelForTextArea);
// formGroup.appendChild(textArea);
// formGroup.appendChild(button);

// form.appendChild(formGroup);

// form.setAttribute('method', 'GET');
// form.setAttribute('action', 'form-submission.js');
// form.setAttribute('name', 'myForm');

// let myelememt = document.getElementById('id1');
// myelememt.appendChild(form);

// --------------------- end Jacques --------------------


//-----------begin mark ---------------------
// 
// original below ---- arrow functions rewritten below

// function globalFormElements(element, elementType, elementName, elementClass, elementPlaceholder, elementId) {
//     //element : create the type of element you seek
//     const newElement = document.createElement(element);
//     newElement.setAttribute('type', elementType);
//     newElement.className = elementClass;
//     newElement.setAttribute('name', elementName);
//     newElement.setAttribute('placeholder', elementPlaceholder);
//     newElement.id = elementId;
//     return newElement;
// }


// const textAreaElement = (name, placeholder, elementClass, elementId, cols = 4, rows = 2) => {
//     const element = document.createElement('textarea');
//     element.setAttribute('type', 'text');
//     element.className = elementClass;
//     element.setAttribute('name', name);
//     element.setAttribute('placeholder', placeholder);
//     element.setAttribute('cols', cols);
//     element.setAttribute('rows', rows);
//     element.id = elementId;
//     return element;
// }

// const labelGenerator = (forElement, text) => {
//     const label = document.createElement('label');
//     label.setAttribute('for', forElement);
//     label.innerText = text;
//     return label; 
// }


//function to create elements
function globalFormElements(element, elementType, elementName, elementClass, elementPlaceholder, elementId) {
    //element : create the type of element you seek
    const newElement = document.createElement(element);
    newElement.setAttribute('type', elementType);
    newElement.className = elementClass;
    newElement.setAttribute('name', elementName);
    newElement.setAttribute('placeholder', elementPlaceholder);
    newElement.id = elementId;
    return newElement;
}

//function to create labels
function labelGenerator(forElement, text) {
    const label = document.createElement('label');
    label.setAttribute('for', forElement);
    label.innerText = text;
    return label; 
}

// function to create text area element
function textAreaElement(name, placeholder, elementClass, elementId, cols = 4, rows = 2){
    const element = document.createElement('textarea');
    element.setAttribute('type', 'text');
    element.className = elementClass;
    element.setAttribute('name', name);
    element.setAttribute('placeholder', placeholder);
    element.setAttribute('cols', cols);
    element.setAttribute('rows', rows);
    element.id = elementId;
    return element;
}

//create form function
function createForm(){
    const element = document.createElement('form');
    element.setAttribute('method', 'GET');
    element.setAttribute('action', 'form-submission.js');
    element.setAttribute('name', 'myForm');
    return element;
}

//append stuff function
function appendStuff(){
    thisForm.appendChild(lEmail);
    thisForm.appendChild(iEmail);
    thisForm.appendChild(lSubject);
    thisForm.appendChild(iSubject);
    thisForm.appendChild(lTextArea);
    thisForm.appendChild(iBody);
    thisForm.appendChild(button);
    }


// create form
const thisForm = createForm();

//create inputs
const iEmail = globalFormElements('input','input','email','form-control','enter email address here');
const iSubject = globalFormElements('input', 'text', 'subject', 'form-control', 'Enter subject here');
const iBody = textAreaElement('message', 'Your message here', 'form-control','message',5,'');

//create labels
const lEmail = labelGenerator('email','Lorem ipsum dolor sit  adipisicing elit. Debitis, dolor?');
const lSubject = labelGenerator('subject', 'Subject');
const lTextArea = labelGenerator('message', 'Message ');

//create button
const button = document.createElement('button');
button.className = 'btn-primary btn';
button.setAttribute('type', 'submit');
button.innerText = 'Submit Now';




//put stuff together
appendStuff();

//wrap up and put elements into index
let myelememt = document.getElementById('id1');
myelememt.appendChild(thisForm);










