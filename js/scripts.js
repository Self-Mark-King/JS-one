
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


// //function to create elements
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

// //function to create labels
// function labelGenerator(forElement, text) {
//     const label = document.createElement('label');
//     label.setAttribute('for', forElement);
//     label.innerText = text;
//     return label; 
// }

// // function to create text area element
// function textAreaElement(name, placeholder, elementClass, elementId, cols = 4, rows = 2){
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

// //create form function
// function createForm(){
//     const element = document.createElement('form');
//     element.setAttribute('method', 'GET');
//     element.setAttribute('action', 'form-submission.js');
//     element.setAttribute('name', 'myForm');
//     return element;
// }

// // //append stuff function
// // function appendStuff(appendTo, appendValue){
// //     thisForm.appendChild(lEmail);
// //     thisForm.appendChild(iEmail);
// //     thisForm.appendChild(lSubject);
// //     thisForm.appendChild(iSubject);
// //     thisForm.appendChild(lTextArea);
// //     thisForm.appendChild(iBody);
// //     thisForm.appendChild(button);
// //     }




// // //create inputs
// // const iEmail = globalFormElements('input','input','email','form-control','enter email address here');
// // const iSubject = globalFormElements('input', 'text', 'subject', 'form-control', 'Enter subject here');
// // const iBody = textAreaElement('message', 'Your message here', 'form-control','message',5,'');

// // // //create labels
// // const lEmail = labelGenerator('email','Lorem ipsum dolor sit  adipisicing elit. Debitis, dolor?');
// // const lSubject = labelGenerator('subject', 'Subject');
// // const lTextArea = labelGenerator('message', 'Message ');

// //create button
// // const button = document.createElement('button');
// // button.className = 'btn-primary btn';
// // button.setAttribute('type', 'submit');
// // button.innerText = 'Submit Now';

// //put stuff together
// // create form
// const thisForm = createForm();



// //wrap up and put elements into index


// function alltogether(){
//     //create labels
// const lEmail = labelGenerator('email','Lorem ipsum dolor sit  adipisicing elit. Debitis, dolor?');
// const lSubject = labelGenerator('subject', 'Subject');
// const lTextArea = labelGenerator('message', 'Message ');
// //create inputs
// const iEmail = globalFormElements('input','input','email','form-control','enter email address here');
// const iSubject = globalFormElements('input', 'text', 'subject', 'form-control', 'Enter subject here');
// const iBody = textAreaElement('message', 'Your message here', 'form-control','message',5,'');
// //create button
// const button = document.createElement('button');
// button.className = 'btn-primary btn';
// button.setAttribute('type', 'submit');
// button.innerText = 'Submit Now';
// thisForm.appendChild(lEmail);
// thisForm.appendChild(iEmail);
// thisForm.appendChild(lSubject);
// thisForm.appendChild(iSubject);
// thisForm.appendChild(lTextArea);
// thisForm.appendChild(iBody);
// thisForm.appendChild(button);
// let myelememt = document.getElementById('id1');
// myelememt.appendChild(thisForm);
// }
// alltogether();

//end mark
//-------------------------------


// // ------------------last class in-class work
// //create taco recipe usig prototypes. first creeate what we need

// function TacoRecipe(meat, seasonings, vegtables, tortilla){
//     this.meat = meat;
//     this.seasonings = seasonings;
//     this.vegtables = vegtables;
//     this.tortilla = tortilla;
// }

// TacoRecipe.prototype.prepIngredients = function(){
//     console.log(`Get 2 lbs ${this.meat} and add to Pan. In a separeate bowl collect ${this.seasonings}. make sure to get your ${this.vegtables} ready to be washed and cut. Then dip the ${this.tortilla} in some oil and ready to fry in the pan`);
// } 

// // random non prototype function
// const greeting = function (){
//     console.log('good evening');
// }

// //'name' below seems to be optional
// // greeting(name);

// const getTypeOfMeat = function(){
//     TacoRecipe.call(this.meat);
// }


// //doesn't seem to work
// // TacoRecipe.call(greeting);
// // TacoRecipe.call(greeting);



// // console.log(getTypeOfMeat);
// // getTypeOfMeat();


// const asadaTaco = new TacoRecipe('carne asada', ['garlic powder', 'cumin', 'onion powder', 'salt and pepper', ], ['lemon', 'tomatoes', 'onion', 'lettuce/cabbage', 'radish'],'corn tortilla');

// const carnitas = new TacoRecipe('carnitas', 'salt', 'pico de gallo', 'corn tortilla');

// console.log(asadaTaco.prepIngredients());
// carnitas.prepIngredients();

// function Test(phrase){
//     this.phrase = phrase;
// }

// function exampleTest(phrase){
//     Test.call(this.phrase);
//     this.random = 'ima robot';
// }

// console.log(new exampleTest('i fail'));

// TacoRecipe.prototype.howToEatTaco = function(temp){
//     if(temp === 'hot' || temp === 'burning'){
//         console.log(`when your ${this.meat} taco gets to this ${temp}, you will burn your toungue.`);
//     }else { 
//         Console.log(`your ${this.meat} is yummy`);
//     }
// }
// // TacoRecipe.prototype.pricePerTacoRation = (perTaco){
// //     if (this.meat)
// // }
// TacoRecipe.prototype.howToEatTaco('hot');

// // console.log(TacoRecipe('carnitas', 'salt', 'pico de gallo', 'corn tortilla'));

// //-------------------- end last class in-class work

// console.log(this);

// const myConst = "const";
// let myNumber = 7;

// console.log(myConst);
// console.log(myNumber);

// let obj = {
//     a: checkScope
// } 

let myObj = {
    firstName: 'Mark', 
    lastName: 'King'
};


