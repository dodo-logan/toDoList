const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Fonction pour ajouter une tâche 
function addTask() {


    // Ici je Crée les boutons "Done" et "Delete" avec les bonnes classes
    const doneButton = document.createElement('button');
    doneButton.className = "done";
    doneButton.textContent = "Done";

    const deleteButton = document.createElement('button');
    deleteButton.className = "delete";
    deleteButton.textContent = "Delete";

    // on Récupére la valeur de l'input
    const taskText = taskInput.value;

    // Créez un nouvel élément <li> pour la tâche
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <li>
            <p>${taskText}</p>
            <div>
            <button class="done">Done</button>
            <button class="delete">Delete</button>
        
            </div>
        </li>
    `;

    // Ajoutez la tâche à la liste avec appendchild
    taskList.appendChild(taskItem);

    // Efface le contenu de l'input
    taskInput.value = '';
}

//ajouter un addeventlistner quand click sur add
document.getElementById("add-task").addEventListener('click', addTask);

// Fonction pour supprimer et specifier quand la tache est terminee

function deleteOrCompleteTask(event) {


    //ces conditions permet de marquer une tache comme completee ou pas en alternance du bouton done ou undo ou de supprimer une tache en cliquant sur delete

    
    if (event.target.classList.contains("done")) {
       
        const listItem = event.target.closest("li");
        listItem.classList.add("completed");
        event.target.textContent = "Undo"; 
        event.target.classList.remove("done");
        event.target.classList.add("undo");


    } else if (event.target.classList.contains("undo")) {
        
        const listItem = event.target.closest("li");
        listItem.classList.remove("completed");
        event.target.textContent = "Done"; 
        event.target.classList.remove("undo");
        event.target.classList.add("done");


    } else if (event.target.classList.contains("delete")) {
        
        const listItem = event.target.closest("li");
        listItem.remove();
    }
}


taskList.addEventListener('click', deleteOrCompleteTask);