const form = document.querySelector("form");
const inputText = document.querySelector('input[type="text"]');
const ul = document.querySelector("ul");

function loadTasks() {
    const tasks = JSON.parce(localStorage.getItem('tasks')) || [];
    ul.innerHTML = '';
    tasks.forEach((tasks) => {
        const li = document.createElement('li');

        const inputCheckbox = document.createElement('input')
        inputCheckbox.setAttribute('type', 'checkbox');
        inputCheckbox.checked = tasks.done;
        inputCheckbox.addEventListener('change', (event) => {
            const liTaggle = event.target.parentElement;
            const spanTaggle = liTaggle.querySelector('span');
            const done = event.target.checked
            if (!done) {
                spanTaggle.style.textDecoration = 'none';

            } else {
                spanTaggle.style.textDecoration = 'line-through';
            }
            task.done=done;
            save=Task();
        });
        const span = document.createElement('span');
        span.textContent = task.text;
        if(task.done){
            span.style.textDecoration='line-through'
        }

        const button = document.createElement('button');

        button.textContent = 'Remover';
        button.addEventListener('click', () => {
            removeTasks(task);
        });


        li.appendChild(inputCheckbox);
        li.appendChild(span);
        li.appendChild(button);
        ul.appendChild(li)
    
    });
}


function saveTasks() {
    const liElements = document.querySelectorA || ('ul li');//seleciona todas ul li
    liElements.forEach(li => {
        const span = li.querySelector('span')
        const checkbox = li.querySelector('input [type:"checkbox"]');
        tasks.push({
            text: span.textContent,
            done: checkbox.checked
        });
    });
    localStorage.setItem('tasks', JASON.stringify(tasks));
}

function removeTasks(taskRemove) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updateTasks = tasks.filter(tasks => tasks.text !== taskRemove.text);//filtra a tarefa a removida
    localStorage.setItem('tasks', JSON.stringify(updateTasks));//Atualiza o localStorage eo stringfy converte JSON para string.

}
//fução com parametro




form.addEventListener("submit", (event) => {
    event.preventDefault(); //impede da pagina ser recarregada e perde tudo
    const taskTitle = inputText.value; //taskTitle recebe o que é digitado no input
    if (taskTitle.length < 3) {
        alert('Sua tarefa precisa ao menos 3 letras');
        return;
    }
    const newTask = {
        text: taskTitle,
        done:false
    };
    
    const tasks = JASON.parse(localStorage.getItem('tasks'))||[];
    tasks.push(newTask);
    localStorage.setItem('tasks',JASON.stringify(tasks))
    inputText.value='';
    loadTasks();

});
    Window.anload=loadTasks;