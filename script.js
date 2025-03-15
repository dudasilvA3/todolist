const form = document.querySelector("form");
const inputText = document.querySelector('input[type="text"]');
const ul = document.querySelector("ul");

form.addEventListener("submit", (event) => {
    event.preventDefault(); //impede da pagina ser recarregada e perde tudo
    const taskTitle = inputText.value; //taskTitle recebe o que é digitado no input
    if (taskTitle.length < 3) {
        alert('Sua tarefa precisa ao menos 3 letras');
        return;
    }
    const li = document.createElement('li');

    const inputCheckbox = document.createElement('input')
    inputCheckbox.setAttribute('type', 'checkbox');
    inputCheckbox.addEventListener('change',(event)=>{
    const liTaggle = event .target.parentElement;
    const spanTaggle = liTaggle.querySelector('span');
    const done = event .target.checked
    if(!done){
        spanTaggle.style.textDecoration='none';

    } else {
        spanTaggle.style.textDecoration='line-through';
    }
})
    const span = document.createElement('span');
    span.textContent = taskTitle;
    const button = document.createElement('button');

    button.textContent='Remover';
    button.addEventListener('click',(event)=>{
        ul.removeChild(event.target.parentElement)
    })


    li.appendChild(inputCheckbox);
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li)
    inputText.value = "";
})