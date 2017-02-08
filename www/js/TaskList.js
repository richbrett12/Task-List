class TaskList {
	constructor() {
		this.tasks = [];
		this.title = "";
		this.totalTime = 0;
		// just a reminder of what we want our HTML to look like
		this.proto = `
			 <div class="tasklist--wrapper">
                <ul class="tasklist">

                </ul>
                <button type="button" class="addtask">Add Task</button>
            </div>
            `

		this.el = document.createElement('div');
		this.el.className = "tasklist--wrapper";
		this.tasklist = document.createElement('ul');
		this.tasklist.className = "tasklist";
		this.el.appendChild(this.tasklist);
		var button = document.createElement('button');
		button.className = "addtask";
		button.setAttribute('type', 'button');
		button.innerHTML = "Add Task";
		button.onclick = this.addTask.bind(this);
		this.el.appendChild(button);
	}
// methods
	// alert: alert user to complete task
	// update priorities --> not sure how we're going to implement this yet
	// remove a task
	// remove all tasks marked as done (optional?)

	addTask(fake_arg1, fake_arg2) {
		// create a new task
		var task = new Task();
		this.tasks.push(task);

		// append task to tasklist
		task.appendTo(this.tasklist);
	}

	appendTo(node) {
		node.appendChild(this.el);
	}

	// able to pass a task around --> not sure how to implment this yet
}