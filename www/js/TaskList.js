class TaskList {
	constructor() {
		this.tasks = [];
		this.title = "";
		this.totalTime = 0;
		// just a reminder of what we want our HTML to look like
		this.proto = `
			 <div class="tasklist--wrapper">
			 	<input type='text' placeholder='Enter Title'/>
                <ul class="tasklist">

                </ul>
                <div class="btn-wrapper">
	                <button type="button" class="addtask">Add Task</button>
	                <button type="button" class="delete-button">Delete</button>
	            </div>
            </div>
            `

		this.el = document.createElement('div');
		this.el.className = "tasklist--wrapper";
		// this.el.ondrop = this.handleDrop.bind(this);
		this.title = document.createElement('input');
		this.title.className = "tasklist-title";
		this.title.setAttribute('placeholder', "Enter Title");
		this.el.appendChild(this.title);
		this.tasklist = document.createElement('ul');
		this.tasklist.className = "tasklist";
		this.tasklist.addEventListener('drop', this.handleDrop.bind(this));
		this.el.appendChild(this.tasklist);
		var btnWrapper = document.createElement('div');
		btnWrapper.className = "btn-wrapper";
		this.el.appendChild(btnWrapper);
		var button = document.createElement('button');
		button.className = "addtask";
		button.setAttribute('type', 'button');
		button.innerHTML = "Add Task";
		button.onclick = this.addTask.bind(this);
		btnWrapper.appendChild(button);
		var deleteButton = document.createElement('button');
		deleteButton.className = "delete-button";
		deleteButton.setAttribute('type', 'button');
		deleteButton.innerHTML = "Delete";
		deleteButton.onclick = this.deleteTaskList.bind(this);
		btnWrapper.appendChild(deleteButton);
	}
    // postcondition: promises to set the parent of the task to this tasklist
    // change this to take only one parameter
	addTask(event, task, index) {
		if (!task) {
			task = new Task(this);
		} else {
			task.setParent(this);
		}

		if (index === undefined) {
			index = this.tasks.length;
		}
		var priority = this.tasks.length;
		task.setPriority(priority);
		this.tasks.splice(index, 0, task);
		task.appendTo(this.tasklist);
		this.updatePriorities();
	}

	removeTask(task) {
		var index = this.tasks.indexOf(task);
		this.tasks.splice(index, 1);
		this.updatePriorities();
	}

	deleteTaskList() {
		this.el.remove();
	}

	appendTo(node) {
		node.appendChild(this.el);
	}

	getTitle() {
		return this.title.value;
	}

	setTitle(val) {
		this.title.value = val;
	}


	getTaskToAlert(time) {
		if (this.tasks.length == 0) {
			return null;
		}

		var priority;
		var target = -1;
		for(var i = 0; i < this.tasks.length; i++) {
			if (this.tasks[i].shouldAlert(time) === true) {
				if (priority === undefined || this.tasks[i].getPriority() < priority) {
					priority = this.tasks[i].getPriority();
					target = i;
				}
			}
		}
		if (target === -1) {
			return null;
		}
		return this.tasks[target];
	}

	handleDrop(event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		}

		// find the task we're trying to replace
		var li = event.path[1]; // path is an array full of DOM nodes that have received the event from the bottom-up
		var taskToReplace = this.tasks.find(function(task) {
			return task.el == li;
		});

		if (taskToReplace === draggedTask) {
			return;
		}

		// set draggedTask's priority to be higher than the taskToReplace
		var newPriority = +taskToReplace.getPriority();
		draggedTask.moveTo(this, newPriority);
	}
	
	updatePriorities() {
		// Set each tasks priority based of position in tasks array
		for (var i = 0; i < this.tasks.length; i++) {
			this.tasks[i].setPriority(i);
		}
	}
}