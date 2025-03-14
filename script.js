const form = document.querySelector("form");
const inputText = document.querySelector('input[type="text"]');
const ul= document.querySelector("ul");

form.addEventListener("submit", (event)=> {
    event.preventDefault(); //impede da pagina ser recarregada e perde tudo
    const taskTitle = inputText.value; //taskTitle recebe o que é digitado no input
    if(taskTitle.length < 3){
        alert('Sua tarefa precisa ao menos 3 letras');
        return;
    }
    const li = document.createElement('li');
    li.textContent = taskTitle;
   ul.appendChild(li)
    inputText.value="";

})