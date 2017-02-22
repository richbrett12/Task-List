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
		this.title = document.createElement('input');
		this.title.className = "tasklist-title";
		this.title.setAttribute('placeholder', "Enter Title");
		this.el.appendChild(this.title);
		this.tasklist = document.createElement('ul');
		this.tasklist.className = "tasklist";
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
// methods
	// alert: alert user to complete task
	// update priorities --> not sure how we're going to implement this yet

	// remove all tasks marked as done
			// implement this function as well
	// getTaskToAlert()
			// run through all of tasks
			// figure out which ones we should alert
			// for now, take the first one

    // postcondition: promises to set the parent of the task to this tasklist
	addTask(event, task) {
		if (!task) {
			task = new Task(this);
		} else {
			task.setParent(this);
		}
		this.tasks.push(task);
		task.appendTo(this.tasklist);
	}

	removeTask(task) {
		var index = this.tasks.indexOf(task);
		this.tasks.splice(index, 1);	
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

/*
	getTaskToAlert(time) {
		var priority = 0;
		var i = 0;
		var target = -1;
		do {
			if (taskLists[0].tasks[i].shouldAlert(time) === true) {
				if (taskLists[0].tasks[i].priority > priority) {
					priority = taskLists[0].tasks[i].priority;
					target = i;
				}
			}

			i++;

		} while( i <= number of tasks );
		// get the first task that . . .
			// shoudl be alerted
			// AND
			// has the highest priority
		// loop through your tasks
		// determine whether if should be alerte
d		// if it should, get the task and save it
		// sort list of tasks by priority ascending
		// return first task
		return tasksToAlert.shift();
	}
*/

	moveTask(task, tasklist) {
		this.removeTask(task);
		tasklist.addTask(null, task);
	}

	// able to pass a task around --> not sure how to implment this yet
}