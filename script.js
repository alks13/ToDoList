
let container = document.createElement('div');
container.classList.add('container');
document.body.append(container);


let $header = document.createElement('header');
$header.classList.add('header');
$header.innerHTML = 'ToDoList';
container.append($header);

let content = document.createElement('div');
content.classList.add('content');
container.append(content)

let divForm = document.createElement('div');
divForm.classList.add('form');
container.append(divForm)

let $form = document.createElement('form');
$form.classList.add('form');
divForm.append($form);

let $input = document.createElement('input');
$input.classList.add('text');
$input.type = 'input';
$input.id = 'input';
$form.append($input);

let button1 = document.createElement('button');
button1.classList.add('create');
button1.type = 'button'
button1.innerHTML ='&#9989';
$form.append(button1)

let button2 = document.createElement('button');
button2.classList.add('remove');
button2.type = 'button';
button2.innerHTML = '&#10007;'
$form.append(button2)



let ToDoContent = document.querySelector('content'),
 addToButton = document.querySelector('button.create'),
 deleteToAll= document.querySelector('button.remove'),
 inputField = document.querySelector('input');
 

addToButton.addEventListener('click',function(){
  if(inputField.value  === ''){
alert('Заполните строку');
}else{

  let paragraph = document.createElement('p');
  paragraph.innerText = inputField.value;

  let checkInput = document.createElement('input');
  checkInput.type = 'checkbox';
  checkInput.id = 'check';
  checkInput.classList.add('checked')


  let deleteItem = document.createElement('button')
  deleteItem.innerHTML = '  &#9986;'
  deleteItem.type = 'button';
  deleteItem.classList.add('delete');
  paragraph.appendChild(checkInput)
  paragraph.appendChild(deleteItem);
  content.appendChild(paragraph);
  inputField.value = "";

  deleteItem.addEventListener('click',function(){
  paragraph.remove();
 })

 checkInput.addEventListener('click' , function(){
     paragraph.style.textDecoration = "line-through";
 });

deleteToAll.addEventListener('click',function(){
    let element = content.querySelectorAll('p');
    for(let e of element)
      content.removeChild(e)
  });
}
});











